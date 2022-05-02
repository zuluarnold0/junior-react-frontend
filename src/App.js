import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './components/header/Header'
import {
  Home,
  ProductDisplayPage,
  Cart,
  ProductListPage,
  ErrorPage,
} from './pages'

export class App extends Component {
  mapRoutes = () => {
    return this.props.categories.map((item, i) => {
      return (
        <Route exact key={i} path={`/${item}`} component={ProductListPage} />
      )
    })
  }

  render() {
    const { categories_isLoading, selectedCategory } = this.props

    if (!selectedCategory.length) {
      return (
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/pages/cart" component={Cart} />
            <Route
              exact
              path="/pages/product-display-page/:productId"
              component={ProductDisplayPage}
            />
          </Switch>
        </BrowserRouter>
      )
    }

    return (
      <BrowserRouter>
        <Header />
        {!categories_isLoading && (
          <Switch>
            {this.mapRoutes()}
            <Route exact path="/pages/cart" component={Cart} />
            <Route
              exact
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

const mapStateToProps = (state) => {
  return {
    categories: state.categories.categories,
    categories_isLoading: state.categories.categories_isLoading,
    selectedCategory: state.categories.selectedCategory,
  }
}

export default connect(mapStateToProps)(App)
