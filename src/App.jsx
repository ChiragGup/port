import { useState, useEffect } from "react";
import { Menu, X, ExternalLink, Github } from "lucide-react";
import Contact from "./Contact";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  /* ---------------- Scroll Spy ---------------- */
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects"];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          if (
            scrollPosition >= el.offsetTop &&
            scrollPosition < el.offsetTop + el.offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  /* ---------------- Skills (RESTORED UI) ---------------- */
  const skills = [
    { name: "React.js", color: "from-blue-100 to-blue-200 text-blue-700" },
    { name: "JavaScript", color: "from-yellow-100 to-yellow-200 text-yellow-700" },
    { name: "HTML & CSS", color: "from-orange-100 to-orange-200 text-orange-700" },
    { name: "Tailwind CSS", color: "from-teal-100 to-teal-200 text-teal-700" },
    { name: "Next.js", color: "from-gray-100 to-gray-200 text-gray-800" },
    { name: "Node.js", color: "from-green-100 to-green-200 text-green-700" },
    { name: "MongoDB", color: "from-emerald-100 to-emerald-200 text-emerald-700" },
    { name: "Git & GitHub", color: "from-pink-100 to-pink-200 text-pink-700" },
  ];

  /* ---------------- Projects ---------------- */
  const projects = [
    {
      id: 1,
      title: "AI Integrated Reel Scroller",
      description:
        "A full-stack AI-powered reel scroller with OAuth authentication, personal dashboards, ownership-based access control, and secure APIs. Users can upload, edit, delete, and manage reels while leveraging Gemini AI to generate captions and hashtags automatically.",
      tech: [
        "Next.js",
        "MongoDB",
        "NextAuth",
        "Gemini AI",
        "ImageKit",
        "Tailwind CSS",
      ],
      demo: "https://my-ai-reel-scroller-d557.vercel.app/",
      github: "https://github.com/ChiragGup/my-Ai-reel-scroller",
      image: "/reel.png",
    },
    {
      id: 2,
      title: "Personal Portfolio Website",
      description:
        "A modern, fully responsive personal portfolio website built with React.js and Tailwind CSS, showcasing projects, skills, and contact information in a clean and professional UI.",
      tech: ["React.js", "Tailwind CSS"],
      demo: "https://port-zeta-woad.vercel.app/",
      github: "https://github.com/ChiragGup/portfolio",
      image: "/portfolio.png",
    },
    {
      id: 3,
      title: "Smart Search Dashboard",
      description:
        "A responsive frontend dashboard that fetches data from a public API and provides real-time, case-insensitive search with dynamic filtering and a professional UI.",
      tech: ["React", "API Integration", "Context API", "Tailwind CSS"],
      demo: "https://search-dash-board.vercel.app/",
      github: "https://github.com/ChiragGup/search-dashboard",
      image: "/dashboard.png",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ---------------- NAVBAR ---------------- */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-16 flex justify-between items-center">
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Chirag.dev
          </span>

          <div className="hidden md:flex space-x-8">
            {["home", "about", "skills", "projects"].map((s) => (
              <button
                key={s}
                onClick={() => scrollToSection(s)}
                className={`capitalize px-3 py-2 rounded-md text-sm font-medium ${
                  activeSection === s
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {s}
              </button>
            ))}
            <a
              href="https://github.com/ChiragGup"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-gray-700 hover:text-black"
            >
              <Github size={18} /> GitHub
            </a>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* ---------------- HERO ---------------- */}
      <section
        id="home"
        className="pt-24 pb-32 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Chirag Gupta
          </span>
        </h1>
        <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
          Full Stack Developer focused on building secure, scalable, and
          responsive web applications
        </p>
        <button
          onClick={() => scrollToSection("projects")}
          className="mt-10 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          View My Work
        </button>
      </section>

      {/* ---------------- ABOUT ---------------- */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              I’m a <strong>Full Stack Developer</strong> experienced in building
              modern applications using React, Next.js, Node.js, and MongoDB. I
              focus on clean UI, secure authentication, scalable APIs, and
              real-world problem solving.
            </p>
          </div>
          <img
            src="/myPhoto.jpg"
            alt="Profile"
            className="w-72 h-72 object-cover rounded-full mx-auto shadow-lg"
          />
        </div>
      </section>

      {/* ---------------- SKILLS (RESTORED UI) ---------------- */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12">Skills & Technologies</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className={`w-40 h-32 flex items-center justify-center rounded-2xl shadow-lg hover:scale-105 transition bg-gradient-to-r ${skill.color} font-semibold`}
              >
                {skill.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- PROJECTS ---------------- */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Featured Projects
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((p) => (
              <div
                key={p.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition overflow-hidden"
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-48 object-cover"
                />

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{p.title}</h3>
                  <p className="text-gray-600 mb-4">{p.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition"
                    >
                      <ExternalLink size={16} /> Demo
                    </a>
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border border-gray-800 text-gray-800 rounded-lg hover:bg-gray-800 hover:text-white transition"
                    >
                      <Github size={16} /> Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </div>
  );
}

export default App;
