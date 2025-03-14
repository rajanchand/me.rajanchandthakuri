
import { useState } from 'react';
import { ThemeProvider } from '@/context/ThemeContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AISearch from '@/components/AISearch';
import HomeSection from '@/components/sections/HomeSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ResumeSection from '@/components/sections/ResumeSection';
import AboutSection from '@/components/sections/AboutSection';
import ContactSection from '@/components/sections/ContactSection';
import WidgetsSection from '@/components/sections/WidgetsSection';
import GitHubDeploymentGuide from '@/components/sections/GitHubDeploymentGuide';

const Index = () => {
  const [showSearch, setShowSearch] = useState(true);

  const handleSkip = () => {
    setShowSearch(false);
  };

  return (
    <ThemeProvider>
      {showSearch && <AISearch onSkip={handleSkip} />}
      
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow">
          <HomeSection />
          <SkillsSection />
          <ExperienceSection />
          <ResumeSection />
          <AboutSection />
          <ContactSection />
          <WidgetsSection />
          <GitHubDeploymentGuide />
        </main>
        
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
