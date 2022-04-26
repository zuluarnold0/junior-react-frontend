import React, { Component } from 'react'
import HeaderCartCard from '../header_cart_card/HeaderCartCard'
import { HeaderCartListContainer } from './style'
import { findSelectedPrice } from '../../../helpers'
import HeaderCartTotal from '../header_cart_total/HeaderCartTotal'

class HeaderCartList extends Component {
  render() {
    const { cart, selectedCurrency, setUpdatedCartToState } = this.props

    let total = 0
    let currencySymbol = ''
    return (
      <>
        <HeaderCartListContainer>
          {cart &&
            cart.map((c) => {
              const selectPrice = findSelectedPrice(selectedCurrency, c.prices)
              currencySymbol = selectPrice[0].currency.symbol
              total = total + c.count * selectPrice[0].amount
              return (
                <HeaderCartCard
                  product={c}
                  selectPrice={selectPrice[0]}
                  key={c.idOfProductInCart}
                  selectedCurrency={selectedCurrency}
                  setUpdatedCartToState={setUpdatedCartToState}
                />
              )
            })}
        </HeaderCartListContainer>
        <HeaderCartTotal total={total} currencySymbol={currencySymbol} />
      </>
    )
  }
}

export default HeaderCartList
