import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App.jsx'
import '@/index.css'
import { BRAND, LOGO } from '@/data/products'

// Eagerly pre-cache all product and brand logos on application startup
const preloadImage = (url) => {
  if (!url) return;
  const img = new Image();
  img.src = url;
};

Object.values(BRAND).forEach(preloadImage);
Object.values(LOGO).forEach(preloadImage);

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)
