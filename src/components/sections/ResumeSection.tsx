
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  FileText, 
  Download, 
  Code, 
  Globe, 
  Cpu, 
  Database, 
  Languages, 
  Award
} from 'lucide-react';

const skills = [
  {
    category: 'Programming Languages',
    icon: Code,
    items: ['Bash', 'PowerShell', 'Python', 'JavaScript', 'SQL']
  },
  {
    category: 'Tools & Technologies',
    icon: Cpu,
    items: ['Docker', 'Kubernetes', 'Jenkins', 'Git', 'AWS', 'Azure']
  },
  {
    category: 'Infrastructure',
    icon: Database,
    items: ['Linux Systems', 'Windows Server', 'Networking', 'Virtualization', 'Cloud Services']
  },
  {
    category: 'Languages',
    icon: Languages,
    items: ['English (Fluent)', 'Nepali (Native)']
  },
  {
    category: 'Certifications',
    icon: Award,
    items: ['AWS Certified Solutions Architect', 'Microsoft Certified: Azure Administrator', 'CompTIA Network+']
  },
  {
    category: 'Additional Skills',
    icon: Globe,
    items: ['Technical Documentation', 'Customer Communication', 'Problem Solving', 'Team Collaboration']
  }
];

const ResumeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  
  return (
    <section id="resume" className="py-20 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-accent/5 rounded-full filter blur-3xl" />
      </div>
      
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <h2 className="text-4xl font-bold mb-6">Resume & Skills</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A detailed overview of my technical proficiencies, professional certifications, and key competencies.
          </p>
        </motion.div>
        
        <div className="flex flex-col md:flex-row gap-10 mb-16">
          <motion.div
            className="flex-1 order-2 md:order-1"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skillCategory, index) => (
                <motion.div
                  key={index}
                  className="p-6 rounded-xl border border-border bg-card hover:shadow-md transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                >
                  <div className="flex items-center mb-4">
                    <div className="p-2 rounded-full bg-primary/10 mr-3">
                      <skillCategory.icon size={18} className="text-primary" />
                    </div>
                    <h3 className="text-lg font-bold">{skillCategory.category}</h3>
                  </div>
                  <ul className="space-y-2">
                    {skillCategory.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center">
                        <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            className="flex-1 max-w-md mx-auto order-1 md:order-2"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="relative p-8 rounded-2xl bg-card border border-border h-full">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-bl-3xl rounded-tr-2xl"></div>
              
              <div className="flex flex-col justify-between h-full relative z-10">
                <div>
                  <div className="mb-6 flex items-center">
                    <FileText size={24} className="text-primary mr-3" />
                    <h3 className="text-2xl font-bold">My Resume</h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-8">
                    Download my complete resume to get a detailed overview of my professional 
                    experience, educational background, and technical skills.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-green-500 mr-3"></div>
                      <span>Updated May 2024</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-blue-500 mr-3"></div>
                      <span>Comprehensive skill listing</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-purple-500 mr-3"></div>
                      <span>Professional references available</span>
                    </div>
                  </div>
                </div>
                
                <a 
                  href="#download-resume" 
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium transition-all hover:bg-primary/90 w-full"
                >
                  <Download size={18} />
                  Download CV
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
