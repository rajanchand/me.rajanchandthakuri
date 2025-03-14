
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight } from 'lucide-react';

interface AISearchProps {
  onSkip: () => void;
}

const AISearch = ({ onSkip }: AISearchProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [query, setQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Auto-focus the search input when component mounts
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!query.trim()) return;
    
    setIsSearching(true);
    
    // Simulate search processing
    setTimeout(() => {
      setIsSearching(false);
      
      // Simple navigation based on keywords in the query
      const lowerQuery = query.toLowerCase();
      
      if (lowerQuery.includes('skill') || lowerQuery.includes('network') || lowerQuery.includes('support')) {
        window.location.hash = 'skills';
      } else if (lowerQuery.includes('education') || lowerQuery.includes('experience') || lowerQuery.includes('master')) {
        window.location.hash = 'experience';
      } else if (lowerQuery.includes('about') || lowerQuery.includes('profile')) {
        window.location.hash = 'about';
      } else if (lowerQuery.includes('contact') || lowerQuery.includes('email') || lowerQuery.includes('call')) {
        window.location.hash = 'contact';
      } else if (lowerQuery.includes('resume') || lowerQuery.includes('cv')) {
        window.location.hash = 'resume';
      } else {
        // Default to home if no matches
        window.location.hash = 'home';
      }
      
      setIsVisible(false);
    }, 1500);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-sm"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-xl mx-4 glass p-8 rounded-2xl shadow-xl"
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">AI Portfolio Search</h2>
            <button 
              onClick={() => setIsVisible(false)}
              className="p-2 rounded-full hover:bg-secondary/50 transition-colors"
              aria-label="Close search"
            >
              <X size={20} />
            </button>
          </div>

          <p className="text-muted-foreground mb-6">
            What would you like to know about Rajan Prakash Chand?
          </p>

          <form onSubmit={handleSearch} className="mb-6">
            <div className="relative">
              <div className="absolute left-3 top-3 text-muted-foreground">
                <Search size={20} />
              </div>
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type 'skills', 'experience', 'contact', etc."
                className="w-full pl-10 pr-4 py-3 bg-secondary/50 rounded-lg border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
              />
              <button
                type="submit"
                disabled={isSearching || !query.trim()}
                className={`absolute right-3 top-3 ${
                  isSearching || !query.trim() 
                    ? 'text-muted-foreground' 
                    : 'text-primary hover:text-primary/80'
                } transition-colors`}
                aria-label="Search"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </form>

          <div className="flex justify-between items-center">
            <div>
              {isSearching && <p className="text-sm text-muted-foreground">Searching...</p>}
            </div>
            <button
              onClick={onSkip}
              className="px-5 py-2 text-sm font-medium hover:text-primary transition-colors"
            >
              Skip to Portfolio
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AISearch;
