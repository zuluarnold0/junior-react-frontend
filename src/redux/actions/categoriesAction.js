import { client } from '../../graphql/client'
import { getCategoryNames } from '../../helpers'
import {
  SET_SELECTED_CATEGORY,
  GET_CATEGORIES_FAILURE,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_ISLOADING,
} from '../types/categoryTypes'

// const saveCategoriesInSession = (categories) => {
//   window.sessionStorage.setItem('categories', JSON.stringify(categories))
// }

export const setSelectedCategory = (category) => {
  return {
    type: SET_SELECTED_CATEGORY,
    payload: category,
  }
}

export const getCategoriesNames = (query) => {
  return async (dispatch) => {
    try {
      dispatch({ type: GET_CATEGORIES_ISLOADING, payload: true })

      const res = await client.query({ query: query })

      let categories = []
      if (res.data.categories) {
        categories = getCategoryNames(res.data.categories)
        //saveCategoriesInSession(categories)
      }

      dispatch({
        type: GET_CATEGORIES_SUCCESS,
        payload: { categories: categories, isLoading: false },
      })
    } catch (e) {
      dispatch({
        type: GET_CATEGORIES_FAILURE,
        payload: { message: 'Unable to GET categories', isLoading: false },
      })
    }
  }
}
