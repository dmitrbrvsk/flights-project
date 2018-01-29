import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as flightsAction from './actions/Flights'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  componentWillMount() {
    this.props.actions.fetchFlights({ flights: [] })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React project</h1>
        </header>
        <p className="App-intro">
          Simple Flights App
        </p>
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    flights: state.flights
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(flightsAction, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
