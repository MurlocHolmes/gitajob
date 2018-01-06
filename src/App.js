import React, { Component } from 'react';
import { NavBar } from './components/navbar/navbar';
import { SearchArea } from './components/searcharea/searcharea';
import { Results } from './components/results/results';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <NavBar></NavBar>
          <SearchArea></SearchArea>
          <Results></Results>
      </div>
    );
  }
}

export default App;
