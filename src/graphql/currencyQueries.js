import { gql } from '@apollo/client'

export const QUERY_CURRENCIES = gql`
  query GetCurrencies {
    currencies {
      label
      symbol
    }
  }
`
