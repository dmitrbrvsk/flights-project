import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

import rootReducer from './reducers'

export let configureStore = () => {
	const logger = createLogger()
	const middleware = [thunk, logger]
	const store = createStore(
		rootReducer,
		composeWithDevTools(applyMiddleware(...middleware))
	)

	return store

}