import React, { Component } from 'react'
import CartCard from '../cart_card/CartCard'
import { CartListContainer } from './style'

class CartList extends Component {
  mapProducts = (cart, selectedCurrency, setUpdatedCartToState) => {
    return (
      cart &&
      cart.map((product) => {
        return (
          <CartCard
            product={product}
            key={product.idOfProductInCart}
            selectedCurrency={selectedCurrency}
            setUpdatedCartToState={setUpdatedCartToState}
          />
        )
      })
    )
  }

  render() {
    const { cart, selectedCurrency, setUpdatedCartToState } = this.props
    return (
      <CartListContainer>
        {this.mapProducts(cart, selectedCurrency, setUpdatedCartToState)}
      </CartListContainer>
    )
  }
}

export default CartList
