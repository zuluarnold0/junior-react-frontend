import React, { Component } from 'react'
import { DisplayCartFailModalContainer } from './style'

class DisplayCartFailModal extends Component {
  render() {
    const { showCartFailModal, name, setShowFailModal } = this.props
    setTimeout(() => {
      showCartFailModal && setShowFailModal(false)
    }, 3000)
    return (
      <DisplayCartFailModalContainer>
        <div className="fail-modal-content">
          <span className="message-modal-name">{name}</span>
          <span className="message-modal-text">
            {' is currently unavailable'}
          </span>
        </div>
      </DisplayCartFailModalContainer>
    )
  }
}

export default DisplayCartFailModal
