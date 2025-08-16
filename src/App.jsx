import { useState, useEffect } from 'react';
import { Menu, X, ExternalLink } from 'lucide-react';
import Contact from './Contact';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects']; // contact removed
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const skills = [
    { name: 'React.js', color: 'from-blue-100 to-blue-200 text-blue-700' },
    { name: 'JavaScript', color: 'from-yellow-100 to-yellow-200 text-yellow-700' },
    { name: 'HTML/CSS', color: 'from-orange-100 to-orange-200 text-orange-700' },
    { name: 'Tailwind CSS', color: 'from-teal-100 to-teal-200 text-teal-700' },
    { name: 'Next.js', color: 'from-gray-100 to-gray-200 text-gray-800' },
    { name: 'Git/GitHub', color: 'from-pink-100 to-pink-200 text-pink-700' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Portfolio Website',
      description:
        'A modern and fully responsive personal portfolio website built with React.js and Tailwind CSS. It showcases projects, skills, and contact information in a clean, user-friendly interface.',
      tech: ['React.js', 'Tailwind CSS'],
      demo: 'https://port-zeta-woad.vercel.app/',
      image: '/portfolio.png',
    },
    {
      id: 2,
      title: 'Cooking Website',
      description:
        'A recipe and cooking website built with React and Tailwind CSS, featuring API integration for dynamic recipe data and a clean, user-friendly interface.',
      tech: ['React', 'API Integration', 'Tailwind CSS'],
      demo: 'https://last-blog-nine.vercel.app/',
      image: '/cooking.png',
    },
    {
  id: 3,
  title: 'NGO Website',
  description:
    'A responsive and modern NGO website built using React and Tailwind CSS. The website highlights the organization’s mission, events, and initiatives, providing a user-friendly experience for visitors.',
  tech: ['React', 'Tailwind CSS'],
  demo: 'https://ngo-eight-black.vercel.app/',
  image: '/ngo.png',
}

  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Portfolio
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {['home', 'about', 'skills', 'projects'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 capitalize ${
                      activeSection === section
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'
                    }`}
                  >
                    {section}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['home', 'about', 'skills', 'projects'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-md transition-all capitalize"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-16 pb-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Chirag Gupta
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Frontend Developer passionate about crafting responsive,
              user-friendly, and visually appealing web experiences
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                View My Work
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">About Me</h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  I'm an enthusiastic <strong>Frontend Developer</strong> with
                  hands-on experience in building modern web applications using
                  React.js, Next.js, and Tailwind CSS.
                </p>
                <p>
                  My expertise lies in creating clean UI components, integrating
                  APIs, and optimizing performance for a seamless user
                  experience.
                </p>
                <p>
                  Beyond coding, I focus on writing maintainable code, following
                  best practices, and constantly learning to sharpen my skills
                  as a developer.
                </p>
              </div>
            </div>
            {/* Profile Image */}
            <div className="flex justify-center ">
              <div className="relative group">
                <div className="p-1 rounded-full bg-gradient-to-tr from-blue-400 via-purple-400 to-pink-400 shadow-xl">
                  <img
                    src="/myPhoto.jpg"
                    alt="Profile"
                    className="w-72 h-72 object-cover rounded-full border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
<section id="skills" className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        Skills & Technologies
      </h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Here are the technologies and tools I work with
      </p>
    </div>

    <div className="flex flex-wrap justify-center gap-6">
      {skills.map((skill, index) => (
        <div
          key={skill.name}
          className={`w-40 h-32 flex items-center justify-center px-6 py-6 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 bg-gradient-to-r ${skill.color} font-semibold text-lg text-center transition-all duration-300`}
          style={{ animationDelay: `${index * 100}ms` }}
        >
          {skill.name}
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A collection of projects that showcase my skills and passion
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all text-sm"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <div>
        <Contact />
      </div>
    </div>
  );
}

export default App;
