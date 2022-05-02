import React, { Component } from 'react'
import HeaderCartCard from '../header_cart_card/HeaderCartCard'
import { HeaderCartListContainer } from './style'
import { findSelectedPrice } from '../../../helpers'

class HeaderCartList extends Component {
  mapCartProducts = () => {
    const { cart, selectedCurrency } = this.props

    return cart.map((c) => {
      const selectPrice = findSelectedPrice(selectedCurrency, c.prices)
      return (
        <HeaderCartCard
          product={c}
          selectPrice={selectPrice[0]}
          key={c.idOfProductInCart}
          selectedCurrency={selectedCurrency}
        />
      )
    })
  }

  render() {
    return (
      <HeaderCartListContainer>
        {this.mapCartProducts()}
      </HeaderCartListContainer>
    )
  }
}

export default HeaderCartList
