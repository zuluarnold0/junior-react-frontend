import React, { Component } from 'react'
import ShoppingCart from '../../../assets/svg/ShoppingCart'
import { Link } from 'react-router-dom'
import HeaderCartList from '../header_cart_list/HeaderCartList'
import { calculateItems } from '../../../helpers'
import {
  CartContainer,
  ShoppinCartTopRightContainer,
  ModalContainer,
  NoProductsInCart,
} from './style'

class HeaderCartOverlay extends Component {
  state = {
    showCartDropdown: false,
  }

  setUpdatedCartToState = (updatedCart) => {
    this.setState({ cart: updatedCart })
  }

  toggleShowCartModal = (e) => {
    this.setState({ showCartDropdown: true })

    if (e.target.classList.contains('backdrop')) {
      this.setState({ showCartDropdown: false })
    }
  }

  render() {
    const { selectedCurrency, setUpdatedCartToState, cart } = this.props
    const cartTotal = calculateItems(cart)
    return (
      <>
        <CartContainer
          className="modal-container-wrapper"
          onClick={(e) => this.toggleShowCartModal(e)}
        >
          <div className="shopping-cart-box">
            <ShoppingCart color={'black'} height={16} width={18} />
            {cartTotal > 0 ? (
              <div className="cart-count">{cartTotal}</div>
            ) : (
              <></>
            )}
          </div>
        </CartContainer>
        {this.state.showCartDropdown ? (
          <ModalContainer
            className="backdrop"
            onClick={(e) => this.toggleShowCartModal(e)}
          >
            <div className="modal-container-wrapper">
              <ShoppinCartTopRightContainer>
                <div className="shopping-title-box">
                  <span className="shopping-title">My Bag</span>
                  <span className="shopping-title-count">
                    {`${cartTotal} items`}
                  </span>
                </div>
                {cartTotal > 0 ? (
                  <>
                    <HeaderCartList
                      cart={cart}
                      setShowCartDropdown={this.setShowCartDropdown}
                      selectedCurrency={selectedCurrency}
                      setUpdatedCartToState={setUpdatedCartToState}
                    />
                    <div className="cart-buttons">
                      <Link to="/pages/cart" className="link">
                        <button className="view-button">view bag</button>
                      </Link>
                      <Link to="/pages/checkout" className="link">
                        <button className="checkout-button">check out</button>
                      </Link>
                    </div>
                  </>
                ) : (
                  <NoProductsInCart>
                    <p>Your cart is Empty</p>
                  </NoProductsInCart>
                )}
              </ShoppinCartTopRightContainer>
            </div>
          </ModalContainer>
        ) : (
          <></>
        )}
      </>
    )
  }
}

export default HeaderCartOverlay
