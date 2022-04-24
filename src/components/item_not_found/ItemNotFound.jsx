import React, { Component } from 'react'
import { ItemNotFoundContainer } from './style'

class ItemNotFound extends Component {
  render() {
    const { message } = this.props
    return (
      <ItemNotFoundContainer>
        <p className="not-found-message">{message}</p>
      </ItemNotFoundContainer>
    )
  }
}

export default ItemNotFound
