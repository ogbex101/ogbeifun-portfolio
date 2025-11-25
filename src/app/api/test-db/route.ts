import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
  try {
    // Test connection
    await prisma.$queryRaw`SELECT 1`
    
    // Create test project
    const testProject = await prisma.project.create({
      data: {
        title: 'Test Project - Database Working!',
        description: 'This confirms the database is connected',
        technologiesString: 'Next.js, PostgreSQL, Supabase',
        category: 'Test',
        featured: true
      }
    })
    
    return NextResponse.json({ 
      success: true, 
      message: 'Database connected successfully!',
      project: testProject
    })
  } catch (error: any) {
    return NextResponse.json({ 
      success: false, 
      error: error.message 
    }, { status: 500 })
  }
}