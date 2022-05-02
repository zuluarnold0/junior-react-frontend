//local imports
import {
  SET_UPDATED_CART,
  SET_ITEMS_IN_CART,
  SET_CART_TOTAL_PRICE,
} from '../types/cartTypes'

const initCartState = {
  cart: [],
  itemsInCart: 0,
  cartTotalPrice: 0,
  currencySymbol: '',
}

const cartInStorage = window.sessionStorage.getItem('cart')
if (cartInStorage) {
  const cart = JSON.parse(cartInStorage)
  initCartState.cart = cart
}

export const cartReducer = (state = initCartState, action) => {
  switch (action.type) {
    case SET_UPDATED_CART:
      return {
        ...state,
        cart: action.payload,
      }

    case SET_ITEMS_IN_CART:
      return {
        ...state,
        itemsInCart: action.payload,
      }

    case SET_CART_TOTAL_PRICE:
      return {
        ...state,
        cartTotalPrice: action.payload.cartTotalPrice,
        currencySymbol: action.payload.symbol,
      }
    default:
      return state
  }
}
