import '../styles/globals.css'

export const metadata = {
  title: 'Ogbeifun Portfolio - Full Stack Developer',
  description: 'PHP Specialist | Next.js & Node.js Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <nav className="bg-black text-white shadow-lg">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-bold">Ogbeifun Portfolio</h1>
              <div className="space-x-6">
                <a href="/" className="hover:text-gray-300 transition-colors">Home</a>
                <a href="/projects" className="hover:text-gray-300 transition-colors">Projects</a>
                <a href="/admin" className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                  Add Project
                </a>
              </div>
            </div>
          </div>
        </nav>
        {children}
        
        {/* Footer */}
        <footer className="bg-black text-white py-8 border-t border-gray-800">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <p>&copy; 2024 Ogbeifun Portfolio. All rights reserved.</p>
            <div className="mt-4 space-x-6">
              <a href="https://github.com/ogbex101" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                GitHub
              </a>
              <a href="#" className="hover:text-gray-300">LinkedIn</a>
              <a href="#" className="hover:text-gray-300">Twitter</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}