import React from 'react';
import './App.css';

import { Header } from './components/Header';

import s from './App.module.scss';
import { Projects } from './components/Projects';
import { About } from './components/About';

export const App = () => {
  return (
    <div className={s.root}>
      <Header />
      <main>
        <Projects />
        <About />
      </main>
    </div>
  );
}
