import {
  SET_UPDATED_CART,
  SET_ITEMS_IN_CART,
  SET_CART_TOTAL_PRICE,
} from '../types/cartTypes'

export const setUpdatedCartToState = (cart) => {
  return {
    type: SET_UPDATED_CART,
    payload: cart,
  }
}

export const setItemsInCart = (total) => {
  return {
    type: SET_ITEMS_IN_CART,
    payload: total,
  }
}

export const setCartTotalPrice = (totalPrice, symbol) => {
  return {
    type: SET_CART_TOTAL_PRICE,
    payload: { cartTotalPrice: totalPrice, symbol },
  }
}
