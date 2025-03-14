
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  User, 
  GraduationCap, 
  Briefcase, 
  Coffee, 
  Clock, 
  Link, 
  Mail, 
  MapPin, 
  Phone,
  Github, 
  Linkedin, 
  Twitter, 
  Award,
  Code,
  FileText
} from 'lucide-react';

const WidgetsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const widgetVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section id="widgets" className="py-20 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-accent/5 rounded-full filter blur-3xl" />
      </div>
      
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <h2 className="text-4xl font-bold mb-6">Discover More</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Quick access to important information, useful links, and ways to connect.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* About Me Widget */}
          <motion.div 
            className="bg-card border border-border rounded-2xl p-6 shadow-sm"
            variants={widgetVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-full bg-primary/10 mr-3">
                <User size={20} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold">About Me</h3>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center text-sm">
                <GraduationCap size={16} className="mr-2 text-muted-foreground" />
                <span>Master's in Computer Science</span>
              </div>
              <div className="flex items-center text-sm">
                <Briefcase size={16} className="mr-2 text-muted-foreground" />
                <span>5 Years of Experience</span>
              </div>
              <div className="flex items-center text-sm">
                <Coffee size={16} className="mr-2 text-muted-foreground" />
                <span>Technical Support Specialist</span>
              </div>
              <div className="flex items-center text-sm">
                <Clock size={16} className="mr-2 text-muted-foreground" />
                <span>Full-time Professional</span>
              </div>
            </div>
            
            <a 
              href="#about" 
              className="mt-4 text-sm text-primary flex items-center hover:underline"
            >
              Learn more about me
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </motion.div>
          
          {/* Useful Links Widget */}
          <motion.div 
            className="bg-card border border-border rounded-2xl p-6 shadow-sm"
            variants={widgetVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-full bg-primary/10 mr-3">
                <Link size={20} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold">Useful Links</h3>
            </div>
            
            <ul className="space-y-3">
              <li>
                <a href="#resume" className="text-sm flex items-center hover:text-primary transition-colors">
                  <FileText size={16} className="mr-2 text-muted-foreground" />
                  <span>Download Resume</span>
                </a>
              </li>
              <li>
                <a href="#skills" className="text-sm flex items-center hover:text-primary transition-colors">
                  <Code size={16} className="mr-2 text-muted-foreground" />
                  <span>Technical Skills</span>
                </a>
              </li>
              <li>
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-sm flex items-center hover:text-primary transition-colors">
                  <Github size={16} className="mr-2 text-muted-foreground" />
                  <span>GitHub Projects</span>
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-sm flex items-center hover:text-primary transition-colors">
                  <Linkedin size={16} className="mr-2 text-muted-foreground" />
                  <span>LinkedIn Profile</span>
                </a>
              </li>
            </ul>
          </motion.div>
          
          {/* Contact Me Widget */}
          <motion.div 
            className="bg-card border border-border rounded-2xl p-6 shadow-sm"
            variants={widgetVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-full bg-primary/10 mr-3">
                <Mail size={20} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold">Contact Me</h3>
            </div>
            
            <div className="space-y-3">
              <a href="mailto:rajanchand48@gmail.com" className="text-sm flex items-center hover:text-primary transition-colors">
                <Mail size={16} className="mr-2 text-muted-foreground" />
                <span>rajanchand48@gmail.com</span>
              </a>
              <a href="tel:+441234567890" className="text-sm flex items-center hover:text-primary transition-colors">
                <Phone size={16} className="mr-2 text-muted-foreground" />
                <span>+44 123 456 7890</span>
              </a>
              <div className="text-sm flex items-center">
                <MapPin size={16} className="mr-2 text-muted-foreground" />
                <span>Glasgow, Scotland, UK</span>
              </div>
              <a href="https://calendly.com/rajanchand48" target="_blank" rel="noopener noreferrer" className="text-sm flex items-center hover:text-primary transition-colors">
                <Clock size={16} className="mr-2 text-muted-foreground" />
                <span>Schedule a Meeting</span>
              </a>
            </div>
            
            <a 
              href="#contact" 
              className="mt-4 text-sm text-primary flex items-center hover:underline"
            >
              Get in touch
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </motion.div>
          
          {/* Memberships Widget */}
          <motion.div 
            className="bg-card border border-border rounded-2xl p-6 shadow-sm"
            variants={widgetVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-full bg-primary/10 mr-3">
                <Award size={20} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold">Memberships</h3>
            </div>
            
            <div className="space-y-3">
              <div className="text-sm flex items-start">
                <Award size={16} className="mr-2 text-muted-foreground mt-1" />
                <div>
                  <p className="font-medium">Marvel Worldwide Services UK Ltd.</p>
                  <p className="text-xs text-muted-foreground">Director since May 15, 2024</p>
                </div>
              </div>
              <div className="text-sm flex items-start">
                <Award size={16} className="mr-2 text-muted-foreground mt-1" />
                <div>
                  <p className="font-medium">Technical Support Professional Association</p>
                  <p className="text-xs text-muted-foreground">Member since 2022</p>
                </div>
              </div>
              <div className="text-sm flex items-start">
                <Award size={16} className="mr-2 text-muted-foreground mt-1" />
                <div>
                  <p className="font-medium">Glasgow Tech Community</p>
                  <p className="text-xs text-muted-foreground">Active Participant</p>
                </div>
              </div>
            </div>
            
            <div className="mt-4 flex gap-2">
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-secondary transition-colors">
                <Twitter size={16} />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-secondary transition-colors">
                <Linkedin size={16} />
              </a>
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-secondary transition-colors">
                <Github size={16} />
              </a>
            </div>
          </motion.div>
        </div>
        
        <div className="mt-12 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
          >
            <p className="text-xl font-medium mb-4">Thank You for Visiting My Portfolio</p>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I appreciate you taking the time to explore my professional journey. 
              Whether you're interested in collaborating, hiring, or simply connecting, 
              I'm always open to new opportunities and conversations.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WidgetsSection;
