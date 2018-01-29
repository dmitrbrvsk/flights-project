import React, { Component } from 'react'
import Flights from './components/Flights.js'
import 'semantic-ui-css/semantic.min.css'
import logo from './air.png'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React flights project</h1>
        </header>
        <Flights />
      </div>
    )
  }
}

export default App
