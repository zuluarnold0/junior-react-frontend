import { gql } from '@apollo/client'

export const QUERY_CATEGORY_NAMES = gql`
  query GetCategoriesNames {
    categories {
      name
    }
  }
`
