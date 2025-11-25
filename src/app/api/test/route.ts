import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
  try {
    // Test database connection
    const testProject = await prisma.project.create({
      data: {
        title: 'Test Project',
        description: 'Testing database connection',
        technologiesString: 'Test, Database',
        category: 'Test',
        featured: false,
      },
    })
    
    console.log('✅ Test project created:', testProject.id)
    
    // Clean up
    await prisma.project.delete({
      where: { id: testProject.id }
    })
    
    return NextResponse.json({ 
      success: true, 
      message: 'Database is working!' 
    })
  } catch (error: any) {
    console.error('❌ Database test failed:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: error.message,
        code: error.code 
      },
      { status: 500 }
    )
  }
}