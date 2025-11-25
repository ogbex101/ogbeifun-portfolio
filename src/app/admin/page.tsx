'use client'

import { useState } from 'react'
import ProjectForm from '../../components/admin/ProjectForm'  // Fixed import path

export default function AdminPage() {
  const [refreshKey, setRefreshKey] = useState(0)

  const handleProjectAdded = () => {
    setRefreshKey(prev => prev + 1)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">Add New Project</h1>
          <ProjectForm onProjectAdded={handleProjectAdded} />
        </div>
      </div>
    </div>
  )
}