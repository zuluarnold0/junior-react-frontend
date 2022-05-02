import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  CartCardContainer,
  AttributesContainer,
  SwatchAttributeContainer,
  SwatchAttribute,
} from './style'
import {
  findSelectedPrice,
  handleQuantityDecrease,
  handleQuantityIncrease,
  handleRemoveFromCart,
} from '../../../helpers'
import ChevronRight from '../../../assets/svg/ChevronRight'
import ChevronLeft from '../../../assets/svg/ChevronLeft'
import { setUpdatedCartToState } from '../../../redux/actions/cartActions'
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
        style={{ transform: `translateX(-${currentSlide * 200}px)` }}
      >
        {product.gallery &&
          product.gallery.map((url, i) => {
            return (
              <div className="single-image-box" key={i}>
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

  displayAttributeItems = (attribute) => {
    const { items, type, name } = attribute
    const { selectedAttributes } = this.props.product

    return items.map((item) => {
      const foundAttribute = selectedAttributes.find((selected) => {
        return (
          selected.attributeName === name &&
          selected.itemName === item.displayValue
        )
      })

      return type.toLowerCase() !== 'swatch' ? (
        <div
          key={item.id}
          className={foundAttribute ? 'selected-item' : 'item'}
        >
          {item.value}
        </div>
      ) : (
        <SwatchAttributeContainer
          key={item.id}
          className={foundAttribute ? 'selected-swatch' : ''}
        >
          <SwatchAttribute primary={item.value}></SwatchAttribute>
        </SwatchAttributeContainer>
      )
    })
  }

  displayAttributes = () => {
    const { attributes } = this.props.product
    return attributes.map((attribute, i) => {
      return (
        <AttributesContainer key={i}>
          <h5 className="attributes-heading">
            {attribute.name}
            {':'}
          </h5>
          <div className="attributes-box">
            {this.displayAttributeItems(attribute)}
          </div>
        </AttributesContainer>
      )
    })
  }

  showDeleteModal = (value) => {
    this.setState({ deleteItem: value })
  }

  removeFromCart = () => {
    const { product } = this.props
    handleRemoveFromCart(
      product.idOfProductInCart,
      this.props.setUpdatedCartToState,
      this.showDeleteModal,
    )
  }

  render() {
    const { currentSlide } = this.state
    const { product, selectedCurrency } = this.props
    const price = findSelectedPrice(selectedCurrency, product.prices)
    return (
      <>
        <CartCardContainer>
          <div className="content-container">
            <h2 className="content-title">{product.brand}</h2>
            <h2 className="content-subtitle">{product.name}</h2>
            <p className="price-value">
              {price[0].currency.symbol} {price[0].amount.toFixed(2)}
            </p>

            {this.displayAttributes()}
          </div>
          <div className="img-action-container">
            <div className="action-container">
              <div
                className="action-add"
                onClick={() =>
                  handleQuantityIncrease(
                    product,
                    this.props.setUpdatedCartToState,
                  )
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
                    this.props.setUpdatedCartToState,
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
                <ChevronLeft />
              </div>
              <div
                className="right-arrow"
                onClick={() => this.handleRightClick(currentSlide, product)}
              >
                <ChevronRight />
              </div>
            </div>
          </div>
        </CartCardContainer>
        {this.state.deleteItem && (
          <RemoveFromCartModal
            name={product.name}
            removeFromCart={this.removeFromCart}
            showDeleteModal={this.showDeleteModal}
          />
        )}
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    selectedCurrency: state.currencies.selectedCurrency,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUpdatedCartToState: (cart) => dispatch(setUpdatedCartToState(cart)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartCard)
