import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    optimizeDeps: {
      exclude: ['lucide-react'],
      include: ['react', 'react-dom', 'react-router-dom', '@supabase/supabase-js'],
      esbuildOptions: {
        target: 'esnext'
      }
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'vendor-react': ['react', 'react-dom'],
            'vendor-router': ['react-router-dom'],
            'vendor-supabase': ['@supabase/supabase-js'],
            'vendor-ui': ['lucide-react']
          }
        }
      },
      sourcemap: true,
      chunkSizeWarningLimit: 1000,
      // Optimizar el tamaño del bundle
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      },
      // Mejorar el caching
      cssCodeSplit: true,
      assetsInlineLimit: 4096
    },
    server: {
      hmr: {
        overlay: false,
        timeout: 5000
      },
      watch: {
        usePolling: false,
        interval: 100
      },
      headers: {
        'Cache-Control': 'no-store'
      }
    },
    preview: {
      headers: {
        'Cache-Control': 'public, max-age=31536000'
      }
    },
    define: {
      'process.env': env
    }
  };
});