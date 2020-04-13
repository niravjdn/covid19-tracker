import React, { Component } from "react";
import logo from './logo.svg';
import AppNavBar from './components/AppNavBar'
import './App.css';
import Footer from './components/footer'
class App extends Component {
   render () {
    return (
      <div className="App">
        <AppNavBar />
        <Footer />
      </div>
    );
   }
}

export default App;
