import React, { Component } from 'react'
import ProductCard from '../product_card/ProductCard'
import { ProductListContainer } from './style'

class ProductList extends Component {
  render() {
    const { products, selectedCurrency } = this.props
    return (
      <ProductListContainer>
        {products.map((product) => {
          return (
            <ProductCard
              product={product}
              key={product.id}
              selectedCurrency={selectedCurrency}
            />
          )
        })}
      </ProductListContainer>
    )
  }
}

export default ProductList
