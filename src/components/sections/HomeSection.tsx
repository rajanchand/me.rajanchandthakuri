
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ChevronDown, Github, Linkedin, Twitter, Mail, Phone } from 'lucide-react';

const HomeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-20 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full filter blur-3xl" />
      </div>
      
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <motion.div 
            className="flex-1 order-2 md:order-1 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            ref={ref}
          >
            <motion.div 
              className="bg-secondary/50 text-sm py-1.5 px-3 rounded-full inline-flex items-center mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
              Available for new opportunities
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-tight">
              Hi, I'm <span className="text-primary">Rajan Prakash Chand</span>
            </h1>
            
            <div className="text-lg sm:text-xl font-medium mb-6 h-14">
              <TypeAnimation
                sequence={[
                  'A Technical Engineer',
                  1000,
                  'Specializing in DevOps',
                  1000,
                  'Focused on Customer Support',
                  1000,
                  'Passionate about Technology',
                  1000,
                ]}
                wrapper="div"
                cursor={true}
                repeat={Infinity}
                style={{ height: '56px' }}
              />
            </div>
            
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto md:mx-0">
              A technical engineer driven by curiosity and desire to push the boundaries of what 
              is possible with technology. With over four years of experience in the IT industry.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-primary text-white rounded-full font-medium transition-all hover:shadow-lg hover:scale-105"
              >
                Contact Me
              </a>
              <a 
                href="#about" 
                className="px-6 py-3 border border-border rounded-full font-medium transition-all hover:bg-secondary"
              >
                More About Me
              </a>
            </div>
            
            <div className="flex gap-4 justify-center md:justify-start">
              <a 
                href="https://github.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-border hover:bg-secondary transition-all"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a 
                href="https://linkedin.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-border hover:bg-secondary transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://twitter.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-border hover:bg-secondary transition-all"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="mailto:rajanchand48@gmail.com" 
                className="p-2.5 rounded-full border border-border hover:bg-secondary transition-all"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <a 
                href="tel:+441234567890" 
                className="p-2.5 rounded-full border border-border hover:bg-secondary transition-all"
                aria-label="Phone"
              >
                <Phone size={18} />
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex-1 order-1 md:order-2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative">
              <motion.div 
                className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl z-10 relative bg-secondary/30"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
              >
                <img 
                  src="https://via.placeholder.com/600/600?text=Rajan" 
                  alt="Rajan Prakash Chand" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              {/* Decorative circles */}
              <div className="absolute -inset-4 rounded-full border border-primary/20 z-0 animate-pulse"></div>
              <div className="absolute -inset-8 rounded-full border border-primary/10 z-0 animate-pulse" style={{ animationDelay: '1s' }}></div>
              
              {/* Tech circles */}
              <motion.div 
                className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              >
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" alt="Linux" className="w-8 h-8" />
              </motion.div>
              
              <motion.div 
                className="absolute top-1/2 -left-4 w-16 h-16 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
              >
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" alt="AWS" className="w-8 h-8" />
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-4 right-1/3 w-16 h-16 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center"
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
              >
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" className="w-8 h-8" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <span className="text-sm font-medium mb-2 text-muted-foreground">Scroll Down</span>
        <ChevronDown size={20} className="text-primary" />
      </motion.div>
    </section>
  );
};

export default HomeSection;
