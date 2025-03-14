
import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Send, 
  Github, 
  Linkedin, 
  Twitter, 
  Youtube 
} from 'lucide-react';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      
      // Reset the form
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset submission status after a delay
      setTimeout(() => {
        setFormSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent/5 rounded-full filter blur-3xl" />
      </div>
      
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Feel free to reach out! I'm always open to discussing new projects, opportunities, or just having a chat.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-card border border-border rounded-2xl p-8 shadow-sm h-full">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              
              {formSubmitted ? (
                <div className="bg-green-100 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 text-green-800 dark:text-green-200 mb-6">
                  <p>Your message has been sent successfully! I'll get back to you soon.</p>
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="example@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="How can I help you?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    placeholder="Your message here..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-6 py-3 rounded-lg font-medium text-white bg-primary hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>Processing...</>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="bg-card border border-border rounded-2xl p-8 shadow-sm h-full flex flex-col">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="p-3 rounded-full bg-primary/10 mr-4 mt-1">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Email</h4>
                    <a href="mailto:rajanchand48@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      rajanchand48@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 rounded-full bg-primary/10 mr-4 mt-1">
                    <Phone size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Phone</h4>
                    <a href="tel:+441234567890" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      +44 123 456 7890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 rounded-full bg-primary/10 mr-4 mt-1">
                    <MapPin size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Location</h4>
                    <p className="text-sm text-muted-foreground">
                      Glasgow, Scotland, United Kingdom
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 rounded-full bg-primary/10 mr-4 mt-1">
                    <Calendar size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Schedule a Meeting</h4>
                    <a
                      href="https://calendly.com/rajanchand48"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline"
                    >
                      Book a time slot on Calendly
                    </a>
                  </div>
                </div>
              </div>
              
              <h4 className="font-bold mb-4">Connect with me</h4>
              <div className="flex gap-3">
                <a 
                  href="https://github.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2.5 rounded-full bg-secondary hover:bg-secondary/70 transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>
                <a 
                  href="https://linkedin.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2.5 rounded-full bg-secondary hover:bg-secondary/70 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a 
                  href="https://twitter.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2.5 rounded-full bg-secondary hover:bg-secondary/70 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={18} />
                </a>
                <a 
                  href="https://youtube.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2.5 rounded-full bg-secondary hover:bg-secondary/70 transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube size={18} />
                </a>
              </div>
              
              <div className="mt-auto pt-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d143104.00436166497!2d-4.430835487452717!3d55.85417342346986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x488815562056ceeb%3A0x71e683b805ef511e!2sGlasgow%2C%20UK!5e0!3m2!1sen!2sus!4v1621600377988!5m2!1sen!2sus"
                  width="100%"
                  height="180"
                  style={{ border: 0, borderRadius: '0.5rem' }}
                  allowFullScreen={false}
                  loading="lazy"
                  title="Glasgow Map"
                  className="mt-2"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
