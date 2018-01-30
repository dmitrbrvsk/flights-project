import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as flightsAction from '../actions/Flights'

import styled from 'styled-components'

import CardFlight from './CardFlight.js'
import Loader from './Loader.js'

const FlightsList = styled.div`
	display: flex;
  justify-content: center;
  flex-wrap: wrap;
	margin: 0 auto;
	width: 700px;

	@media (max-width: 767px) {
		width: 320px;
	}
`

class Flights extends Component {
	componentWillMount() {
    this.props.actions.fetchFlights()
  }
	render() {
		return (
			<div>
				{this.props.flights.loading ? (
					<Loader />
				) : (
					<FlightsList>
						{this.props.flights.flights.map((flight, indx) => {
							return <CardFlight
								key={flight.id}
								data={flight}
							/>
						})}
					</FlightsList>
				)}
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

export default connect(mapStateToProps, mapDispatchToProps)(Flights)