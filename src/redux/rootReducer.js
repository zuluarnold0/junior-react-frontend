import { combineReducers } from 'redux'
import {
  cartReducer,
  categoriesReducer,
  productsReducer,
  currenciesReducer,
} from './reducers'

export const rootReducer = combineReducers({
  cart: cartReducer,
  categories: categoriesReducer,
  products: productsReducer,
  currencies: currenciesReducer,
})
