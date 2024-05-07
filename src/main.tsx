import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx'
import './index.css'
import { GitHub } from './components/GitHub/GitHub.tsx';
import { Nav } from './components/Nav/Nav.tsx';
import { Footer } from './components/Footer/Footer.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <React.StrictMode>
      <Nav />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/github" element={<GitHub />} />
      </Routes>
      <Footer />
    </React.StrictMode>
  </BrowserRouter>
)
