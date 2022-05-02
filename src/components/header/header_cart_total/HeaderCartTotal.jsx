import React, { Component } from 'react'
import { connect } from 'react-redux'
import { HeaderCartTotalContainer } from './style'

class HeaderCartTotal extends Component {
  render() {
    const { currencySymbol, cartTotalPrice } = this.props
    return (
      <HeaderCartTotalContainer>
        <span className="total-key">Total</span>
        <span className="total-value">
          {currencySymbol} {cartTotalPrice.toFixed(2)}
        </span>
      </HeaderCartTotalContainer>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cartTotalPrice: state.cart.cartTotalPrice,
    currencySymbol: state.cart.currencySymbol,
  }
}

export default connect(mapStateToProps)(HeaderCartTotal)
