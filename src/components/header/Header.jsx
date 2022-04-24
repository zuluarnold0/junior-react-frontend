import React, { Component } from 'react'
import logoImg from '../../assets/images/logo/logoImg.png'
import HeaderNavigation from './header_navigation/HeaderNavigation'
import HeaderPriceSelector from './header_price_selector/HeaderPriceSelector'
import HeaderCartOverlay from './header_cart_overlay/HeaderCartOverlay'
import { HeaderContainer, Logo, Actions } from './style'

class Header extends Component {
  render() {
    const {
      categories,
      selectedCategory,
      setSelectedCategory,
      currencies,
      setSelectedCurrency,
      selectedCurrency,
      setUpdatedCartToState,
      cart,
    } = this.props
    return (
      <>
        <HeaderContainer>
          <div className="header-wrapper">
            <HeaderNavigation
              categories={categories}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
            <Logo>
              <div className="logo-icon">
                <img src={logoImg} alt="app logo" />
              </div>
            </Logo>
            <Actions>
              <HeaderPriceSelector
                currencies={currencies}
                selectedCurrency={selectedCurrency}
                setSelectedCurrency={setSelectedCurrency}
              />
              <HeaderCartOverlay
                cart={cart}
                selectedCurrency={selectedCurrency}
                setUpdatedCartToState={setUpdatedCartToState}
              />
            </Actions>
          </div>
        </HeaderContainer>
      </>
    )
  }
}

export default Header
