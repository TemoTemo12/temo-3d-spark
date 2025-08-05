import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, Code } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and modern payment integration. Features include user authentication, product management, and real-time order tracking.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com/TemoTemo12',
      live: '#',
      status: 'Featured'
    },
    {
      title: '3D Portfolio Website',
      description: 'Interactive 3D portfolio built with Three.js and React. Showcases 3D models, animations, and immersive user experiences with responsive design.',
      tech: ['React', 'Three.js', 'Blender', 'GSAP'],
      github: 'https://github.com/TemoTemo12',
      live: '#',
      status: 'New'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      tech: ['React', 'Firebase', 'Tailwind CSS', 'TypeScript'],
      github: 'https://github.com/TemoTemo12',
      live: '#',
      status: 'Popular'
    },
    {
      title: 'Weather Dashboard',
      description: 'Beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics using modern APIs.',
      tech: ['JavaScript', 'HTML5', 'CSS3', 'OpenWeather API'],
      github: 'https://github.com/TemoTemo12',
      live: '#',
      status: 'Classic'
    },
    {
      title: 'Real-time Chat App',
      description: 'Modern chat application with Socket.io, featuring private messaging, group chats, file sharing, and emoji reactions.',
      tech: ['React', 'Socket.io', 'Node.js', 'Express'],
      github: 'https://github.com/TemoTemo12',
      live: '#',
      status: 'Active'
    },
    {
      title: 'API Testing Tool',
      description: 'Developer-friendly API testing and documentation tool with automated testing, request collections, and team collaboration.',
      tech: ['React', 'Node.js', 'REST API', 'Postman'],
      github: 'https://github.com/TemoTemo12',
      live: '#',
      status: 'Tool'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Featured': return 'bg-gradient-primary';
      case 'New': return 'bg-success';
      case 'Popular': return 'bg-accent';
      case 'Active': return 'bg-primary';
      default: return 'bg-secondary';
    }
  };

  return (
    <section id="projects" className="py-20 px-4 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my latest work, from web applications to 3D experiences. 
            Each project represents a step in my journey as a developer.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Card className="h-full bg-gradient-card border-border/50 shadow-card hover:shadow-glow transition-all duration-300 overflow-hidden group">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <Code className="w-5 h-5 text-primary" />
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                    </div>
                    <Badge className={`${getStatusColor(project.status)} text-white`}>
                      {project.status}
                    </Badge>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex space-x-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-primary hover:shadow-glow transition-all duration-300"
                      asChild
                    >
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            asChild
          >
            <a href="https://github.com/TemoTemo12" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;