import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Contest from './pages/Contest';
import About from './pages/About';
import Contact from './pages/Contact';
import Guidelines from './pages/Guidelines';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' Component={Home}/>
        <Route path='/contest' Component={Contest}/>
        <Route path='/about' Component={About}/>
        <Route path='/contact' Component={Contact}/>
        <Route path='/guidelines' Component={Guidelines}/>
      </Routes>
    </Router>
  );
}

export default App;
