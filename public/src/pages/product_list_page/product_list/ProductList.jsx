import React, { Component } from 'react'
import ProductCard from '../product_card/ProductCard'
import { ProductListContainer } from './style'

class ProductList extends Component {
  mapProducts = (products, selectedCurrency, setUpdatedCartToState) => {
    return (
      products &&
      products.map((product) => {
        return (
          <ProductCard
            product={product}
            key={product.id}
            selectedCurrency={selectedCurrency}
            setUpdatedCartToState={setUpdatedCartToState}
          />
        )
      })
    )
  }

  render() {
    const { selectedCurrency, products, setUpdatedCartToState } = this.props
    return (
      <ProductListContainer>
        {this.mapProducts(products, selectedCurrency, setUpdatedCartToState)}
      </ProductListContainer>
    )
  }
}

export default ProductList
