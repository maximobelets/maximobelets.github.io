import React from 'react';
import './App.css';

import { Header } from './components/Header';

import s from './App.module.scss';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Footer } from './components/Footer/Footer';

export const App = () => {
  return (
    <div className={s.root}>
      <Header />
      <main>
        {/* <Projects /> */}
        <About />
      </main>
      <Footer />
    </div>
  );
}
