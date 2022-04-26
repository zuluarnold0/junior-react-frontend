import React, { Component } from 'react'
import { PageTitleHeader } from './style'

export class PageTitle extends Component {
  render() {
    const { pageTitle } = this.props
    return <PageTitleHeader>{pageTitle}</PageTitleHeader>
  }
}

export default PageTitle
