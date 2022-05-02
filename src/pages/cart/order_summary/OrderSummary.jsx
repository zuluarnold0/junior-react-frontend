import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { OrderSummaryContainer } from './style'

class OrderSummary extends Component {
  render() {
    const { itemsInCart, cartTotalPrice, currencySymbol } = this.props
    const tax = 15
    const total = cartTotalPrice + tax
    return (
      <OrderSummaryContainer>
        <div className="item-box">
          <span className="item-key">{'tax: '}</span>
          <span className="item-value">
            {currencySymbol} {tax.toFixed(2)}
          </span>
        </div>
        <div className="item-box">
          <span className="item-key">{'qty: '}</span>
          <span className="item-value">{itemsInCart}</span>
        </div>
        <div className="total-box">
          <span className="total-key">{'total:'}</span>
          <span className="total-value">
            {currencySymbol} {total.toFixed(2)}
          </span>
        </div>
        <Link to="/pages/checkout" className="link">
          <button className="order-button">{'order'}</button>
        </Link>
      </OrderSummaryContainer>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    itemsInCart: state.cart.itemsInCart,
    cartTotalPrice: state.cart.cartTotalPrice,
    currencySymbol: state.cart.currencySymbol,
  }
}

export default connect(mapStateToProps)(OrderSummary)
