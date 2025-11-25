import Link from 'next/link'
import ProjectCard from '../components/ProjectCard'

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

async function getProjects(): Promise<Project[]> {
  try {
    // Use relative URL for both local and production
    const baseUrl = process.env.NODE_ENV === 'production' 
      ? 'https://your-domain.vercel.app'
      : 'http://localhost:3000'
    
    const response = await fetch(`${baseUrl}/api/projects`, {
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

const techStack = [
  { name: 'PHP', level: 90 },
  { name: 'Next.js', level: 85 },
  { name: 'TypeScript', level: 85 },
  { name: 'Node.js', level: 80 },
  { name: 'Tailwind CSS', level: 95 },
  { name: 'MySQL', level: 75 },
  { name: 'JavaScript', level: 88 },
  { name: 'HTML/CSS', level: 90 }
]

export default async function Home() {
  const projects = await getProjects()
  const featuredProjects = projects.filter((project: Project) => project.featured)

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold">Ogbeifun Portfolio</h1>
            <div className="space-x-4">
              <a href="/" className="hover:text-blue-600">Home</a>
              <a href="/projects" className="hover:text-blue-600">Projects</a>
              <a href="/admin" className="hover:text-blue-600">Add Project</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-16 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Full-Stack Developer</h1>
          <p className="text-xl mb-8">PHP Specialist | Next.js & Node.js Developer</p>
          <div className="flex justify-center space-x-4">
            <a href="/projects" className="bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-100">
              View My Work
            </a>
            <a href="#contact" className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black">
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Tech Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {techStack.map((tech) => (
              <div key={tech.name} className="bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">{tech.name}</span>
                  <span>{tech.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-black h-2 rounded-full" 
                    style={{ width: `${tech.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured Projects</h2>
            <Link href="/projects" className="text-blue-600 hover:underline">
              View All Projects
            </Link>
          </div>
          
          {featuredProjects.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map((project: Project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-8 bg-white rounded-lg">
              <p className="text-gray-500 mb-4">No featured projects yet.</p>
              <a href="/admin" className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
                Add Your First Project
              </a>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-gray-300 mb-8">
            Ready to bring your next project to life? Get in touch and let's discuss how we can create something amazing.
          </p>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div>
              <h3 className="text-xl font-bold mb-4">Get In Touch</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-400">Email</p>
                  <a href="mailto:your-email@example.com" className="hover:text-gray-300">
                    your-email@example.com
                  </a>
                </div>
                <div>
                  <p className="text-gray-400">GitHub</p>
                  <a href="https://github.com/ogbex101" className="hover:text-gray-300">
                    github.com/ogbex101
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Send a Message</h3>
              <form className="space-y-4">
                <input type="text" placeholder="Your Name" className="w-full bg-gray-800 rounded-lg px-4 py-2" />
                <input type="email" placeholder="Your Email" className="w-full bg-gray-800 rounded-lg px-4 py-2" />
                <textarea placeholder="Your Message" rows={4} className="w-full bg-gray-800 rounded-lg px-4 py-2"></textarea>
                <button type="submit" className="w-full bg-white text-black py-2 rounded-lg font-semibold hover:bg-gray-100">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}