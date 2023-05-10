import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger'
import invariant from 'redux-immutable-state-invariant'

export const sagaMiddleware = createSagaMiddleware()

const middleWare = [sagaMiddleware]

if (process.env.NODE_ENV === 'development') {
  middleWare.push(invariant())
  middleWare.push(createLogger({ collapsed: true }))
}

export default middleWare
