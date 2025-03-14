
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Briefcase } from 'lucide-react';

const educationData = [
  {
    level: 'Master\'s Degree',
    institution: 'University of Technology',
    field: 'Computer Science',
    year: '2019 - 2021',
    description: 'Specialized in Network Security and Cloud Computing. Graduated with honors.'
  },
  {
    level: 'Bachelor\'s Degree',
    institution: 'Tech Institute',
    field: 'Information Technology',
    year: '2015 - 2019',
    description: 'Focus on system administration and network infrastructure. Completed internship at leading IT company.'
  },
  {
    level: 'HSEB Level',
    institution: 'Higher Secondary Education Board',
    field: 'Science & Mathematics',
    year: '2013 - 2015',
    description: 'Completed with distinction in Computer Science and Mathematics.'
  },
  {
    level: 'School Level',
    institution: 'Modern Secondary School',
    field: 'General Education',
    year: '2001 - 2013',
    description: 'Participated in numerous technical competitions and coding projects.'
  }
];

const workExperience = [
  {
    position: 'Senior Technical Support Engineer',
    company: 'TechSolutions Inc.',
    year: '2022 - Present',
    description: 'Leading technical support for enterprise clients, managing server infrastructure, and implementing DevOps practices.'
  },
  {
    position: 'IT Support Specialist',
    company: 'Global Systems',
    year: '2020 - 2022',
    description: 'Provided comprehensive technical support, network configuration, and system maintenance for over 200 clients.'
  },
  {
    position: 'Customer Support Representative',
    company: 'Tech Assist',
    year: '2018 - 2020',
    description: 'Resolved customer inquiries and technical issues, maintaining high customer satisfaction rates.'
  }
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="experience" className="py-20 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl" />
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
          <h2 className="text-4xl font-bold mb-6">Experience & Education</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey combines strong educational foundations with hands-on industry experience.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-16">
          {/* Education Section */}
          <div>
            <motion.div 
              className="flex items-center mb-10"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="p-3 rounded-full bg-primary/10 mr-4">
                <GraduationCap size={24} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Education</h3>
            </motion.div>
            
            <div className="relative pl-6 border-l border-border">
              {educationData.map((item, index) => (
                <motion.div 
                  key={index}
                  className="mb-10 relative"
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                >
                  <div className="absolute -left-[31px] w-6 h-6 rounded-full bg-background border-4 border-primary flex items-center justify-center" />
                  <div className="pl-6">
                    <span className="text-sm font-medium px-3 py-1 rounded-full bg-primary/10 text-primary inline-block mb-2">
                      {item.year}
                    </span>
                    <h4 className="text-xl font-bold mb-1">{item.level}</h4>
                    <p className="text-base font-medium mb-1">{item.institution}</p>
                    <p className="text-sm text-muted-foreground mb-2">{item.field}</p>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Work Experience Section */}
          <div>
            <motion.div 
              className="flex items-center mb-10"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="p-3 rounded-full bg-primary/10 mr-4">
                <Briefcase size={24} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Work Experience</h3>
            </motion.div>
            
            <div className="relative pl-6 border-l border-border">
              {workExperience.map((item, index) => (
                <motion.div 
                  key={index}
                  className="mb-10 relative"
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
                >
                  <div className="absolute -left-[31px] w-6 h-6 rounded-full bg-background border-4 border-primary flex items-center justify-center" />
                  <div className="pl-6">
                    <span className="text-sm font-medium px-3 py-1 rounded-full bg-primary/10 text-primary inline-block mb-2">
                      {item.year}
                    </span>
                    <h4 className="text-xl font-bold mb-1">{item.position}</h4>
                    <p className="text-base font-medium mb-2">{item.company}</p>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
