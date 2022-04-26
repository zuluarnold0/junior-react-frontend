import React, { Component } from 'react'
import { gql } from '@apollo/client'
import { graphql } from '@apollo/client/react/hoc'
import Header from '../../components/header/Header'
import CartList from './cart_list/CartList'
import { CartContainer } from './style'
import { setCategoryNames } from '../../helpers'
import PageTitle from '../../components/page_title/PageTitle'
import ItemNotFound from '../../components/item_not_found/ItemNotFound'

const QUERY_DATA = gql`
  query getSingleProduct {
    currencies {
      label
      symbol
    }
    categories {
      name
    }
  }
`

class Cart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categoriesNames: [],
      currencies: [],
      selectedCategory: 'all',
      selectedCurrency: 'USD',
      cart: [],
    }
  }

  setDataToState = ({ categories, currencies }) => {
    this.setState({
      currencies: currencies,
      categoriesNames: setCategoryNames(categories),
    })
  }

  componentDidMount() {
    const cartInStorage = window.sessionStorage.getItem('cart')
    if (cartInStorage) {
      const cartArr = JSON.parse(cartInStorage)
      this.setState({ cart: cartArr })
    }

    if (!this.props.data.loading) {
      this.setDataToState(this.props.data)
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.data !== prevProps.data) {
      this.setDataToState(this.props.data)
    }
  }

  setUpdatedCartToState = (updatedCart) => {
    this.setState({ cart: updatedCart })
  }

  setSelectedCategory = (name) => {
    this.setState({ selectedCategory: name })
  }

  setSelectedCurrency = (label) => {
    this.setState({ selectedCurrency: label })
  }

  render() {
    const {
      currencies,
      selectedCurrency,
      selectedCategory,
      categoriesNames,
      cart,
    } = this.state
    return (
      <>
        <Header
          cart={cart}
          currencies={currencies}
          categories={categoriesNames}
          selectedCategory={selectedCategory}
          setSelectedCategory={this.setSelectedCategory}
          selectedCurrency={selectedCurrency}
          setSelectedCurrency={this.setSelectedCurrency}
          setUpdatedCartToState={this.setUpdatedCartToState}
        />
        {cart.length ? (
          <CartContainer>
            <PageTitle pageTitle={'Cart'} />
            <CartList
              cart={cart}
              selectedCurrency={selectedCurrency}
              setUpdatedCartToState={this.setUpdatedCartToState}
            />
          </CartContainer>
        ) : (
          <ItemNotFound message={'Your cart is empty!'} />
        )}
      </>
    )
  }
}

export default graphql(QUERY_DATA)(Cart)
