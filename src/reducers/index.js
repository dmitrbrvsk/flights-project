import { combineReducers } from 'redux'
import { flightsReducer } from './Flights'

export default combineReducers({
	flights: flightsReducer
})