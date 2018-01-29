import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as flightsAction from '../actions/Flights'

import styled from 'styled-components'

import CardFlight from './CardFlight.js'

const FlightsList = styled.div`
	display: flex;
	justify-content: center;
`;

class Flights extends Component {
	componentWillMount() {
    this.props.actions.fetchFlights()
  }
	render() {
		return (
			<FlightsList>
				{this.props.flights.flights.map((flight, indx) => {
					return <CardFlight
						key={indx}
						data={flight}
					/>
				})}
			</FlightsList>
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

export default connect(mapStateToProps, mapDispatchToProps)(Flights)