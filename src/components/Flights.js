import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as flightsAction from '../actions/Flights'

import styled from 'styled-components'

import CardFlight from './CardFlight.js'
import Loader from './Loader.js'
import Select2 from './Select2.js'

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
	state = {
		filter_flights: []
	}

	componentWillMount() {
		this.props.actions.fetchFlights()
	}

	getFlightsCarrier = (e) => {
		const selectedCarrier = e.target.value
		const filterFlights = this.props.flights.flights.filter(flight => flight.carrier === selectedCarrier)
		this.setState({ ...this.state, filter_flights: filterFlights })
	}

	render() {
		const carriers = [...new Set(this.props.flights.flights.map(flight => flight.carrier))]
		const flights = this.state.filter_flights.length > 0 ? this.state.filter_flights : this.props.flights.flights
		return (
			<div>
				{this.props.flights.loading ? (
					<Loader />
				) : (
					<FlightsList>
						<Select2 items={carriers} onChange={this.getFlightsCarrier} />
						<div className='flights-container'>
							{flights.map((flight, indx) => {
								return <CardFlight
									key={flight.id}
									data={flight}
								/>
							})}
						</div>
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