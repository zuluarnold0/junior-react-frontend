import React, { Component } from 'react'
import HtmlParser from 'html-react-parser'
import { findSelectedPrice } from '../../../helpers'
import Attributes from './attributes/Attributes'
import { ProductContentContainer } from './style'

export class ProductContent extends Component {
  constructor(props) {
    super(props)
    this.state = {
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

  updateSelectedAttributes = (updatedAttribute) => {
    const { selectedAttributes } = this.state
    let filterAttributes = selectedAttributes.filter((attribute) => {
      return attribute.attributeName !== updatedAttribute.attributeName
    })
    filterAttributes.push({
      attributeName: updatedAttribute.attributeName,
      itemName: updatedAttribute.itemName,
      itemType: updatedAttribute.itemType,
    })

    this.setState({ selectedAttributes: filterAttributes })
  }

  createNewCart = (
    cart,
    product,
    setUpdatedCartToState,
    setShowCartSuccessModal,
  ) => {
    const { selectedAttributes } = this.state
    const idOfProductInCart = product.id + Date.now()
    cart.push({ ...product, idOfProductInCart, selectedAttributes, count: 1 })
    window.sessionStorage.setItem('cart', JSON.stringify(cart))
    setShowCartSuccessModal()
    setUpdatedCartToState(cart)
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

  updateExistingCart = (
    cart,
    product,
    setUpdatedCartToState,
    setShowCartSuccessModal,
  ) => {
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
    setShowCartSuccessModal()
    setUpdatedCartToState(cartWithAttributes)
  }

  handleAddToCart = (
    product,
    setShowFailModal,
    setShowCartSuccessModal,
    setUpdatedCartToState,
  ) => {
    if (!product.inStock) {
      return setShowFailModal()
    }

    let cart = []
    let cartInStorage = window.sessionStorage.getItem('cart')

    if (cartInStorage) {
      cart = JSON.parse(cartInStorage)
    }

    if (!cart.length) {
      this.createNewCart(
        cart,
        product,
        setUpdatedCartToState,
        setShowCartSuccessModal,
      )
    } else {
      this.updateExistingCart(
        cart,
        product,
        setUpdatedCartToState,
        setShowCartSuccessModal,
      )
    }
  }

  render() {
    const {
      product,
      selectedCurrency,
      setShowFailModal,
      setShowCartSuccessModal,
      setUpdatedCartToState,
    } = this.props
    const price = findSelectedPrice(selectedCurrency, product.prices)
    const { selectedAttributes } = this.state

    return (
      <ProductContentContainer>
        <h2 className="content-title">{product.brand}</h2>
        <h2 className="content-subtitle">{product.name}</h2>
        <Attributes
          attributes={product.attributes}
          selectedAttributes={selectedAttributes}
          updateSelectedAttributes={this.updateSelectedAttributes}
        />
        <div className="price-container">
          <h5 className="content-heading">price:</h5>
          <p className="price-value">
            {price[0].currency.symbol} {price[0].amount}
          </p>
        </div>
        <button
          className="add-to-cart-button"
          onClick={() =>
            this.handleAddToCart(
              product,
              setShowFailModal,
              setShowCartSuccessModal,
              setUpdatedCartToState,
            )
          }
        >
          add to cart
        </button>
        <div className="description">{HtmlParser(product.description)}</div>
      </ProductContentContainer>
    )
  }
}

export default ProductContent
