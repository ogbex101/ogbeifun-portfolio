import ProjectCard from '../../components/ProjectCard'

async function getProjects() {
  try {
    const response = await fetch('http://localhost:3000/api/projects', {
      cache: 'no-store'
    })
    
    if (!response.ok) {
      throw new Error('Failed to fetch projects')
    }
    
    return await response.json()
  } catch (error) {
    console.error('Error fetching projects:', error)
    return []
  }
}

export default async function ProjectsPage() {
  const projects = await getProjects()

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">All Projects</h1>
        <a href="/admin" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
          Add New Project
        </a>
      </div>

      {projects.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-gray-50 rounded-lg">
          <p className="text-gray-500 text-lg mb-4">No projects yet.</p>
          <a href="/admin" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Add Your First Project
          </a>
        </div>
      )}

      <div className="mt-8 text-center text-gray-600">
        Showing {projects.length} project{projects.length !== 1 ? 's' : ''}
      </div>
    </div>
  )
}