import React, { Component } from 'react'
import {
  NavigationContainer,
  HeaderContainer,
  Actions,
  HeaderLogoContainer,
} from './style'
import { connect } from 'react-redux'
import { findSelectedPrice } from '../../helpers'
import { QUERY_CURRENCIES } from '../../graphql/currencyQueries'
import HeaderNavigation from './header_navigation/HeaderNavigation'
import HeaderCartOverlay from './header_cart_overlay/HeaderCartOverlay'
import HeaderPriceSelector from './header_price_selector/HeaderPriceSelector'
import Logo from '../logo/Logo'
import {
  setSelectedCurrency,
  getCurrencies,
} from '../../redux/actions/currencyActions'
import {
  setItemsInCart,
  setCartTotalPrice,
} from '../../redux/actions/cartActions'

export class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showCartDropdown: false,
      displayDropdown: '',
    }
  }

  openShowCartModal = () => {
    this.setState({ showCartDropdown: true })
    this.setState({ displayDropdown: 'none' })
  }

  closeModal = () => {
    this.setState({ showCartDropdown: false })
  }

  closeShowCartModal = (e) => {
    if (e.target.classList.contains('backdrop')) {
      this.setState({ showCartDropdown: false })
    }
    this.setState({ displayDropdown: '' })
  }

  setDropDown = (val) => {
    this.setState({ displayDropdown: val })
  }

  clearDropdown = () => {
    setTimeout(() => {
      this.state.displayDropdown.length && this.setDropDown('')
    }, 1000)
  }

  calculateItems = () => {
    const { cart } = this.props
    let totalItemsInCart = 0
    for (let item of cart) {
      totalItemsInCart += item.count
    }
    this.props.setItemsInCart(totalItemsInCart)
  }

  calculateCartTotal = () => {
    const { cart, selectedCurrency } = this.props
    let total = 0
    let currencySymbol = ''
    for (let c of cart) {
      const selectPrice = findSelectedPrice(selectedCurrency, c.prices)
      currencySymbol = selectPrice[0].currency.symbol
      total = total + c.count * selectPrice[0].amount
    }
    this.props.setCartTotalPrice(total, currencySymbol)
  }

  componentDidMount() {
    this.props.fetchCurrencies(QUERY_CURRENCIES)
    this.calculateItems()
    this.calculateCartTotal()
  }

  componentDidUpdate(prevProps) {
    if (this.props.cart !== prevProps.cart) {
      this.calculateItems()
      this.calculateCartTotal()
    }
  }

  render() {
    return (
      <HeaderContainer>
        <div className="header-wrapper">
          <NavigationContainer>
            <HeaderNavigation />
          </NavigationContainer>
          <HeaderLogoContainer>
            <Logo />
          </HeaderLogoContainer>
          <Actions>
            <HeaderPriceSelector
              setDropDown={this.setDropDown}
              clearDropdown={this.clearDropdown}
              currencies={this.props.currencies}
              selectedCurrency={this.props.selectedCurrency}
              showCartDropdown={this.state.showCartDropdown}
              displayDropdown={this.state.displayDropdown}
              setSelectedCurrency={this.props.setSelectedCurrency}
            />
            <HeaderCartOverlay
              showCartDropdown={this.state.showCartDropdown}
              selectedCurrency={this.props.selectedCurrency}
              openShowCartModal={this.openShowCartModal}
              closeShowCartModal={this.closeShowCartModal}
              closeModal={this.closeModal}
              cart={this.props.cart}
              itemsInCart={this.props.itemsInCart}
              setItemsInCart={this.props.setItemsInCart}
              setCartTotalPrice={this.props.setCartTotalPrice}
            />
          </Actions>
        </div>
      </HeaderContainer>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart.cart,
    itemsInCart: state.cart.itemsInCart,
    selectedCurrency: state.currencies.selectedCurrency,
    currencies: state.currencies.currencies,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSelectedCurrency: (label) => dispatch(setSelectedCurrency(label)),
    fetchCurrencies: (query) => dispatch(getCurrencies(query)),
    setItemsInCart: (itemsInCart) => dispatch(setItemsInCart(itemsInCart)),
    setCartTotalPrice: (total, currencySymbol) =>
      dispatch(setCartTotalPrice(total, currencySymbol)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
