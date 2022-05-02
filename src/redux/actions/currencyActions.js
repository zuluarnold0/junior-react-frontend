import { client } from '../../graphql/client'
import {
  GET_CURRENCIES_FAILURE,
  GET_CURRENCIES_SUCCESS,
  GET_CURRENCIES_ISLOADING,
  SET_SELECTED_CURRENCY,
} from '../types/currencyTypes'

export const setSelectedCurrency = (currency) => {
  return {
    type: SET_SELECTED_CURRENCY,
    payload: currency,
  }
}

export const getCurrencies = (query) => {
  return async (dispatch) => {
    try {
      dispatch({ type: GET_CURRENCIES_ISLOADING, payload: true })

      const res = await client.query({ query: query })

      dispatch({
        type: GET_CURRENCIES_SUCCESS,
        payload: { currencies: res.data.currencies, isLoading: false },
      })
    } catch (e) {
      dispatch({
        type: GET_CURRENCIES_FAILURE,
        payload: { message: 'Unable to GET currencies', isLoading: false },
      })
    }
  }
}
