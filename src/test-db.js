const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
})

async function testConnection() {
  try {
    await prisma.$connect()
    console.log('✅ Connected to database successfully!')

    const articles = await prisma.article.findMany()
    console.log(`📝 Found ${articles.length} articles`)
  } catch (error) {
    console.error('❌ Database connection error:', error)
  } finally {
    await prisma.$disconnect()
  }
}

testConnection()
