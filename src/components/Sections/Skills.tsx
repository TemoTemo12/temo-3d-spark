import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { 
  Code2, 
  Server, 
  Palette, 
  Settings,
  Figma,
  Image as ImageIcon,
  Terminal,
  Package
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code2,
      skills: [
        { name: 'HTML5', level: 95, color: 'bg-gradient-to-r from-orange-500 to-red-500' },
        { name: 'CSS3', level: 90, color: 'bg-gradient-to-r from-blue-500 to-cyan-500' },
        { name: 'JavaScript', level: 85, color: 'bg-gradient-to-r from-yellow-400 to-orange-500' },
        { name: 'React.js', level: 88, color: 'bg-gradient-to-r from-cyan-400 to-blue-500' },
        { name: 'Tailwind CSS', level: 92, color: 'bg-gradient-to-r from-teal-400 to-blue-500' },
      ]
    },
    {
      title: 'Backend Development',
      icon: Server,
      skills: [
        { name: 'Node.js', level: 80, color: 'bg-gradient-to-r from-green-400 to-green-600' },
        { name: 'Express.js', level: 75, color: 'bg-gradient-to-r from-gray-600 to-gray-800' },
        { name: 'REST APIs', level: 78, color: 'bg-gradient-to-r from-purple-500 to-pink-500' },
        { name: 'Database Design', level: 70, color: 'bg-gradient-to-r from-indigo-500 to-purple-600' },
      ]
    },
    {
      title: 'Design & Creativity',
      icon: Palette,
      skills: [
        { name: 'Figma', level: 85, color: 'bg-gradient-to-r from-pink-500 to-violet-500' },
        { name: 'Canva', level: 90, color: 'bg-gradient-to-r from-blue-400 to-purple-500' },
        { name: 'UI/UX Design', level: 82, color: 'bg-gradient-to-r from-rose-400 to-pink-500' },
        { name: 'Blender (3D)', level: 65, color: 'bg-gradient-to-r from-orange-400 to-red-500' },
      ]
    },
    {
      title: 'Tools & Systems',
      icon: Settings,
      skills: [
        { name: 'Linux', level: 75, color: 'bg-gradient-to-r from-yellow-400 to-orange-500' },
        { name: 'Git & GitHub', level: 88, color: 'bg-gradient-to-r from-gray-700 to-gray-900' },
        { name: 'VS Code', level: 95, color: 'bg-gradient-to-r from-blue-500 to-blue-700' },
        { name: 'Terminal/CLI', level: 80, color: 'bg-gradient-to-r from-green-500 to-teal-600' },
      ]
    }
  ];

  const technologies = [
    { name: 'React', icon: '⚛️', description: 'Modern component-based UI library' },
    { name: 'Node.js', icon: '🟢', description: 'Server-side JavaScript runtime' },
    { name: 'Tailwind', icon: '🎨', description: 'Utility-first CSS framework' },
    { name: 'Figma', icon: '🎯', description: 'Collaborative design tool' },
    { name: 'Blender', icon: '🎭', description: '3D modeling and animation' },
    { name: 'Linux', icon: '🐧', description: 'Open-source operating system' },
    { name: 'Git', icon: '📚', description: 'Version control system' },
    { name: 'TypeScript', icon: '📘', description: 'Typed JavaScript superset' },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and expertise. 
            From frontend development to 3D design, I'm constantly learning and growing.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 bg-gradient-card border-border/50 shadow-card hover:shadow-glow transition-all duration-300">
                <div className="flex items-center space-x-3 mb-8">
                  <category.icon className="w-8 h-8 text-primary" />
                  <h3 className="text-2xl font-bold text-gradient">{category.title}</h3>
                </div>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-3 bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 }}
                          viewport={{ once: true }}
                          className={`h-full ${skill.color} rounded-full relative`}
                        >
                          <div className="absolute inset-0 bg-white/20 animate-pulse" />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Technology Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            Technologies I <span className="text-gradient">Love</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Card className="p-6 bg-gradient-card border-border/50 shadow-card hover:shadow-glow transition-all duration-300 text-center group">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {tech.icon}
                  </div>
                  <h4 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors duration-300">
                    {tech.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">{tech.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Learning Path */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <Card className="p-8 bg-gradient-card border-border/50 shadow-card text-center">
            <h3 className="text-2xl font-bold mb-6 text-gradient">Always Learning</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I believe in continuous learning and staying up-to-date with the latest technologies. 
              Currently exploring advanced React patterns, cloud technologies, and advanced 3D development.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Next.js', 'TypeScript', 'Docker', 'AWS', 'Three.js', 'WebGL'].map((tech, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;