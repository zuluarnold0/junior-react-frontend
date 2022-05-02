import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Navigation } from './style'
import { QUERY_CATEGORY_NAMES } from '../../../graphql/categoryQueries'
import {
  setSelectedCategory,
  getCategoriesNames,
} from '../../../redux/actions/categoriesAction'

export class HeaderNavigation extends Component {
  componentDidMount() {
    this.props.fetchCategoryNames(QUERY_CATEGORY_NAMES)
  }

  checkIfSelected = (name) =>
    this.props.selectedCategory.toLowerCase() === name.toLowerCase()

  setLinkClass = (name) => (this.checkIfSelected(name) ? 'selected' : 'text')

  mapCategoriesNames = () => {
    return this.props.categories.map((name, i) => {
      return (
        <Link
          className="navigation-link"
          to={`/${name}`}
          key={i}
          onClick={() => this.props.setSelectedCategory(name)}
        >
          <span className={this.setLinkClass(name)}>{name}</span>
        </Link>
      )
    })
  }

  render() {
    if (this.props.categories_isLoading) return <></>

    return <Navigation>{this.mapCategoriesNames()}</Navigation>
  }
}

const mapStateToProps = (state) => {
  return {
    selectedCategory: state.categories.selectedCategory,
    categories: state.categories.categories,
    categories_isLoading: state.categories.categories_isLoading,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSelectedCategory: (name) => dispatch(setSelectedCategory(name)),
    fetchCategoryNames: (query) => dispatch(getCategoriesNames(query)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderNavigation)
