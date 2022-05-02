import React, { Component } from 'react'
import { DisplayCartSuccessModalContainer } from './style'

export class DisplayCartSuccessModal extends Component {
  render() {
    const { showCartSuccessModal, name, setShowCartSuccessModal } = this.props
    setTimeout(() => {
      showCartSuccessModal && setShowCartSuccessModal(false)
    }, 1000)
    return (
      <DisplayCartSuccessModalContainer>
        <div className="success-modal-content">
          <span className="message-modal-name">{name}</span>
          <span className="message-modal-text">
            {' was added to cart successfully'}
          </span>
        </div>
      </DisplayCartSuccessModalContainer>
    )
  }
}

export default DisplayCartSuccessModal
