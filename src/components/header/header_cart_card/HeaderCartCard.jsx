import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  handleQuantityDecrease,
  handleQuantityIncrease,
  handleRemoveFromCart,
} from '../../../helpers'
import {
  HeaderCartCardContainer,
  AttributesContainer,
  SwatchAttributeContainer,
  SwatchAttribute,
} from './style'
import { setUpdatedCartToState } from '../../../redux/actions/cartActions'
import RemoveFromCartModal from '../../../components/remove_item_from_cart/RemoveItemFromCart'

class HeaderCartCard extends Component {
  state = {
    deleteItem: false,
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
    const { product } = this.props
    return product.attributes.map((attribute, i) => {
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
    handleRemoveFromCart(
      this.props.product.idOfProductInCart,
      this.props.setUpdatedCartToState,
      this.showDeleteModal,
    )
  }

  render() {
    const { product, selectPrice, setUpdatedCartToState } = this.props
    return (
      <>
        <HeaderCartCardContainer>
          <div className="content-container">
            <h2 className="content-title">{product.brand}</h2>
            <h2 className="content-title">{product.name}</h2>
            <p className="price-value">
              {selectPrice.currency.symbol} {selectPrice.amount.toFixed(2)}
            </p>
            {this.displayAttributes()}
          </div>
          <div className="img-container">
            <div className="action-container">
              <div
                className="action-add"
                onClick={(e) =>
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
            <div className="small-img-box">
              <img
                alt="ecommerce shopping product displayed"
                src={product.gallery[0]}
                className="small-img"
              />
            </div>
          </div>
        </HeaderCartCardContainer>
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

const mapDispatchToProps = (dispatch) => {
  return {
    setUpdatedCartToState: (cart) => dispatch(setUpdatedCartToState(cart)),
  }
}

export default connect(null, mapDispatchToProps)(HeaderCartCard)
