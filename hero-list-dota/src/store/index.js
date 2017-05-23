import { createStore,applyMiddleware,compose } from 'redux'
import { logger } from 'redux-logger'
import thunk from 'redux-thunk';

import Hero from '../reducer'

const Middleware=applyMiddleware(logger,thunk)

const store = createStore(Hero, compose(
  Middleware,
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

export default store
