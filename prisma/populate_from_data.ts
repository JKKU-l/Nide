import "dotenv/config";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../lib/generated/prisma/client";

const connectionString = process.env.DIRECT_URL || process.env.DATABASE_URL;
if (!connectionString) {
  throw new Error("Neither DIRECT_URL nor DATABASE_URL environment variable is set");
}

const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

function detectLangFromFile(file: string | null | undefined) {
  if (!file) return undefined;
  // match _xx before extension or at end of string
  const m = file.match(/_([a-z]{2})(?:\.json)?$/i);
  return m ? m[1] : undefined;
}

const LANG_MAP: Record<string, string[]> = {
  en: ['english', 'en', 'english_translation', 'en_us', 'en_gb'],
  my: ['myanmar', 'mm', 'my', 'myanmar_translation', 'burmese'],
  jp: ['japanese', 'jp', 'ja', 'japanese_translation'],
  kr: ['korean', 'kr', 'ko', 'korean_translation'],
  th: ['thai', 'th', 'thai_translation'],
  vi: ['vietnamese', 'vi', 'viet', 'vietnamese_translation']
};

function extractLangValue(source: any, lang: string, detectedLang?: string): string | undefined {
  if (source == null) return undefined;
  if (typeof source === 'string') return source;
  const keys = LANG_MAP[lang] || [lang];
  for (const k of keys) {
    if (Object.prototype.hasOwnProperty.call(source, k) && source[k] != null) return source[k];
  }
  for (const k of Object.keys(source)) {
    const lower = k.toLowerCase();
    if (lower.endsWith(`_${lang}`) || lower.startsWith(`${lang}_`)) {
      const v = source[k];
      if (v != null) return v;
    }
  }

  if (lang === detectedLang || (lang === 'en' && !detectedLang)) {
    const commonKeys = ['text', 'label', 'description', 'content', 'title', 'header', 'value'];
    for (const k of commonKeys) {
      if (Object.prototype.hasOwnProperty.call(source, k) && source[k] != null && typeof source[k] === 'string') {
        return source[k];
      }
    }
  }

  return undefined;
}

function setLocalizedFields(updateData: any, fieldBase: string, valueSource: any, detectedLang?: string) {
  if (valueSource == null) return;
  if (typeof valueSource === 'string') {
    const tl = detectedLang || 'en';
    updateData[`${fieldBase}_${tl}`] = valueSource;
    return;
  }
  for (const lang of Object.keys(LANG_MAP)) {
    const val = extractLangValue(valueSource, lang, detectedLang);
    if (val != null) updateData[`${fieldBase}_${lang}`] = val;
  }
}

async function withRetries<T>(fn: () => Promise<T>, attempts = 5, delay = 5000): Promise<T> {
  let lastErr: any;
  for (let i = 0; i < attempts; i++) {
    try {
      return await fn();
    } catch (e) {
      lastErr = e;
      const msg = String(e);
      console.warn(`Attempt ${i + 1} failed: ${msg}. Retrying in ${delay}ms...`);
      await new Promise((r) => setTimeout(r, delay));
    }
  }
  throw lastErr;
}

const BATCH_SIZE = 10;

