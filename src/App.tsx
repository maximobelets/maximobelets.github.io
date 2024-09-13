import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Nav } from './components/Nav/Nav';
import { GitHub } from './components/GitHub';
import { Projects } from './components/Projects';

import './App.css'

function App() {
  return (
    <BrowserRouter>

        <Nav />

        <main>
          <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/github" element={<GitHub />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>

        <Footer />

    </BrowserRouter>
  )
}

export default App
