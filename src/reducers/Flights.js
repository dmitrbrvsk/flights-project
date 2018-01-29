import { FETCH_FLIGHTS } from '../constants'

const initialState = {
  flights: []
}

export let flightsReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_FLIGHTS:
			return { ...state, flights: action.payload.flights }
			break
		default:
			return state
  }
}