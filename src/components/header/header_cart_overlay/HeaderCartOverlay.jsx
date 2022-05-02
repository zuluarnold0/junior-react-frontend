import React, { Component } from 'react'
import {
  CartContainer,
  ShoppinCartTopRightContainer,
  ModalContainer,
  NoProductsInCart,
} from './style'
import ShoppingCart from '../../../assets/svg/ShoppingCart'
import HeaderCartList from '../header_cart_list/HeaderCartList'
import OverlayButtons from '../overlay_buttons/OverlayButtons'
import HeaderCartTotal from '../header_cart_total/HeaderCartTotal'

class HeaderCartOverlay extends Component {
  render() {
    const { cart, selectedCurrency, itemsInCart } = this.props
    return (
      <>
        <CartContainer
          className="modal-container-wrapper"
          onClick={() => this.props.openShowCartModal()}
        >
          <div className="shopping-cart-box">
            <ShoppingCart color={'#43464E'} height={18} width={20} />
            {itemsInCart > 0 && <div className="cart-count">{itemsInCart}</div>}
          </div>
        </CartContainer>
        {this.props.showCartDropdown && (
          <ModalContainer
            className="backdrop"
            onClick={(e) => this.props.closeShowCartModal(e)}
          >
            <div className="modal-container-wrapper">
              <ShoppinCartTopRightContainer>
                <div className="shopping-title-box">
                  <span className="shopping-title">My Bag,</span>
                  <span className="shopping-title-count">
                    {`${itemsInCart} items`}
                  </span>
                </div>
                {itemsInCart > 0 ? (
                  <>
                    <HeaderCartList
                      selectedCurrency={selectedCurrency}
                      cart={cart}
                    />
                    <HeaderCartTotal />
                    <OverlayButtons closeModal={this.props.closeModal} />
                  </>
                ) : (
                  <NoProductsInCart>
                    <p>Your cart is Empty</p>
                  </NoProductsInCart>
                )}
              </ShoppinCartTopRightContainer>
            </div>
          </ModalContainer>
        )}
      </>
    )
  }
}

export default HeaderCartOverlay
