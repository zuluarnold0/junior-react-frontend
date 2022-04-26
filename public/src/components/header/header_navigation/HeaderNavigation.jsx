import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Navigation } from './style'

export class HeaderNavigation extends Component {
  setLinkClass = (selectedCategory, name) => {
    return selectedCategory.toLowerCase() === name.toLowerCase()
      ? 'selected'
      : 'text'
  }

  mapCategoriesNames = (categories, selectedCategory, setSelectedCategory) => {
    return (
      categories &&
      categories.map((name, i) => {
        return (
          <Link
            className="navigation-link"
            to={i === 0 ? '/' : `/${name}`}
            key={name}
            onClick={() => setSelectedCategory(name)}
          >
            <span className={this.setLinkClass(selectedCategory, name)}>
              {name}
            </span>
          </Link>
        )
      })
    )
  }
  render() {
    const { categories, selectedCategory, setSelectedCategory } = this.props
    return (
      <Navigation>
        {this.mapCategoriesNames(
          categories,
          selectedCategory,
          setSelectedCategory,
        )}
      </Navigation>
    )
  }
}

export default HeaderNavigation
