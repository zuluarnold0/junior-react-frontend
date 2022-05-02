import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { ProductCardContainer } from './style'
import { setUpdatedCartToState } from '../../../redux/actions/cartActions'
import ShoppingCart from '../../../assets/svg/ShoppingCart'
import { findSelectedPrice } from '../../../helpers'
import DisplayCartFailModal from './display_cart_fail_modal/DisplayCartFailModal'
import DisplayCartSuccessModal from './display_cart_success_modal/DisplayCartSuccessModal'

class ProductCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showCartFailModal: false,
      showCartSuccessModal: false,
      selectedAttributes: [],
    }
  }

  defaultSetSelectedAttribute = (attributes) => {
    let attributesArr = []
    for (let attr of attributes) {
      attributesArr.push({
        attributeName: attr.name,
        itemName: attr.items[0].displayValue,
        itemType: attr.type,
        itemValue: attr.items[0].value,
      })
    }
    this.setState({ selectedAttributes: attributesArr })
  }

  componentDidMount() {
    this.defaultSetSelectedAttribute(this.props.product.attributes)
  }

  setShowFailModal = (value) => {
    this.setState({ showCartFailModal: value })
  }

  setShowCartSuccessModal = (value) => {
    this.setState({ showCartSuccessModal: value })
  }

  createNewCart = (cart, product, setShowCartSuccessModal) => {
    const { selectedAttributes } = this.state
    const idOfProductInCart = product.id + Date.now()
    cart.push({ ...product, idOfProductInCart, selectedAttributes, count: 1 })
    window.sessionStorage.setItem('cart', JSON.stringify(cart))
    setShowCartSuccessModal(true)
    this.props.setUpdatedCartToState(cart)
  }

  findAttribute = (attributes) => {
    const { selectedAttributes } = this.state
    let count = 0
    for (let attribute of attributes) {
      for (let selected of selectedAttributes) {
        if (
          attribute.itemName === selected.itemName &&
          attribute.attributeName === selected.attributeName
        ) {
          count = count + 1
        }
      }
    }
    if (count === attributes.length) {
      return true
    }
    return false
  }

  updateExistingCart = (cart, product, setShowCartSuccessModal) => {
    let updatedCart = false
    let cartWithAttributes = []
    const { selectedAttributes } = this.state
    cartWithAttributes = cart.map((cartProduct) => {
      if (cartProduct.id === product.id) {
        const foundAttr = this.findAttribute(cartProduct.selectedAttributes)
        if (foundAttr) {
          cartProduct.count = parseInt(cartProduct.count) + 1
          updatedCart = true
        }
      }
      return cartProduct
    })

    if (updatedCart === false) {
      const idOfProductInCart = product.id + Date.now()
      cartWithAttributes.push({
        ...product,
        idOfProductInCart,
        selectedAttributes,
        count: 1,
      })
    }

    window.sessionStorage.setItem('cart', JSON.stringify(cartWithAttributes))
    setShowCartSuccessModal(true)
    this.props.setUpdatedCartToState(cartWithAttributes)
  }

  handleAddToCart = (product, setShowFailModal, setShowCartSuccessModal) => {
    if (!product.inStock) {
      return setShowFailModal(true)
    }

    let cart = []
    let cartInStorage = window.sessionStorage.getItem('cart')

    if (cartInStorage) {
      cart = JSON.parse(cartInStorage)
    }

    if (!cart.length) {
      this.createNewCart(cart, product, setShowCartSuccessModal)
    } else {
      this.updateExistingCart(cart, product, setShowCartSuccessModal)
    }
  }

  render() {
    const { showCartSuccessModal, showCartFailModal } = this.state
    const { selectedCurrency, product } = this.props
    const price = findSelectedPrice(selectedCurrency, product.prices)
    return (
      <ProductCardContainer>
        <Link className="link" to={`/pages/product-display-page/${product.id}`}>
          <div className="product-card-img">
            <div className="product-card-img-box">
              <img
                alt="ecommerce shop product displayed"
                src={product.gallery[0]}
                className="img"
              />
            </div>
          </div>
          <div className="content">
            <p className="title">
              {product.brand} {product.name}
            </p>
            <p className="price">
              {price[0].currency.symbol} {price[0].amount}
            </p>
          </div>
        </Link>
        <div
          className="trolley-container"
          onClick={() =>
            this.handleAddToCart(
              product,
              this.setShowFailModal,
              this.setShowCartSuccessModal,
            )
          }
        >
          <ShoppingCart color={'white'} height={20} width={20} />
        </div>
        {!product.inStock && (
          <div className="out-of-stock-box">
            <p className="out-of-stock">OUT OF STOCK</p>
          </div>
        )}
        <>
          {showCartFailModal ? (
            <DisplayCartFailModal
              name={product.name}
              showCartFailModal={showCartFailModal}
              setShowFailModal={this.setShowFailModal}
            />
          ) : (
            <></>
          )}
        </>
        {showCartSuccessModal ? (
          <DisplayCartSuccessModal
            name={product.name}
            showCartSuccessModal={showCartSuccessModal}
            setShowCartSuccessModal={this.setShowCartSuccessModal}
          />
        ) : (
          <></>
        )}
      </ProductCardContainer>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUpdatedCartToState: (cart) => dispatch(setUpdatedCartToState(cart)),
  }
}

export default connect(null, mapDispatchToProps)(ProductCard)
