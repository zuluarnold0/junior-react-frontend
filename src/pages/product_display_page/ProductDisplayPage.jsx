import React, { Component } from 'react'
import { gql } from '@apollo/client'
import { graphql } from '@apollo/client/react/hoc'
import Header from '../../components/header/Header'
import { ProductDisplayPageContainer } from './style'
import MessageModal from '../../components/message_modal/MessageModal'
import { setCategoryNames } from '../../helpers'
import Loader from '../../components/loader/Loader'
import ErrorPage from '../error_page/ErrorPage'
import ItemNotFound from '../../components/item_not_found/ItemNotFound'
import ProductSmallImgs from './product_small_imgs/ProductSmallImgs'
import ProductBigImg from './product_big_img/ProductBigImg'
import ProductContent from './product_content/ProductContent'

const QUERY_SINGLE_PRODUCT = gql`
  query getSingleProduct($id: String!) {
    product(id: $id) {
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
    currencies {
      label
      symbol
    }
    categories {
      name
    }
  }
`

class ProductDisplayPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: [],
      product: null,
      displayedImg: '',
      categoriesNames: [],
      currencies: [],
      selectedCategory: 'all',
      selectedCurrency: 'USD',
      stateAttributeArray: [],
      showCartFailModal: false,
      showCartSuccessModal: false,
      cart: [],
    }
  }

  setDataToState = ({ categories, currencies, product }) => {
    const firstImage = product ? product.gallery[0] : null
    this.setState({
      categories,
      currencies: currencies,
      categoriesNames: setCategoryNames(categories),
      displayedImg: firstImage,
      product,
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

  viewImage = (selectedImage) => {
    this.setState({ displayedImg: selectedImage })
  }

  displayCartSuccessModal = (name) => {
    setTimeout(() => {
      this.state.showCartSuccessModal &&
        this.setState({ showCartSuccessModal: false })
    }, 3000)
    return (
      <MessageModal>
        <div className="success-modal-content">
          <span className="message-modal-name">{name}</span>
          <span className="message-modal-text">
            {' was added to cart successfully'}
          </span>
        </div>
      </MessageModal>
    )
  }

  displayCartFailModal = (name) => {
    setTimeout(() => {
      this.state.showCartFailModal &&
        this.setState({ showCartFailModal: false })
    }, 3000)
    return (
      <MessageModal>
        <div className="fail-modal-content">
          <span className="message-modal-name">{name}</span>
          <span className="message-modal-text">
            {' is currently unavailable'}
          </span>
        </div>
      </MessageModal>
    )
  }

  setShowFailModal = () => {
    this.setState({ showCartFailModal: true })
  }

  setShowCartSuccessModal = () => {
    this.setState({ showCartSuccessModal: true })
  }

  render() {
    const {
      product,
      displayedImg,
      currencies,
      selectedCurrency,
      selectedCategory,
      categoriesNames,
      cart,
      showCartSuccessModal,
      showCartFailModal,
      categories,
    } = this.state

    if (this.props.data.loading) {
      return <Loader />
    }

    if (!categories.length && !currencies.length) {
      return (
        <ErrorPage errorMessage={'Error encountered while fetching data'} />
      )
    }

    if (!product && !this.props.data.loading) {
      return (
        <>
          <Header
            cart={cart}
            setUpdatedCartToState={this.setUpdatedCartToState}
            currencies={currencies}
            categories={categoriesNames}
            selectedCategory={selectedCategory}
            setSelectedCategory={this.setSelectedCategory}
            selectedCurrency={selectedCurrency}
            setSelectedCurrency={this.setSelectedCurrency}
          />
          <ItemNotFound message={'Product Not Found'}></ItemNotFound>
        </>
      )
    }

    if (product) {
      return (
        <>
          <Header
            cart={cart}
            setUpdatedCartToState={this.setUpdatedCartToState}
            currencies={currencies}
            categories={categoriesNames}
            selectedCategory={selectedCategory}
            setSelectedCategory={this.setSelectedCategory}
            selectedCurrency={selectedCurrency}
            setSelectedCurrency={this.setSelectedCurrency}
          />
          <ProductDisplayPageContainer>
            <div className="product-display-page">
              <ProductSmallImgs product={product} viewImage={this.viewImage} />
              <ProductBigImg displayedImg={displayedImg} />
              <ProductContent
                product={product}
                selectedCurrency={selectedCurrency}
                setShowFailModal={this.setShowFailModal}
                setShowCartSuccessModal={this.setShowCartSuccessModal}
                setShowWarningModal={this.setShowWarningModal}
                setUpdatedCartToState={this.setUpdatedCartToState}
              />
            </div>
            <>
              {showCartFailModal ? (
                <>{this.displayCartFailModal(product.name)}</>
              ) : (
                <></>
              )}
            </>
            {showCartSuccessModal ? (
              <>{this.displayCartSuccessModal(product.name)}</>
            ) : (
              <></>
            )}
          </ProductDisplayPageContainer>
        </>
      )
    }
  }
}

export default graphql(QUERY_SINGLE_PRODUCT, {
  options: (ownProps) => ({
    variables: {
      id: ownProps.match.params.productId,
    },
  }),
})(ProductDisplayPage)
