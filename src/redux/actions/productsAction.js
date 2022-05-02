import {
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ISLOADING,
} from '../types/productTypes'

import { client } from '../../graphql/client'

export const getProducts = (query, variable) => {
  return async (dispatch) => {
    try {
      dispatch({ type: GET_PRODUCTS_ISLOADING, payload: true })

      const { data, error } = await client.query({
        query: query,
        variables: {
          input: {
            title: variable,
          },
        },
      })

      if (data.category) {
        dispatch({
          type: GET_PRODUCTS_SUCCESS,
          payload: { products: data.category.products, isLoading: false },
        })
      }

      if (error) {
        throw error
      }
    } catch (e) {
      dispatch({
        type: GET_PRODUCTS_FAILURE,
        payload: { message: e, isLoading: false },
      })
    }
  }
}
