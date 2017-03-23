import React, { PropTypes } from 'react'
import styles from './styles.css'

class App extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render () {
    return (
      <div className={styles.appContainer}>
        {this.props.children}
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.node.isRequired,
}

export default App
