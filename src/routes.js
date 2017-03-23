/*
  eslint import/no-unresolved: 0, global-require: 0, import/no-extraneous-dependencies: 0
*/
/*
  As we are hot loading in routes when they are used, we have to require them inline.
*/

import React, { PropTypes } from 'react'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter as Router } from 'react-router-redux'
import { Provider } from 'react-redux'
import App from './containers/App'
import Footer from './components/Footer'
import NavigationBar from './components/NavigationBar'


const appContainerStyling = {
  appContainer: {
    marginTop: 50,
  },
}

const Routing = ({ store, history }) => (
  <Provider store={store}>
    <Router history={history}>
      <App>
        <NavigationBar />
        <div style={appContainerStyling.appContainer}>
          <Switch>
            <Route exact path="/" component={require('react-router-loader?name=home!./containers/Home')} />
            <Route exact path="/example" component={require('react-router-loader?name=home!./containers/Example')} />
            <Route exact path="/" component={require('react-router-loader?name=home!./containers/Home')} />
            <Route component={require('react-router-loader?name=home!./containers/NotFound')} />
          </Switch>
        </div>
        <Footer />
      </App>
    </Router>
  </Provider>
)

Routing.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
}

export default Routing
