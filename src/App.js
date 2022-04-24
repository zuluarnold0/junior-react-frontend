import React from 'react'
import { gql } from '@apollo/client'
import { setCategoryNames } from './helpers'
import { graphql } from '@apollo/client/react/hoc'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ErrorPage, ProductDisplayPage, Cart, ProductListPage } from './pages'

const QUERY_CATEGORY_NAMES = gql`
  query GetCategoriesNames {
    categories {
      name
    }
  }
`

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      routeNames: [],
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.data !== prevProps.data) {
      const mappedCategories = setCategoryNames(this.props.data.categories)
      this.setState({ routeNames: mappedCategories })
    }
  }

  mapRoutes = () => {
    const { routeNames } = this.state
    return (
      routeNames &&
      routeNames.map((item, i) => {
        return (
          <Route
            exact
            key={item}
            path={i === 0 ? '/' : `/${item}`}
            component={ProductListPage}
          />
        )
      })
    )
  }
  render() {
    const { routeNames } = this.state
    return (
      <BrowserRouter>
        {routeNames.length && (
          <Switch>
            {this.mapRoutes()}
            <Route path="/pages/cart" component={Cart} />
            <Route
              path="/pages/product-display-page/:productId"
              component={ProductDisplayPage}
            />
            <Route component={ErrorPage} />
          </Switch>
        )}
      </BrowserRouter>
    )
  }
}

export default graphql(QUERY_CATEGORY_NAMES)(App)
