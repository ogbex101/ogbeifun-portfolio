interface Project {
  id: string
  title: string
  description: string
  technologiesString: string
  githubUrl: string | null
  liveUrl: string | null
  category: string
  featured: boolean
  images: Array<{
    id: string
    url: string
    altText: string | null
    order: number
  }>
}

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const technologies = project.technologiesString.split(',').map(tech => tech.trim())

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:translate-y-[-4px]">
      {project.images.length > 0 && (
        <div className="h-48 bg-gray-200 overflow-hidden">
          <img
            src={project.images[0].url}
            alt={project.images[0].altText || project.title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-black">{project.title}</h3>
          {project.featured && (
            <span className="bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full font-semibold">
              ⭐ Featured
            </span>
          )}
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="bg-gray-800 text-white text-xs px-3 py-1 rounded-full font-medium">
            {project.category}
          </span>
          {technologies.slice(0, 3).map((tech) => (
            <span 
              key={tech} 
              className="bg-black text-white text-xs px-3 py-1 rounded-full font-medium"
            >
              {tech}
            </span>
          ))}
          {technologies.length > 3 && (
            <span className="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full">
              +{technologies.length - 3}
            </span>
          )}
        </div>

        <div className="flex space-x-3">
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 bg-black text-white text-center py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors font-medium text-sm"
            >
              GitHub
            </a>
          )}
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 bg-gray-800 text-white text-center py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors font-medium text-sm"
            >
              Live Demo
            </a>
          )}
        </div>

        {project.images.length > 0 && (
          <div className="mt-3 text-xs text-gray-500 flex items-center">
            <span className="mr-1">📷</span>
            {project.images.length} image{project.images.length !== 1 ? 's' : ''}
          </div>
        )}
      </div>
    </div>
  )
}