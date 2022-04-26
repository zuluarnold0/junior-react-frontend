import React, { Component } from 'react'
import ChevronRight from '../../../assets/svg/ChevronRight'
import ChevronLeft from '../../../assets/svg/ChevronLeft'
import { CartCardContainer, SelectedSwatchAttribute } from './style'
import {
  findSelectedPrice,
  handleQuantityDecrease,
  handleQuantityIncrease,
  handleRemoveFromCart,
} from '../../../helpers'
import RemoveFromCartModal from '../../../components/remove_item_from_cart/RemoveItemFromCart'

class CartCard extends Component {
  state = {
    currentSlide: 0,
    deleteItem: false,
  }

  handleLeftClick = (currentSlide, product) => {
    if (currentSlide > 0) {
      this.setState({ currentSlide: currentSlide - 1 })
    } else {
      this.setState({ currentSlide: product.gallery.length - 1 })
    }
  }

  handleRightClick = (currentSlide, product) => {
    if (currentSlide < product.gallery.length - 1) {
      this.setState({ currentSlide: currentSlide + 1 })
    } else {
      this.setState({ currentSlide: 0 })
    }
  }

  displayImgSlider = (currentSlide, product) => {
    return (
      <div
        className="slider-wrapper"
        style={{ transform: `translateX(-${currentSlide * 120}px)` }}
      >
        {product.gallery &&
          product.gallery.map((url) => {
            return (
              <div className="single-image-box" key={url}>
                <img
                  alt="ecommerce cart item"
                  className="single-image"
                  src={url}
                />
              </div>
            )
          })}
      </div>
    )
  }

  displaySelectedAttributes = () => {
    const { selectedAttributes } = this.props.product
    return (
      selectedAttributes &&
      selectedAttributes.map((attribute) => {
        return (
          <div className="attribute-container" key={attribute.attributeName}>
            <p className="attribute-name">{attribute.attributeName}</p>
            {attribute.itemType === 'swatch' ? (
              <SelectedSwatchAttribute primary={attribute.itemName}>
                {attribute.itemName}
              </SelectedSwatchAttribute>
            ) : (
              <div className="item-name">{attribute.itemName}</div>
            )}
          </div>
        )
      })
    )
  }

  showDeleteModal = (value) => {
    this.setState({ deleteItem: value })
  }

  removeFromCart = () => {
    const { product, setUpdatedCartToState } = this.props
    handleRemoveFromCart(
      product.idOfProductInCart,
      setUpdatedCartToState,
      this.showDeleteModal,
    )
  }

  render() {
    const { currentSlide } = this.state
    const { product, selectedCurrency, setUpdatedCartToState } = this.props
    const price = findSelectedPrice(selectedCurrency, product.prices)
    const displayedPrice = price[0].amount * product.count
    return (
      <>
        <CartCardContainer>
          <div className="content-container">
            <h2 className="content-title">{product.name}</h2>
            <h2 className="content-subtitle">{product.brand}</h2>
            <p className="price-value">
              {price[0].currency.symbol} {displayedPrice.toFixed(2)}
            </p>

            {this.displaySelectedAttributes()}
          </div>
          <div className="img-action-container">
            <div className="action-container">
              <div
                className="action-add"
                onClick={() =>
                  handleQuantityIncrease(product, setUpdatedCartToState)
                }
              >
                +
              </div>
              <p className="number">{product.count}</p>
              <div
                className="action-sub"
                onClick={() =>
                  handleQuantityDecrease(
                    product,
                    setUpdatedCartToState,
                    this.showDeleteModal,
                  )
                }
              >
                <span></span>
              </div>
            </div>
            <div className="display-slider-img-box">
              {this.displayImgSlider(currentSlide, product)}
              <div
                className="left-arrow"
                onClick={() => this.handleLeftClick(currentSlide, product)}
              >
                <ChevronLeft width={14} height={14} color={'#aaa'} />
              </div>
              <div
                className="right-arrow"
                onClick={() => this.handleRightClick(currentSlide, product)}
              >
                <ChevronRight width={20} height={20} color={'#aaa'} />
              </div>
            </div>
          </div>
        </CartCardContainer>
        {this.state.deleteItem ? (
          <RemoveFromCartModal
            name={product.name}
            removeFromCart={this.removeFromCart}
            showDeleteModal={this.showDeleteModal}
          />
        ) : (
          <></>
        )}
      </>
    )
  }
}

export default CartCard
