import {
  GET_CURRENCIES_FAILURE,
  GET_CURRENCIES_SUCCESS,
  GET_CURRENCIES_ISLOADING,
  SET_SELECTED_CURRENCY,
} from '../types/currencyTypes'

const initCurrencyState = {
  currencies: [],
  currencies_message: '',
  currencies_isLoading: true,
  selectedCurrency: 'USD',
}

export const currenciesReducer = (state = initCurrencyState, action) => {
  switch (action.type) {
    case GET_CURRENCIES_ISLOADING:
      return {
        ...state,
        currencies_isLoading: action.payload,
      }
    case GET_CURRENCIES_SUCCESS:
      return {
        ...state,
        currencies: action.payload.currencies,
        currencies_isLoading: action.payload.isLoading,
      }
    case GET_CURRENCIES_FAILURE:
      return {
        ...state,
        currencies_message: action.payload.message,
        currencies_isLoading: action.payload.isLoading,
      }
    case SET_SELECTED_CURRENCY:
      return {
        ...state,
        selectedCurrency: action.payload,
      }
    default:
      return state
  }
}
