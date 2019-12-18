import React, { Component } from 'react';
import './App.css';
import Sidenav from './component/sidenav';
import About from './component/about';
import Home from './component/home';
import Works from './component/works';
import Team from './component/team';
import Clients from './component/clients';
import Portfolio from './component/portfolio';
import Blog from './component/blog';
import Footer from './component/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidenav></Sidenav>
        <Home></Home>
        <About></About>
        <Works></Works>
        <Team></Team>
        <Clients></Clients>
        <Portfolio></Portfolio>
        <Blog></Blog>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
