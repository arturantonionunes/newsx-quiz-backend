const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
      ssl: {
        rejectUnauthorized: false, // Necessário para Supabase
      },
    },
  },
})

module.exports = prisma
