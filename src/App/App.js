import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <div id="container">
          <Nav />
          <Main />
          <Footer />
        </div>
      </div>
    );
  }
}
