import React, { useState, useEffect } from 'react';
import { Terminal, Github, Linkedin, Mail, Moon, Sun, Code2, Database, Server, Cloud, Cpu, Network, Lock, Globe } from 'lucide-react';

function App() {
  const [theme, setTheme] = useState('dark');
  const [isTyping, setIsTyping] = useState(true);
  const [typedText, setTypedText] = useState('');
  const fullText = "Backend  Developer";

  useEffect(() => {
    if (isTyping) {
      if (typedText.length < fullText.length) {
        const timeout = setTimeout(() => {
          setTypedText(fullText.slice(0, typedText.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        setIsTyping(false);
        setTimeout(() => {
          setTypedText('');
          setIsTyping(true);
        }, 2000);
      }
    }
  }, [typedText, isTyping]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const skills = [
    {
      category: "Backend Development",
      icon: <Server className="w-6 h-6" />,
      items: ["Node.js", "Python", "Go", "Java", "RESTful APIs", "GraphQL"]
    },
    {
      category: "Database & Cache",
      icon: <Database className="w-6 h-6" />,
      items: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "Cassandra"]
    },
    {
      category: "System Design",
      icon: <Network className="w-6 h-6" />,
      items: ["Microservices", "Event-Driven Architecture", "Message Queues", "Load Balancing"]
    },
    {
      category: "DevOps & Cloud",
      icon: <Cloud className="w-6 h-6" />,
      items: ["Docker", "Kubernetes", "AWS", "CI/CD", "Terraform", "Monitoring"]
    },
    {
      category: "Security",
      icon: <Lock className="w-6 h-6" />,
      items: ["OAuth 2.0", "JWT", "SSL/TLS", "API Security", "Data Encryption"]
    },
    {
      category: "Tools & Protocols",
      icon: <Cpu className="w-6 h-6" />,
      items: ["Git", "gRPC", "WebSocket", "RabbitMQ", "Apache Kafka"]
    }
  ];

  const projects = [
    {
      title: 'Cloud-Native API Gateway',
      description: 'High-performance API Gateway with rate limiting and auth',
      tech: ['Node.js', 'Redis', 'Docker', 'Kubernetes'],
      icon: <Server className="w-6 h-6" />
    },
    {
      title: 'Distributed Database System',
      description: 'Scalable distributed database with eventual consistency',
      tech: ['Go', 'gRPC', 'Raft Consensus', 'etcd'],
      icon: <Database className="w-6 h-6" />
    },
    {
      title: 'Real-time Analytics Engine',
      description: 'Stream processing engine for real-time data analytics',
      tech: ['Rust', 'Apache Kafka', 'ClickHouse', 'WebSocket'],
      icon: <Cloud className="w-6 h-6" />
    }
  ];

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} transition-colors duration-300`}>
      {/* Navigation */}
      <nav className="fixed w-full backdrop-blur-md bg-opacity-80 z-50 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Terminal className="w-8 h-8" />
          <div className="flex items-center gap-4">
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-700/20">
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <a href="https://github.com/Mohaanaaaa" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-gray-700/20">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/mohana-y-2a121914b/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-gray-700/20">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto: mohanay52@gmail.com" className="p-2 rounded-full hover:bg-gray-700/20">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl text-center">
          <div className="mb-6">
            <img
              src="https://images.unsplash.com/photo-1635830625698-3b9bd74671ca?auto=format&fit=crop&w=200&h=200"
              alt="Profile"
              className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Mohanaa</h1>
          <div className="h-8">
            <p className="text-xl md:text-2xl text-gray-400">{typedText}<span className="animate-blink">|</span></p>
          </div>
          <div className="mt-8 flex justify-center gap-4">
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
              View Projects
            </button>
            <button className="px-6 py-3 border border-gray-600 hover:border-gray-400 rounded-lg transition-colors">
              Download CV
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-opacity-50 backdrop-blur-lg">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className={`p-8 rounded-xl ${theme === 'dark' ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-md`}>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                Hi everyone, I am Mohana Y from Bengaluru, India.
              </p>
              <p className="text-lg leading-relaxed">
                I'm a passionate Backend Developer with over 1 years of experience in building scalable distributed systems 
                and high-performance APIs.
              </p>
              <p className="text-lg leading-relaxed">
                I am a quick learner with a high level of adaptability. You can find me exploring new technologies or battling bugs in the digital dungeon.
              </p>
              <p className="text-lg leading-relaxed">
                 Although, I refuse to limit myself to that role. For instance, this portfolio was entirely built by me using AI, showcasing my ability to utilize AI to its fullest potential.
              </p>
              <p className="text-lg leading-relaxed">
                "Beyond coding, I enjoy reading books, traveling in nature, and playing both indoor and outdoor games. Additionally, I have a passion for wildlife photography, where I capture the beauty of the natural world."
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-blue-500" />
                  <span>Based in Bengaluru, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-green-500" />
                  <span>1+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <Terminal className="w-5 h-5 text-purple-500" />
                  <span>Open Source Contributor</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl ${
                  theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'
                } transition-all duration-300 transform hover:-translate-y-1`}
              >
                <div className="flex items-center gap-3 mb-4">
                  {skill.icon}
                  <h3 className="text-xl font-semibold">{skill.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, itemIndex) => (
                    <span
                      key={itemIndex}
                      className={`text-sm px-3 py-1 rounded-full ${
                        theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
                      }`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl ${
                  theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'
                } transition-colors duration-300 group cursor-pointer`}
              >
                <div className="flex items-center gap-3 mb-4">
                  {project.icon}
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                </div>
                <p className={`mb-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`text-sm px-3 py-1 rounded-full ${
                        theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;