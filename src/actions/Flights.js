import { FETCH_FLIGHTS } from '../constants'

export const fetchFlights = payload => {
  return (dispatch) => {
		dispatch({
			type: FETCH_FLIGHTS,
			payload: {
				flights: payload.flights
			}
		})
  }
}