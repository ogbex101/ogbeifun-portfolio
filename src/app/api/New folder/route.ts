import { NextRequest, NextResponse } from 'next/server'
import { writeFile } from 'fs/promises'
import { join } from 'path'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const image = formData.get('image') as File
    const projectId = formData.get('projectId') as string

    if (!image || !projectId) {
      return NextResponse.json(
        { error: 'Image and project ID are required' },
        { status: 400 }
      )
    }

    const bytes = await image.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // Create unique filename
    const timestamp = Date.now()
    const originalName = image.name
    const extension = originalName.split('.').pop()
    const filename = `project-${projectId}-${timestamp}.${extension}`
    
    // Save to public folder
    const path = join(process.cwd(), 'public', 'project-images', filename)
    await writeFile(path, buffer)

    // Get existing images count for this project to set order
    const existingImages = await prisma.projectImage.count({
      where: { projectId }
    })

    // Save to database
    await prisma.projectImage.create({
      data: {
        url: `/project-images/${filename}`,
        altText: `Screenshot for project ${projectId}`,
        order: existingImages,
        projectId: projectId
      }
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error uploading image:', error)
    return NextResponse.json(
      { error: 'Failed to upload image' },
      { status: 500 }
    )
  }
}