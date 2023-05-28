import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/Index.css';

const root = document.getElementById('root');

if (root !== null) {
   createRoot(root).render(
      <React.StrictMode>
         <App />
      </React.StrictMode>,
   );
}
