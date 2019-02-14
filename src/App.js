import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import Glide from '@glidejs/glide';

import './scss/styles.scss';

class App extends Component {
  componentDidMount() {
    // slider - Glide
    new Glide('#glide1').mount();
    new Glide('#glide2').mount();

    //scroll and button nav
    const navLinks = document.querySelectorAll('.nav a, .down');
    navLinks.forEach(navLink => {
      navLink.addEventListener('click', e => {
        let hashval = navLink.getAttribute('href');
        let target = document.querySelector(hashval);
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        e.preventDefault();
      });
    });
  }
  render() {
    return (
      <div className="App wrapper">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
