import { gql } from '@apollo/client'

export const QUERY_PRODUCT = gql`
  query getProduct($id: String!) {
    product(id: $id) {
      id
      name
      inStock
      gallery
      description
      category
      brand
      attributes {
        id
        name
        type
        items {
          id
          displayValue
          value
        }
      }
      prices {
        currency {
          label
          symbol
        }
        amount
      }
    }
    currencies {
      label
      symbol
    }
    categories {
      name
    }
  }
`

export const QUERY_PRODUCTS = gql`
  query getCategory($input: CategoryInput) {
    category(input: $input) {
      products {
        id
        name
        inStock
        gallery
        description
        category
        brand
        attributes {
          id
          name
          type
          items {
            id
            displayValue
            value
          }
        }
        prices {
          currency {
            label
            symbol
          }
          amount
        }
      }
    }
  }
`
