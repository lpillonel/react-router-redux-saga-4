import 'sanitize.css/sanitize.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import createHistory from 'history/createBrowserHistory'
import configureStore from './store'
import Routing from './routes'
import sagas from './sagas'

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

const store = configureStore({}, history)
store.runSaga(sagas)

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      { Component }
    </AppContainer>,
    document.getElementById('root')
  )
}

// HMR for React
if (module.hot) {
  module.hot.accept('./routes', () => {
    import('./routes.js').then(NextHotLoaded => render(<NextHotLoaded.default store={store} history={history} />))
  })
}

render(<Routing store={store} history={history} />)
