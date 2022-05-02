import {
  SET_SELECTED_CATEGORY,
  GET_CATEGORIES_FAILURE,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_ISLOADING,
} from '../types/categoryTypes'

const initCategoriesState = {
  categories: [],
  selectedCategory: '',
  categories_message: '',
  categories_isLoading: false,
}

export const categoriesReducer = (state = initCategoriesState, action) => {
  switch (action.type) {
    case GET_CATEGORIES_ISLOADING:
      return {
        ...state,
        categories_isLoading: action.payload,
      }
    case GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.payload.categories,
        categories_isLoading: action.payload.isLoading,
      }
    case GET_CATEGORIES_FAILURE:
      return {
        ...state,
        categories_message: action.payload.message,
        categories_isLoading: action.payload.isLoading,
      }

    case SET_SELECTED_CATEGORY:
      return {
        ...state,
        selectedCategory: action.payload,
      }
    default:
      return state
  }
}
