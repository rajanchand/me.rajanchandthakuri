
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun, Menu, X, Phone, Mail } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Resume', href: '#resume' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 w-full z-50 px-5 py-4 transition-all duration-300 ${
        isScrolled ? 'glass' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold tracking-tight hover:text-primary transition-colors">
          Rajan<span className="text-primary">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="relative px-4 py-2 rounded-full font-medium transition-all hover:text-primary"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <a
            href="tel:+441234567890"
            className="flex items-center gap-1.5 text-sm font-medium hover:text-primary transition-colors"
          >
            <Phone size={16} />
            <span className="hidden sm:inline">Call</span>
          </a>
          
          <a
            href="mailto:rajanchand48@gmail.com"
            className="flex items-center gap-1.5 text-sm font-medium hover:text-primary transition-colors"
          >
            <Mail size={16} />
            <span className="hidden sm:inline">Email</span>
          </a>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-secondary transition-colors flex items-center justify-center"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-full hover:bg-secondary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden py-2 absolute top-full left-0 w-full glass"
        >
          <div className="container mx-auto py-3 flex flex-col space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-5 py-2.5 font-medium hover:bg-secondary/50 rounded-lg transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
        </motion.nav>
      )}
    </motion.header>
  );
};

export default Header;
