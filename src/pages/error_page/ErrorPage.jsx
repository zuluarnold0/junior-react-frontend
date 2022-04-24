import React, { Component } from 'react'
import { ErrorPageContainer } from './style'

class ErrorPage extends Component {
  render() {
    const { errorMessage } = this.props
    return (
      <ErrorPageContainer>
        <p className="error-message">
          {errorMessage ? errorMessage : 'Page Not Found!!'}
        </p>
      </ErrorPageContainer>
    )
  }
}

export default ErrorPage
