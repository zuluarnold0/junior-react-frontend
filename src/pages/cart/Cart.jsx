import React, { Component } from 'react'
import { connect } from 'react-redux'
import CartList from './cart_list/CartList'
import { CartContainer, CartTitleContainer } from './style'
import ItemNotFound from '../../components/item_not_found/ItemNotFound'
import OrderSummary from './order_summary/OrderSummary'

class Cart extends Component {
  render() {
    const { cart } = this.props
    return (
      <>
        {cart.length ? (
          <CartContainer>
            <CartTitleContainer>
              <p className="cart-title">{'Cart'}</p>
            </CartTitleContainer>
            <CartList cart={cart} />
            <OrderSummary />
          </CartContainer>
        ) : (
          <ItemNotFound message={'Your cart is empty!'} />
        )}
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart.cart,
  }
}

export default connect(mapStateToProps)(Cart)
