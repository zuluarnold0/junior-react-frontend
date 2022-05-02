import {
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ISLOADING,
} from '../types/productTypes'

const initProductsState = {
  products: [],
  products_message: '',
  products_isLoading: true,
}

export const productsReducer = (state = initProductsState, action) => {
  switch (action.type) {
    case GET_PRODUCTS_ISLOADING:
      return {
        ...state,
        products_isLoading: action.payload,
      }
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload.products,
        products_isLoading: action.payload.isLoading,
      }
    case GET_PRODUCTS_FAILURE:
      return {
        ...state,
        products_message: action.payload.message,
        products_isLoading: action.payload.isLoading,
      }

    default:
      return state
  }
}
