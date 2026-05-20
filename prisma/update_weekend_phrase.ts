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

async function main() {
  console.log('Updating "Schönes Wochenende!" in Supabase...');

  const result = await prisma.dailyUsageVocab.updateMany({
    where: {
      german: {
        contains: "Schönes Wochenende",
        mode: 'insensitive'
      }
    },
    data: {
      english: "Have a nice weekend!",
      japanese: "良い週末を！ (Yoi shūmatsu o!)",
      korean: "좋은 주말 보내세요! (Jo-eun ju-mal bo-nae-se-yo!)",
      myanmar: "ပျော်ရွှင်စရာ ပိတ်ရက်ဖြစ်ပါစေ။ (Pyaw-shwin-sa-yar peik-yet hpyit-par-say.)",
      thai: "สุขสันต์วันหยุดสุดสัปดาห์! (Sook-san wan-yoot soot-sap-da!)",
      vietnamese: "Chúc cuối tuần vui vẻ! (Chook kwoy toon vwee veh!)"
    }
  });

  console.log(`Updated ${result.count} records in Supabase.`);
}

main()
  .catch((e) => {
    console.error('Update failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
