import "dotenv/config";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../lib/generated/prisma/lib/generated/prisma/client";

const connectionString = process.env.DIRECT_URL || process.env.DATABASE_URL;
if (!connectionString) {
  throw new Error("Neither DIRECT_URL nor DATABASE_URL environment variable is set");
}

const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

function detectLangFromFile(file: string | null | undefined) {
  if (!file) return undefined;
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

async function main() {
  console.log('Database seeding started...');
  
  // Add your seeding logic here
  // This is a template that can be customized based on your needs
  
  console.log('Database seeding completed successfully.');
}

main()
  .catch((e) => {
    console.error('Seeding failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
