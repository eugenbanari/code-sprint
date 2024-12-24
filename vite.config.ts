import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            // Proxy requests starting with /api to the backend server at localhost:5000
            '/api': {
                target: 'https://d9af-37-214-62-197.ngrok-free.app', // Backend server URL
                changeOrigin: true,  // Needed for virtual hosted sites
            }
        }
    }
});

