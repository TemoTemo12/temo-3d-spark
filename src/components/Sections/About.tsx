import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Code, 
  Server, 
  Palette, 
  Monitor,
  Figma,
  Image as ImageIcon,
  Package,
  Terminal
} from 'lucide-react';

const About = () => {
  const skills = [
    { category: 'Frontend', icon: Monitor, items: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Tailwind CSS'] },
    { category: 'Backend', icon: Server, items: ['Node.js', 'Express.js', 'REST APIs'] },
    { category: 'Design', icon: Palette, items: ['Figma', 'Canva', 'UI/UX Design'] },
    { category: '3D & Tools', icon: Code, items: ['Blender', 'Linux', 'Git', 'VS Code'] },
  ];

  const timeline = [
    { year: '2023', title: 'Started Web Development', description: 'Began learning HTML, CSS, and JavaScript' },
    { year: '2024', title: 'React & Node.js', description: 'Mastered React.js and started backend development' },
    { year: '2024', title: '3D Development', description: 'Exploring Blender and Three.js for creative projects' },
    { year: 'Now', title: 'Building Amazing Things', description: 'Creating innovative web experiences' },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate young developer who loves creating innovative digital experiences. 
            From web development to 3D design, I'm always exploring new technologies.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-gradient-card border-border/50 shadow-card">
              <h3 className="text-2xl font-bold mb-6 text-gradient">My Journey</h3>
              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                      {item.year}
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="p-8 bg-gradient-card border-border/50 shadow-card">
              <h3 className="text-2xl font-bold mb-6 text-gradient">What I Do</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Code className="w-5 h-5 text-primary" />
                  <span>Full-Stack Web Development</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Palette className="w-5 h-5 text-accent" />
                  <span>UI/UX Design & Prototyping</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Package className="w-5 h-5 text-success" />
                  <span>3D Modeling & Animation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Terminal className="w-5 h-5 text-primary" />
                  <span>Linux System Administration</span>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-card border-border/50 shadow-card">
              <h3 className="text-2xl font-bold mb-6 text-gradient">Fun Facts</h3>
              <div className="space-y-3 text-muted-foreground">
                <p>🚀 Started coding at a young age and never looked back</p>
                <p>🎨 Love combining creativity with technical skills</p>
                <p>🐧 Linux enthusiast and open-source contributor</p>
                <p>📱 Always learning new technologies and frameworks</p>
              </div>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            My <span className="text-gradient">Tech Stack</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="p-6 bg-gradient-card border-border/50 shadow-card hover:shadow-glow transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-4">
                    <skill.icon className="w-6 h-6 text-primary" />
                    <h4 className="font-semibold text-lg">{skill.category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, itemIndex) => (
                      <Badge
                        key={itemIndex}
                        variant="secondary"
                        className="bg-secondary/50 text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;