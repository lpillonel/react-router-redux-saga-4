import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import styled from 'styled-components'
import styles from './styles.scss'
import { selectHomeReducerDomain } from './selectors'
import { changeUsernameField } from './actions'

const ExampleListElement = styled.div`
  border: 1px solid #29D;
  border-radius: 2px;
  transition: all 300ms ease;
  padding: 6px;
  margin-bottom: 16px;
`

const A = styled.a`
  border: 4px solid red;
`

ExampleListElement.defaultProps = {
  name: null,
  url: null,
  description: null,
}

ExampleListElement.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  description: PropTypes.string,
}


@connect(
  createStructuredSelector({
    exampleState: selectHomeReducerDomain(),
  }),
  dispatch => ({
    changeUsernameField: e => dispatch(changeUsernameField(e.target.value)),
  })
)
export default class Example extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    exampleState: React.PropTypes.object.isRequired,
    changeUsernameField: React.PropTypes.func.isRequired,
  }

  render () {
    const { queriedUsername, fetchData, fetchErrors } = this.props.exampleState
    return (
      <div className={styles.exampleContainer}>
        <h2>Async Redux Saga Exampleasd</h2>
        <p>Type in a github username to see their starred repositories.</p>
        <input
          type="text"
          className={styles.exampleContainer__input}
          value={queriedUsername}
          onChange={this.props.changeUsernameField}
        />
        {fetchErrors ?
          <small className={styles.exampleContainer__error}>{fetchErrors}</small> : null
        }
        <div className={styles.exampleContainer__list}>
          {fetchData ?
            fetchData.map(each =>
              <ExampleListElement key={each.id}>
                <A href={each.html_url} target="_blank">{each.name}</A>
                <p className={styles.exampleContainer__listElement}>{each.description}</p>
              </ExampleListElement>) : null
          }
        </div>
      </div>
    )
  }
}
