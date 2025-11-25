const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Daniel Osewe</h3>
            <p className="text-gray-400">
              Full Stack Developer creating modern, responsive web applications with cutting-edge technologies.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['Home', 'Projects', 'About', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={item === 'Home' ? '/' : `#${item.toLowerCase()}`}
                  className="block text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors duration-300">GitHub</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors duration-300">LinkedIn</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors duration-300">Twitter</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p>&copy; 2024 Ogbeifun Daniel Osewe. All rights reserved.</p>
          <p className="mt-2 text-gray-400 text-sm">
            Built with Next.js, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer