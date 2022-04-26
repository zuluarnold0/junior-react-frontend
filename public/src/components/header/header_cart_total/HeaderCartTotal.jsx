import React, { Component } from 'react'
import { HeaderCartTotalContainer } from './style'

class HeaderCartTotal extends Component {
  render() {
    const { currencySymbol, total } = this.props
    return (
      <HeaderCartTotalContainer>
        <span className="total">Total</span>
        <span className="total">
          {currencySymbol} {total.toFixed(2)}
        </span>
      </HeaderCartTotalContainer>
    )
  }
}

export default HeaderCartTotal
