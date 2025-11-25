import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(request: NextRequest) {
  try {
    console.log('📨 Received project creation request')
    
    const body = await request.json()
    console.log('📝 Request body:', body)
    
    // Validate required fields
    if (!body.title || !body.description || !body.technologiesString || !body.category) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }
    
    console.log('🛢 Attempting to create project in database...')
    
    const project = await prisma.project.create({
      data: {
        title: body.title,
        description: body.description,
        technologiesString: body.technologiesString,
        githubUrl: body.githubUrl || null,
        liveUrl: body.liveUrl || null,
        category: body.category,
        featured: body.featured || false,
      },
    })

    console.log('✅ Project created successfully:', project.id)
    
    return NextResponse.json(project)
  } catch (error: any) {
    console.error('❌ Error creating project:', error)
    
    // More specific error messages
    if (error.code === 'P2002') {
      return NextResponse.json(
        { error: 'Project with this title already exists' },
        { status: 400 }
      )
    }
    
    return NextResponse.json(
      { error: `Database error: ${error.message}` },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const projects = await prisma.project.findMany({
      include: {
        images: {
          orderBy: {
            order: 'asc'
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    })

    return NextResponse.json(projects)
  } catch (error: any) {
    console.error('Error fetching projects:', error)
    return NextResponse.json(
      { error: 'Failed to fetch projects' },
      { status: 500 }
    )
  }
}