import React, { Component } from 'react'
import CartCard from '../cart_card/CartCard'
import { CartListContainer } from './style'

class CartList extends Component {
  mapCart = () => {
    return this.props.cart.map((product, i) => (
      <CartCard
        product={product}
        key={i}
        showDeleteModal={this.props.showDeleteModal}
      />
    ))
  }
  render() {
    return <CartListContainer>{this.mapCart()}</CartListContainer>
  }
}

export default CartList
