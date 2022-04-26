import React, { Component } from 'react'
import { MessageModalContainer } from './style'

class MessageModal extends Component {
  render() {
    const { children } = this.props
    return (
      <MessageModalContainer>
        <div className="modal-content">{children}</div>
      </MessageModalContainer>
    )
  }
}

export default MessageModal
