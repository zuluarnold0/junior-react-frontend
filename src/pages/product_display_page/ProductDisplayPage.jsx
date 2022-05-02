import React, { Component } from 'react'
import { QUERY_PRODUCT } from '../../graphql/productQueries'
import { client } from '../../graphql/client'
import { connect } from 'react-redux'
//import { getProduct } from '../../redux/actions/productsAction'
import Loader from '../../components/loader/Loader'
import { ProductDisplayPageContainer } from './style'
import ProductSmallImgs from './product_small_imgs/ProductSmallImgs'
import ProductBigImg from './product_big_img/ProductBigImg'
import ProductContent from './product_content/ProductContent'
import MessageModal from '../../components/message_modal/MessageModal'
import { setUpdatedCartToState } from '../../redux/actions/cartActions'
import ItemNotFound from '../../components/item_not_found/ItemNotFound'

class ProductDisplayPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      product: null,
      product_isLoading: false,
      error_message: '',
      displayedImg: '',
      stateAttributeArray: [],
      showCartFailModal: false,
      showCartSuccessModal: false,
    }
  }

  getProduct = async (query, variable) => {
    try {
      this.setState({ product_isLoading: true })

      const { data, error } = await client.query({
        query: query,
        variables: {
          id: variable,
        },
      })

      if (data.product) {
        this.setState({
          product_isLoading: false,
          product: data.product,
          displayedImg: data.product.gallery[0],
        })
      }

      if (error) {
        throw error
      }
    } catch (e) {
      this.setState({
        product_isLoading: false,
        error_message: 'Error encountered: ' + e,
      })
    }
  }

  componentDidMount() {
    this.getProduct(QUERY_PRODUCT, this.props.productId)
  }

  setShowFailModal = () => {
    this.setState({ showCartFailModal: true })
  }

  setShowCartSuccessModal = () => {
    this.setState({ showCartSuccessModal: true })
  }

  handleUpdatedCart = (cart) => {
    this.props.setUpdatedCartToState(cart)
  }

  viewImage = (selectedImage) => {
    this.setState({ displayedImg: selectedImage })
  }

  displayCartSuccessModal = (name) => {
    setTimeout(() => {
      this.state.showCartSuccessModal &&
        this.setState({ showCartSuccessModal: false })
    }, 1000)
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
    }, 1000)
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

  render() {
    const {
      displayedImg,
      showCartFailModal,
      showCartSuccessModal,
      product_isLoading,
      product,
    } = this.state
    const { selectedCurrency } = this.props

    if (product_isLoading) {
      return <Loader />
    }

    if (product) {
      return (
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
              setUpdatedCartToState={this.handleUpdatedCart}
            />
          </div>
          {showCartFailModal && this.displayCartFailModal(product.name)}
          {showCartSuccessModal && this.displayCartSuccessModal(product.name)}
        </ProductDisplayPageContainer>
      )
    }

    return <ItemNotFound message={'Product Not Found'}></ItemNotFound>
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    productId: ownProps.match.params.productId,
    selectedCurrency: state.currencies.selectedCurrency,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUpdatedCartToState: (cart) => dispatch(setUpdatedCartToState(cart)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDisplayPage)
