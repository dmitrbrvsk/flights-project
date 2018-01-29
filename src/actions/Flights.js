import {
	API_ENDPOINT,
	FETCH_FLIGHTS_REQUEST,
	FETCH_FLIGHTS_SUCCESS,
	FETCH_FLIGHTS_FAILURE
} from '../constants'

export const fetchFlights = payload => {
  return (dispatch) => {
		dispatch({
			type: FETCH_FLIGHTS_REQUEST,
		})

		fetch(API_ENDPOINT)
			.then(function(response) {
				return response.json()
			}).then(function(json) {
				dispatch({
					type: FETCH_FLIGHTS_SUCCESS,
					payload: {
						results: json
					}
				})
			}).catch(function(ex) {
				dispatch({
					type: FETCH_FLIGHTS_FAILURE
				})
				console.log('parsing failed', ex)
    })
  }
}