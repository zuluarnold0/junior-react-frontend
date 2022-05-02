import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { OverlayButtonsContainer } from './style'

export class OverlayButtons extends Component {
  render() {
    return (
      <OverlayButtonsContainer>
        <Link
          to="/pages/cart"
          onClick={() => this.props.closeModal()}
          className="link"
        >
          <div className="view-button">view bag</div>
        </Link>
        <Link to="/pages/checkout" className="link">
          <div className="checkout-button">check out</div>
        </Link>
      </OverlayButtonsContainer>
    )
  }
}

export default OverlayButtons
