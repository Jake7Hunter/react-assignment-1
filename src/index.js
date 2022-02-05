import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import About from './components/About';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import './css/style.css';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <About />
    <Gallery />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
