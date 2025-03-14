
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Github, Globe, Terminal, CheckCircle, Laptop } from 'lucide-react';

const steps = [
  {
    title: "Setup GitHub Repository",
    description: "Create a new repository on GitHub where your portfolio will be hosted.",
    icon: Github,
    details: [
      "Sign in to your GitHub account or create one at github.com",
      "Click the '+' icon in the top right and select 'New repository'",
      "Name your repository (e.g., 'portfolio' or '[your-username].github.io')",
      "Make it public and initialize with a README",
      "Click 'Create repository'"
    ]
  },
  {
    title: "Prepare Your Project",
    description: "Configure your React project for deployment to GitHub Pages.",
    icon: Code,
    details: [
      "Install the GitHub Pages package: npm install gh-pages --save-dev",
      "In package.json, add: \"homepage\": \"https://[your-username].github.io/[repo-name]\"",
      "Add deployment scripts: \"predeploy\": \"npm run build\", \"deploy\": \"gh-pages -d dist\"",
      "Ensure your vite.config.ts has the correct base path for GitHub Pages"
    ]
  },
  {
    title: "Build and Deploy",
    description: "Build your project and push it to GitHub Pages.",
    icon: Terminal,
    details: [
      "Initialize Git in your project (if not already): git init",
      "Connect to your remote repository: git remote add origin https://github.com/[username]/[repo-name].git",
      "Commit your changes: git add . && git commit -m \"Initial commit\"",
      "Push to GitHub: git push -u origin main (or master)",
      "Deploy to GitHub Pages: npm run deploy"
    ]
  },
  {
    title: "Configure GitHub Pages",
    description: "Set up GitHub Pages in your repository settings.",
    icon: Globe,
    details: [
      "Go to your repository on GitHub",
      "Click 'Settings' > 'Pages'",
      "Under 'Source', select 'gh-pages' branch",
      "Click 'Save'",
      "Wait a few minutes for your site to be published"
    ]
  },
  {
    title: "Verify Deployment",
    description: "Check that your portfolio is correctly deployed and working.",
    icon: CheckCircle,
    details: [
      "Visit https://[your-username].github.io/[repo-name]",
      "Test all pages and features",
      "Check responsiveness on different devices",
      "Verify that all links and forms work correctly",
      "Make any necessary adjustments and redeploy if needed"
    ]
  }
];

const GitHubDeploymentGuide = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="deployment" className="py-20 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-accent/5 rounded-full filter blur-3xl" />
      </div>
      
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <h2 className="text-4xl font-bold mb-6">GitHub Deployment Guide</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Follow these steps to deploy your portfolio website to GitHub Pages.
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative pl-8 border-l-4 border-primary/20">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                className="mb-12 relative"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
              >
                <div className="absolute -left-7 bg-background border-4 border-primary rounded-full p-2">
                  <step.icon size={24} className="text-primary" />
                </div>
                
                <div className="bg-card border border-border rounded-xl p-6 shadow-sm ml-4">
                  <h3 className="text-xl font-bold mb-2 flex items-center">
                    <span className="bg-primary/10 text-primary rounded-full w-8 h-8 flex items-center justify-center mr-3">
                      {index + 1}
                    </span>
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4">{step.description}</p>
                  
                  <ul className="space-y-2">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-primary mr-2 mt-1">•</span>
                        <span className="text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="bg-card border border-border rounded-xl p-6 shadow-sm mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <div className="flex items-start">
              <div className="p-3 rounded-full bg-primary/10 mr-4 mt-1">
                <Laptop size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Additional Resources</h3>
                <p className="text-muted-foreground mb-4">
                  Here are some helpful resources for deploying your React portfolio to GitHub Pages:
                </p>
                <ul className="space-y-2">
                  <li>
                    <a 
                      href="https://docs.github.com/en/pages" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      GitHub Pages Documentation
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://vitejs.dev/guide/static-deploy.html#github-pages" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Vite.js GitHub Pages Deployment Guide
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://create-react-app.dev/docs/deployment/#github-pages" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Create React App Deployment Guide
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GitHubDeploymentGuide;
