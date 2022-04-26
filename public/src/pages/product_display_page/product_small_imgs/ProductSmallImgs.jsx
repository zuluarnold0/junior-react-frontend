import React, { Component } from 'react'
import { ProductSmallImgsContainer } from './style'

export class ProductSmallImgs extends Component {
  mapProduct = ({ gallery }) => {
    return (
      gallery &&
      gallery.map((item) => {
        return (
          <div
            key={item}
            className="small-img-box"
            onClick={() => this.props.viewImage(item)}
          >
            <img
              alt="ecommerce shop product"
              src={item}
              className="small-img"
            />
          </div>
        )
      })
    )
  }

  render() {
    return (
      <ProductSmallImgsContainer>
        {this.mapProduct(this.props.product)}
      </ProductSmallImgsContainer>
    )
  }
}

export default ProductSmallImgs