async function populateStories() {
  const total = await prisma.story.count({ where: { data: { not: null as any } } });
  console.log(`Processing ${total} stories in batches of ${BATCH_SIZE}...`);
  
  for (let offset = 0; offset < total; offset += BATCH_SIZE) {
    const stories = await prisma.story.findMany({
      where: { data: { not: null as any } },
      include: { sections: { include: { exercises: { include: { options: true } } } } },
      skip: offset,
      take: BATCH_SIZE
    });

    for (const s of stories) {
      try {
        await withRetries(async () => {
          const lang = s.language || detectLangFromFile(s.file) || undefined;
          const d: any = s.data || {};
          const sections = Array.isArray(d.sections) ? d.sections : (d.content?.sections || []);
          for (const [idx, sec] of sections.entries()) {
            const key = sec.id || sec.sectionKey || `s${idx}`;
            const sectionRow = (s as any).sections?.find((x: any) => x.sectionKey === key || x.order === idx);
            if (!sectionRow) continue;
            const title = sec.title || sec.header || undefined;
            const content = sec.content || sec.text || sec.body || {};
            const updateData: any = {};
            setLocalizedFields(updateData, 'title', title, lang);
            setLocalizedFields(updateData, 'content', content, lang);
            await prisma.storySection.update({ where: { id: sectionRow.id }, data: updateData });

            const exercises = Array.isArray(sec.content?.exercises) ? sec.content.exercises : (sec.exercises || []);
            for (const [eIdx, ex] of exercises.entries()) {
              const exIdxVal = ex.id ?? ex.index ?? eIdx;
              const exRow = sectionRow.exercises.find((exr: any) => exr.exerciseIdx === exIdxVal);
              if (!exRow) continue;
              const exUpdate: any = {};
              const q = ex.question || ex.prompt || ex.text || ex.q;
              const a = ex.answer || ex.correct_answer || ex.a;
              setLocalizedFields(exUpdate, 'question', q, lang);
              setLocalizedFields(exUpdate, 'answer', a, lang);
              if (ex.correct_answer) exUpdate.correctAnswer = ex.correct_answer;
              await prisma.exercise.update({ where: { id: exRow.id }, data: exUpdate });

              const opts = ex.options || ex.choices || [];
              for (let i = 0; i < opts.length; i++) {
                const optVal = typeof opts[i] === 'string' ? opts[i] : opts[i].text || opts[i].label || JSON.stringify(opts[i]);
                const optRow = exRow.options.find((or: any) => or.idx === i);
                if (!optRow) continue;
                const optUpdate: any = {};
                setLocalizedFields(optUpdate, 'text', optVal, lang);
                await prisma.exerciseOption.update({ where: { id: optRow.id }, data: optUpdate });
              }
            }
          }
        });
      } catch (err) {
        console.error(`Error processing story id=${s.id} after all retries:`, err);
      }
    }
    await new Promise(r => setTimeout(r, 500));
  }
}

