import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

import { Header } from './components/Header';

import s from './App.module.scss';
import { Projects } from './components/Projects';
import { GitHub } from './components/GitHub';
import { Footer } from './components/Footer/Footer';
import { About } from './components/About';

export const App = () => {
  return (
    <BrowserRouter>
      <div className={s.root}>
        <Header />
        <main>
          <About />
          {/* <Projects /> */}
          <GitHub />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
