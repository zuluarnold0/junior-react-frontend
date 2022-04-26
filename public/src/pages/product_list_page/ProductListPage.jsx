import React, { Component } from 'react'
import { gql } from '@apollo/client'
import { graphql } from '@apollo/client/react/hoc'
import Header from '../../components/header/Header'
import ProductList from './product_list/ProductList'
import Loader from '../../components/loader/Loader'
import { ProductListPageContainer } from './style'
import { setCategoryNames, setProducts, findPath } from '../../helpers'
import ErrorPage from '../error_page/ErrorPage'
import PageTitle from '../../components/page_title/PageTitle'

const QUERY_CATEGORIES_CURRENCIES = gql`
  query GetCategoriesAndCurrencies {
    currencies {
      label
      symbol
    }
    categories {
      name
      products {
        id
        name
        inStock
        gallery
        description
        category
        brand
        attributes {
          id
          name
          type
          items {
            id
            displayValue
            value
          }
        }
        prices {
          currency {
            label
            symbol
          }
          amount
        }
      }
    }
  }
`

class ProductListPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: [],
      categoriesNames: [],
      currencies: [],
      selectedCategory: '',
      selectedCurrency: 'USD',
      products: [],
      cart: [],
    }
  }

  setSelectedCategory = (name) => {
    const currentProducts = setProducts(this.state.categories, name)
    this.setState({
      selectedCategory: name,
      products: currentProducts[0].products,
    })
  }

  setDataToState = ({ categories, currencies }, path) => {
    const currentProducts = setProducts(categories, path)
    this.setState({
      categories,
      currencies,
      selectedCategory: path,
      categoriesNames: setCategoryNames(categories),
      products: currentProducts[0].products,
    })
  }

  loadData = (props) => {
    const mappedCategories = setCategoryNames(props.data.categories)
    const path = findPath(props.match.path, mappedCategories[0])
    this.setDataToState(props.data, path)
  }

  componentDidMount() {
    const cartInStorage = window.sessionStorage.getItem('cart')
    if (cartInStorage) {
      const cartArr = JSON.parse(cartInStorage)
      this.setState({ cart: cartArr })
    }

    if (!this.props.data.loading) {
      this.loadData(this.props)
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.data !== prevProps.data) {
      this.loadData(this.props)
    }
  }

  setSelectedCurrency = (label) => {
    this.setState({ selectedCurrency: label })
  }

  setUpdatedCartToState = (updatedCart) => {
    this.setState({ cart: updatedCart })
  }

  render() {
    const {
      products,
      categories,
      currencies,
      selectedCurrency,
      selectedCategory,
      categoriesNames,
      cart,
    } = this.state

    if (this.props.data.loading) {
      return <Loader />
    }

    if (categories.length && currencies.length) {
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
          <ProductListPageContainer>
            <PageTitle pageTitle={selectedCategory} />
            <ProductList
              setUpdatedCartToState={this.setUpdatedCartToState}
              products={products}
              selectedCurrency={selectedCurrency}
            />
          </ProductListPageContainer>
        </>
      )
    }
    return <ErrorPage errorMessage={'Error encountered while fetching data'} />
  }
}

export default graphql(QUERY_CATEGORIES_CURRENCIES)(ProductListPage)
