import React, { Component } from 'react'
import { QUERY_PRODUCTS } from '../../graphql/productQueries'
import ProductList from './product_list/ProductList'
import Loader from '../../components/loader/Loader'
import { ProductListPageContainer } from './style'
import ErrorPage from '../error_page/ErrorPage'
import PageTitle from '../../components/page_title/PageTitle'
import PageTitleWrapper from '../../components/page_title_wrapper/PageTitleWrapper'
import { connect } from 'react-redux'
import { getProducts } from '../../redux/actions/productsAction'

class ProductListPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [],
    }
  }

  componentDidMount() {
    this.props.fetchProducts(QUERY_PRODUCTS, this.props.selectedCategory)
  }

  componentDidUpdate(prevProps) {
    if (this.props.products !== prevProps.products) {
      this.setState({ products: this.props.products })
    }
  }

  render() {
    const {
      selectedCategory,
      products,
      selectedCurrency,
      products_isLoading,
    } = this.props
    if (products_isLoading) {
      return <Loader />
    }
    if (products.length) {
      return (
        <ProductListPageContainer>
          <PageTitleWrapper>
            <PageTitle pageTitle={selectedCategory} />
          </PageTitleWrapper>
          <ProductList
            products={products}
            selectedCurrency={selectedCurrency}
          />
        </ProductListPageContainer>
      )
    }
    return <ErrorPage errorMessage={'Error encountered while fetching data'} />
  }
}

const mapStateToProps = (state) => {
  return {
    selectedCategory: state.categories.selectedCategory,
    selectedCurrency: state.currencies.selectedCurrency,
    products_isLoading: state.products.products_isLoading,
    products: state.products.products,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: (query, variable) => dispatch(getProducts(query, variable)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage)
