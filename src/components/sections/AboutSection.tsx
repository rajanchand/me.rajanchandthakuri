
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, Linkedin, Youtube, MapPin, Calendar, Building } from 'lucide-react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/3 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-accent/5 rounded-full filter blur-3xl" />
      </div>
      
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my background, interests, and professional journey.
          </p>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div 
            className="flex-1 order-2 lg:order-1"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6">My Story</h3>
            <div className="space-y-4 text-base text-muted-foreground">
              <p>
                Rajan Prakash Chand is a professional based in Glasgow, Scotland, with a background in customer service and technical fields. He has 2 years of experience in customer service and 3 years in technical roles, combining strong communication skills with technical expertise.
              </p>
              <p>
                In addition to his professional endeavors, Rajan maintains an active online presence. He has a GitHub profile where he shares his coding projects and interests. He also has a YouTube channel, though it currently has limited content.
              </p>
              <p>
                Furthermore, there is a "Prakash Chand Rajan" listed as a director of Marvel Worldwide Services UK Ltd., a company registered in Slough, United Kingdom. This individual was appointed on May 15, 2024.
              </p>
              <p>
                I believe that diversity is essential to creating truly innovative solutions, and I am committed to bringing my unique background and perspective to every project I work on.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <div className="p-2 rounded-full bg-primary/10 mr-3 mt-1">
                  <MapPin size={18} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-bold">Location</h4>
                  <p className="text-sm text-muted-foreground">Glasgow, Scotland, UK</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 rounded-full bg-primary/10 mr-3 mt-1">
                  <Calendar size={18} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-bold">Experience</h4>
                  <p className="text-sm text-muted-foreground">5+ years (2 in Customer Service, 3 in Technical Roles)</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 rounded-full bg-primary/10 mr-3 mt-1">
                  <Building size={18} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-bold">Company</h4>
                  <p className="text-sm text-muted-foreground">Director at Marvel Worldwide Services UK Ltd.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Find Me Online</h3>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-secondary transition-colors"
                >
                  <Github size={18} />
                  <span>GitHub</span>
                </a>
                <a 
                  href="https://linkedin.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-secondary transition-colors"
                >
                  <Linkedin size={18} />
                  <span>LinkedIn</span>
                </a>
                <a 
                  href="https://youtube.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-secondary transition-colors"
                >
                  <Youtube size={18} />
                  <span>YouTube</span>
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex-1 order-1 lg:order-2 flex justify-center"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="relative max-w-md w-full">
              {/* Main image */}
              <div className="relative z-10 rounded-2xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
                <img 
                  src="https://via.placeholder.com/600/800?text=Rajan" 
                  alt="Rajan Prakash Chand" 
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {/* Background decoration */}
              <div className="absolute top-8 -right-8 w-full h-full rounded-2xl border border-primary z-0 bg-primary/5"></div>
              
              {/* Stats boxes */}
              <motion.div 
                className="absolute -bottom-10 -left-10 bg-card border border-border p-4 rounded-lg shadow-lg z-20 w-40"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="text-xl font-bold">5+ Years</div>
                <div className="text-sm text-muted-foreground">Experience</div>
              </motion.div>
              
              <motion.div 
                className="absolute top-10 -left-10 bg-card border border-border p-4 rounded-lg shadow-lg z-20"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <div className="text-xl font-bold">Glasgow, UK</div>
                <div className="text-sm text-muted-foreground">Based in</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
