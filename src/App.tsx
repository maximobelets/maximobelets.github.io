import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Nav } from './components/Nav/Nav';
import { GitHub } from './components/GitHub';

import './App.css'

function App() {
  return (
    <BrowserRouter>

        <Nav />

        <main>
          <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/github" element={<GitHub />} />
          </Routes>
        </main>

        <Footer />

    </BrowserRouter>
  )
}

export default App
