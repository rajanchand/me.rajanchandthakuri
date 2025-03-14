import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { componentTagger } from 'lovable-tagger';

// Vite configuration
export default defineConfig(({ mode }) => ({
  server: {
    host: '0.0.0.0', // Expose server on all interfaces
    port: 8080, // Default port
  },
  base: '/me.rajanchandthakuri/',  // Specify the base URL for GitHub Pages
  plugins: [
    // React plugin for React
    react(),
    // Conditionally load componentTagger for development mode
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Alias for src directory
    },
  },
}));