async function populateGrammar() {
  const total = await prisma.grammar.count({ where: { data: { not: null as any } } });
  console.log(`Processing ${total} grammar records in batches of ${BATCH_SIZE}...`);

  for (let offset = 0; offset < total; offset += BATCH_SIZE) {
    const grams = await prisma.grammar.findMany({
      where: { data: { not: null as any } },
      include: { sections: { include: { rules: true, examples: true } } },
      skip: offset,
      take: BATCH_SIZE
    });

    for (const g of grams) {
      try {
        await withRetries(async () => {
          const lang = g.language || detectLangFromFile(g.file) || undefined;
          const d: any = g.data || {};
          const sections = Array.isArray(d.sections) ? d.sections : (d.content?.sections || []);
          
          // Pre-load potential daily usage if it exists for this file
          const daily = await prisma.dailyUsage.findFirst({ where: { file: g.file }, include: { vocabs: true } });

          for (const [sIdx, sec] of sections.entries()) {
            const secKey = sec.id || sec.sectionKey || `g${sIdx}`;
            const secRow = (g as any).sections.find((x: any) => x.sectionKey === secKey || x.order === sIdx);
            if (!secRow) continue;
            const title = sec.title || undefined;
            const desc = sec.description || sec.content || sec.text || undefined;
            const updateData: any = {};
            setLocalizedFields(updateData, 'title', title, lang);
            setLocalizedFields(updateData, 'description', desc, lang);
            await prisma.grammarSection.update({ where: { id: secRow.id }, data: updateData });

            const examples = sec.content?.examples_table || sec.examples_table || sec.examples || null;
            if (examples) {
              let table = await prisma.examplesTable.findFirst({ where: { sectionId: secRow.id } });
              if (!table) {
                table = await prisma.examplesTable.create({ data: { sectionId: secRow.id, title: examples.title || undefined } });
              }
              const rows = examples.rows || examples.data || (Array.isArray(examples) ? examples : []);
              for (const [rIdx, r] of rows.entries()) {
                const rowData: any = { tableId: table.id, rowIndex: rIdx };
                if (Array.isArray(r)) {
                  rowData.german = r[0] ? String(r[0]) : undefined;
                  const val = r[1] ? String(r[1]) : undefined;
                  if (val) {
                    if (!lang || lang === 'en') rowData.english = val;
                    else if (lang === 'my') rowData.myanmar = val;
                    else if (lang === 'jp') rowData.japanese = val;
                    else if (lang === 'kr') rowData.korean = val;
                    else if (lang === 'th') rowData.thai = val;
                    else if (lang === 'vi') rowData.vietnamese = val;
                  }
                } else if (typeof r === 'object' && r !== null) {
                  const numericKeys = Object.keys(r).filter(k => /^\d+$/.test(k)).sort((a,b)=>+a - +b);
                  if (numericKeys.length > 0) {
                    rowData.german = String(r[numericKeys[0]]) || undefined;
                    const val = numericKeys.length > 1 ? String(r[numericKeys[1]]) : undefined;
                    if (val) {
                      if (!lang || lang === 'en') rowData.english = val;
                      else if (lang === 'my') rowData.myanmar = val;
                      else if (lang === 'jp') rowData.japanese = val;
                      else if (lang === 'kr') rowData.korean = val;
                      else if (lang === 'th') rowData.thai = val;
                      else if (lang === 'vi') rowData.vietnamese = val;
                    }
                  }
                  rowData.english = extractLangValue(r, 'en', lang) || rowData.english;
                  const maybeGer = r.german || r.de || r.deutsch || undefined;
                  if (!rowData.german && maybeGer) rowData.german = maybeGer;
                  rowData.myanmar = extractLangValue(r, 'my', lang) || rowData.myanmar;
                  rowData.japanese = extractLangValue(r, 'jp', lang) || rowData.japanese;
                  rowData.korean = extractLangValue(r, 'kr', lang) || rowData.korean;
                  rowData.thai = extractLangValue(r, 'th', lang) || rowData.thai;
                  rowData.vietnamese = extractLangValue(r, 'vi', lang) || rowData.vietnamese;
                } else {
                  rowData.english = String(r);
                }
                const existingRow = secRow.examples.find((er: any) => er.rowIndex === rIdx);
                if (existingRow) await prisma.examplesRow.update({ where: { id: existingRow.id }, data: rowData }); else await prisma.examplesRow.create({ data: rowData });
              }
            }

            const vocs = sec.content?.vocabulary || sec.content?.vocabulary_list || sec.vocabulary || [];
            if (vocs.length > 0 && daily) {
              for (const v of vocs) {
                const maybeGerman = v.german || v.de || v.deutsch || v.word || extractLangValue(v, 'de', lang);
                const maybeEnglish = v.english || v.en || extractLangValue(v, 'en', lang);
                if (!maybeGerman && !maybeEnglish) continue;
                
                let row = daily.vocabs.find((rv: any) => 
                  (maybeGerman && rv.german === maybeGerman) || (maybeEnglish && rv.english === maybeEnglish)
                );
                
                const upData: any = {};
                upData.german = maybeGerman || row?.german || undefined;
                upData.english = maybeEnglish || row?.english || undefined;
                upData.myanmar = extractLangValue(v, 'my', lang) || row?.myanmar || undefined;
                upData.japanese = extractLangValue(v, 'jp', lang) || row?.japanese || undefined;
                upData.korean = extractLangValue(v, 'kr', lang) || row?.korean || undefined;
                upData.thai = extractLangValue(v, 'th', lang) || row?.thai || undefined;
                upData.vietnamese = extractLangValue(v, 'vi', lang) || row?.vietnamese || undefined;
                upData.example_german = v.example_german || v.example_de || v.example_deutsch || extractLangValue(v.example || v, 'de', lang) || row?.example_german || undefined;
                upData.example_english = v.example_english || v.example_en || extractLangValue(v.example || v, 'en', lang) || row?.example_english || undefined;
                
                if (!row) {
                  await prisma.dailyUsageVocab.create({ data: { dailyUsageId: daily.id, ...upData } });
                } else {
                  await prisma.dailyUsageVocab.update({ where: { id: row.id }, data: upData });
                }
              }
            }

            const rules = sec.content?.why_use_them?.rules || sec.content?.rules || sec.rules || [];
            for (const [rIdx, r] of rules.entries()) {
              const existing = secRow.rules[rIdx];
              const createData: any = { sectionId: secRow.id, order: rIdx };
              if (typeof r === 'string') {
                setLocalizedFields(createData, 'rule', r, lang);
              } else {
                setLocalizedFields(createData, 'rule', r.rule || r.text || r, lang);
                setLocalizedFields(createData, 'example', r.example || undefined, lang);
              }
              if (!existing) await prisma.grammarRule.create({ data: createData }); else await prisma.grammarRule.update({ where: { id: existing.id }, data: createData });
            }
          }
        });
      } catch (err) {
        console.error(`Error processing grammar id=${g.id} after all retries:`, err);
      }
    }
    await new Promise(r => setTimeout(r, 500));
  }
}

