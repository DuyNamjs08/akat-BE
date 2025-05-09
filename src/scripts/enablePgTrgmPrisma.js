// scripts/enablePgTrgmPrisma.js
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function enablePgTrgm() {
  try {
    // Chạy lệnh SQL để kích hoạt extension pg_trgm
    await prisma.$executeRaw`CREATE EXTENSION IF NOT EXISTS pg_trgm;`;
    console.log('pg_trgm extension enabled successfully');
  } catch (error) {
    console.error('Error enabling pg_trgm:', error);
  } finally {
    await prisma.$disconnect();
  }
}

enablePgTrgm();
