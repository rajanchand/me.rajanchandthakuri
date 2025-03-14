
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Network, 
  HeadphonesIcon, 
  Layers, 
  Users, 
  Server, 
  Cloud, 
  Shield,
  Terminal
} from 'lucide-react';

const skills = [
  {
    name: 'Networking',
    icon: Network,
    description: 'Expert in network configuration, troubleshooting, and maintenance.',
    color: 'blue'
  },
  {
    name: 'Technical Support',
    icon: HeadphonesIcon,
    description: 'Providing top-tier technical assistance to resolve complex issues.',
    color: 'green'
  },
  {
    name: 'DevOps',
    icon: Layers,
    description: 'Implementing CI/CD pipelines and automated deployment solutions.',
    color: 'purple'
  },
  {
    name: 'Customer Support',
    icon: Users,
    description: 'Delivering exceptional customer experiences through clear communication.',
    color: 'orange'
  },
  {
    name: 'Server Management',
    icon: Server,
    description: 'Configuring, optimizing, and maintaining server infrastructure.',
    color: 'red'
  },
  {
    name: 'Cloud Services',
    icon: Cloud,
    description: 'Experience with AWS, Azure, and GCP cloud platforms.',
    color: 'sky'
  },
  {
    name: 'IT Security',
    icon: Shield,
    description: 'Implementing security best practices and vulnerability assessments.',
    color: 'emerald'
  },
  {
    name: 'Scripting',
    icon: Terminal,
    description: 'Proficient in Bash, PowerShell, and automation scripting.',
    color: 'gray'
  }
];

const getColor = (color: string) => {
  switch (color) {
    case 'blue': return 'bg-blue-500/10 text-blue-600 dark:text-blue-400 ring-blue-500/20';
    case 'green': return 'bg-green-500/10 text-green-600 dark:text-green-400 ring-green-500/20';
    case 'purple': return 'bg-purple-500/10 text-purple-600 dark:text-purple-400 ring-purple-500/20';
    case 'orange': return 'bg-orange-500/10 text-orange-600 dark:text-orange-400 ring-orange-500/20';
    case 'red': return 'bg-red-500/10 text-red-600 dark:text-red-400 ring-red-500/20';
    case 'sky': return 'bg-sky-500/10 text-sky-600 dark:text-sky-400 ring-sky-500/20';
    case 'emerald': return 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 ring-emerald-500/20';
    case 'gray': return 'bg-gray-500/10 text-gray-600 dark:text-gray-400 ring-gray-500/20';
    default: return 'bg-primary/10 text-primary ring-primary/20';
  }
};

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const skillVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section id="skills" className="py-20 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-accent/5 rounded-full filter blur-3xl" />
      </div>
      
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            ref={ref}
          >
            <h2 className="text-4xl font-bold mb-6">My Technical Skills</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Over four years in the IT industry, I've developed expertise in various technical domains. 
              Here are the key areas where I excel:
            </p>
          </motion.div>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={skillVariants}
              className="relative p-6 rounded-2xl bg-card border border-border transition-all hover:shadow-md"
            >
              <div className={`absolute -top-5 left-6 w-10 h-10 rounded-full ${getColor(skill.color)} flex items-center justify-center ring-1 shadow-sm`}>
                <skill.icon size={20} />
              </div>
              <div className="pt-4">
                <h3 className="text-xl font-bold mb-3">{skill.name}</h3>
                <p className="text-muted-foreground text-sm">
                  {skill.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <p className="text-muted-foreground">
              I continuously enhance my skills through learning and practical application, 
              staying updated with the latest industry trends and technologies.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
