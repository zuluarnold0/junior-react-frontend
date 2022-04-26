import React, { Component } from 'react'
import { ProductBigImgContainer } from './style'

export class ProductBigImg extends Component {
  render() {
    return (
      <ProductBigImgContainer>
        <img
          alt="ecommerce shop product display"
          src={this.props.displayedImg}
          className="big-img"
        />
      </ProductBigImgContainer>
    )
  }
}

export default ProductBigImg