async function populateDailyUsage() {
  const total = await prisma.dailyUsage.count({ where: { data: { not: null as any } } });
  console.log(`Processing ${total} daily usage records in batches of ${BATCH_SIZE}...`);

  for (let offset = 0; offset < total; offset += BATCH_SIZE) {
    const dailies = await prisma.dailyUsage.findMany({
      where: { data: { not: null as any } },
      include: { vocabs: true },
      skip: offset,
      take: BATCH_SIZE
    });

    for (const d of dailies) {
      try {
        await withRetries(async () => {
          const lang = d.language || detectLangFromFile(d.file) || undefined;
          const data: any = d.data || {};
          const sections = Array.isArray(data.sections) ? data.sections : (data.content?.sections || []);
          const title = data.title || data.header || undefined;
          if (title) {
            const upd: any = {};
            setLocalizedFields(upd, 'title', title, lang);
            await prisma.dailyUsage.update({ where: { id: d.id }, data: upd });
          }
          const allVocs: any[] = [];
          for (const sec of sections) {
            const vocs = sec.content?.vocabulary || sec.content?.vocabulary_list || sec.vocabulary || [];
            allVocs.push(...vocs);
          }
          if (data.vocabulary) allVocs.push(...(Array.isArray(data.vocabulary) ? data.vocabulary : [data.vocabulary]));
          if (data.content?.vocabulary) allVocs.push(...(Array.isArray(data.content.vocabulary) ? data.content.vocabulary : [data.content.vocabulary]));

          for (const v of allVocs) {
            if (typeof v !== 'object' || v === null) continue;
            
            const maybeGerman = v.german || v.de || v.deutsch || v.word || extractLangValue(v, 'de', lang);
            const maybeEnglish = v.english || v.en || extractLangValue(v, 'en', lang);
            if (!maybeGerman && !maybeEnglish) continue;

            const row = (d as any).vocabs?.find((rv: any) => 
              (maybeGerman && rv.german === maybeGerman) || (maybeEnglish && rv.english === maybeEnglish)
            );
            if (!row) continue;
            
            const upData: any = {};
            upData.german = maybeGerman || row?.german || undefined;
            upData.english = maybeEnglish || row?.english || undefined;
            upData.myanmar = extractLangValue(v, 'my', lang) || row?.myanmar || undefined;
            upData.japanese = extractLangValue(v, 'jp', lang) || row?.japanese || undefined;
            upData.korean = extractLangValue(v, 'kr', lang) || row?.korean || undefined;
            upData.thai = extractLangValue(v, 'th', lang) || row?.thai || undefined;
            upData.vietnamese = extractLangValue(v, 'vi', lang) || row?.vietnamese || undefined;
            upData.example_german = v.example_german || v.example_de || v.example_deutsch || extractLangValue(v.example || v, 'de', lang) || row?.example_german || undefined;
            upData.example_english = v.example_english || v.example_en || extractLangValue(v.example || v, 'en', lang) || row?.example_english || undefined;
            
            await prisma.dailyUsageVocab.update({ where: { id: row.id }, data: upData });
          }
        });
      } catch (err) {
        console.error(`Error processing dailyUsage id=${d.id} after all retries:`, err);
      }
    }
    await new Promise(r => setTimeout(r, 500));
  }
}

async function main() {
  console.log('Populating scalar language columns from JSON `data`...');
  await populateStories();
  await populateGrammar();
  await populateDailyUsage();
  console.log('Populating complete.');
}

main()
  .catch((e) => {
    console.error('Failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
