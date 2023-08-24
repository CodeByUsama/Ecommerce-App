import { createApp } from 'vue'; // Vite uses Vue internally for development
import { StrictMode } from 'react'; // React's StrictMode
import App from './App.jsx';
import './index.css';

const app = createApp(<StrictMode><App /></StrictMode>);

app.mount('#app');
