import {
	FETCH_FLIGHTS_REQUEST,
	FETCH_FLIGHTS_SUCCESS,
	FETCH_FLIGHTS_FAILURE
 } from '../constants'

const initialState = {
	flights: [],
	loading: false
}

export let flightsReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_FLIGHTS_REQUEST:
			return {
				...state,
				loading: true
			}

		case FETCH_FLIGHTS_SUCCESS:
			return {
				...state,
				loading: false,
				flights: action.payload.results
			}

      case FETCH_FLIGHTS_FAILURE:
        return {
					...state,
          loading: false,
          flights: []
				}

			default:
				return state
  }
}