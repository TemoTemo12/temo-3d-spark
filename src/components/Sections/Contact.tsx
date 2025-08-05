import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { 
  Mail, 
  Github, 
  Facebook, 
  MapPin, 
  Send,
  Phone,
  Calendar,
  Download
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'temo@example.com',
      link: 'mailto:temo@example.com'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '@TemoTemo12',
      link: 'https://github.com/TemoTemo12'
    },
    {
      icon: Facebook,
      label: 'Facebook',
      value: 'Connect on Facebook',
      link: '#'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Available Remotely',
      link: null
    }
  ];

  const quickActions = [
    {
      icon: Calendar,
      title: 'Schedule a Call',
      description: 'Book a free consultation',
      action: () => toast({ title: "Calendar", description: "Calendar booking would open here" })
    },
    {
      icon: Download,
      title: 'Download CV',
      description: 'Get my latest resume',
      action: () => toast({ title: "Download", description: "CV download would start here" })
    },
    {
      icon: Phone,
      title: 'Quick Chat',
      description: 'Immediate response',
      action: () => toast({ title: "Chat", description: "Chat widget would open here" })
    }
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's collaborate and create something amazing together. 
            I'm always excited to work on new projects and challenges.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="p-8 bg-gradient-card border-border/50 shadow-card">
              <h3 className="text-2xl font-bold mb-6 text-gradient">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="bg-background/50 border-border/50 focus:border-primary transition-colors duration-300"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="bg-background/50 border-border/50 focus:border-primary transition-colors duration-300"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    required
                    className="bg-background/50 border-border/50 focus:border-primary transition-colors duration-300"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or just say hello!"
                    rows={6}
                    required
                    className="bg-background/50 border-border/50 focus:border-primary transition-colors duration-300 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Contact Info & Quick Actions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Contact Information */}
            <Card className="p-6 bg-gradient-card border-border/50 shadow-card">
              <h3 className="text-xl font-bold mb-6 text-gradient">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 ${
                      info.link ? 'hover:bg-secondary/50 cursor-pointer' : ''
                    }`}
                    onClick={() => info.link && window.open(info.link, '_blank')}
                  >
                    <info.icon className="w-5 h-5 text-primary flex-shrink-0" />
                    <div>
                      <div className="text-sm text-muted-foreground">{info.label}</div>
                      <div className="font-medium">{info.value}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="p-6 bg-gradient-card border-border/50 shadow-card">
              <h3 className="text-xl font-bold mb-6 text-gradient">Quick Actions</h3>
              <div className="space-y-3">
                {quickActions.map((action, index) => (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full p-4 bg-secondary/30 hover:bg-secondary/50 rounded-lg transition-all duration-300 text-left border border-border/30 hover:border-primary/30"
                    onClick={action.action}
                  >
                    <div className="flex items-center space-x-3">
                      <action.icon className="w-5 h-5 text-primary" />
                      <div>
                        <div className="font-medium">{action.title}</div>
                        <div className="text-sm text-muted-foreground">{action.description}</div>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </Card>

            {/* Availability */}
            <Card className="p-6 bg-gradient-card border-border/50 shadow-card">
              <h3 className="text-xl font-bold mb-4 text-gradient">Availability</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Status</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                    <span className="text-sm text-success">Available</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Response Time</span>
                  <span className="text-sm text-muted-foreground">Within 24 hours</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Time Zone</span>
                  <span className="text-sm text-muted-foreground">UTC+4</span>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-8 text-gradient">Let's Connect</h3>
          <div className="flex justify-center space-x-6">
            {[
              { icon: Github, href: 'https://github.com/TemoTemo12', label: 'GitHub' },
              { icon: Mail, href: 'mailto:temo@example.com', label: 'Email' },
              { icon: Facebook, href: '#', label: 'Facebook' },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -10 }}
                whileTap={{ scale: 0.9 }}
                className="w-16 h-16 bg-gradient-card border border-border/50 rounded-full flex items-center justify-center text-primary hover:text-accent hover:shadow-glow transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;