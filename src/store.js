import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

import rootReducer from './reducers'

export let configureStore = () => {
	const logger = createLogger()
	const middlewares = [thunk]

	if (process.env.NODE_ENV === 'development') {
		middlewares.push(logger)
	}

	const store = createStore(
		rootReducer,
		composeWithDevTools(applyMiddleware(...middlewares))
	)

	return store

}