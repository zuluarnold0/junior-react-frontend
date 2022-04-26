import React, { Component } from 'react'
import { HeaderCartCardContainer, SelectedSwatchAttribute } from './style'
import {
  handleQuantityDecrease,
  handleQuantityIncrease,
  handleRemoveFromCart,
} from '../../../helpers'
import RemoveFromCartModal from '../../../components/remove_item_from_cart/RemoveItemFromCart'

class HeaderCartCard extends Component {
  state = {
    deleteItem: false,
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
    const { product, selectPrice, setUpdatedCartToState } = this.props
    const price = selectPrice.amount * product.count
    return (
      <>
        <HeaderCartCardContainer>
          <div className="content-container">
            <h2 className="content-title">{product.name}</h2>
            <h2 className="content-subtitle">{product.brand}</h2>
            <p className="price-value">
              {selectPrice.currency.symbol} {price.toFixed(2)}
            </p>
            {this.displaySelectedAttributes()}
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

export default HeaderCartCard
