import React, { Component } from 'react'
import { RemoveFromCartModalContainer } from './style'

export class RemoveFromCartModal extends Component {
  render() {
    const { name, showDeleteModal, removeFromCart } = this.props

    return (
      <RemoveFromCartModalContainer>
        <div className="remove-modal-content">
          <div className="remove-text-container">
            <span className="remove-modal-text">
              {'Are you sure you want to remove '}
            </span>
            <span className="remove-modal-name">{name}</span>
            <span className="remove-modal-text">{' from the cart?'}</span>
          </div>
          <div className="remove-modal-buttons">
            <button className="delete-button" onClick={() => removeFromCart()}>
              Delete
            </button>
            <button
              className="cancel-button"
              onClick={() => showDeleteModal(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </RemoveFromCartModalContainer>
    )
  }
}

export default RemoveFromCartModal
