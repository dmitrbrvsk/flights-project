import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as flightsAction from '../actions/Flights'

import styled from 'styled-components'

import CardFlight from './CardFlight.js'

const FlightsList = styled.div`
	margin: 0 auto;
	width: 700px;
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
						key={flight.id}
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