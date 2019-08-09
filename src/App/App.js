import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Nav from '../Nav/Nav';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import './App.css';
import Login from '../Login/Login';

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <div id="container">
          <Route path="/" component={Nav} />
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Footer />
        </div>
      </div>
    );
  }
}
