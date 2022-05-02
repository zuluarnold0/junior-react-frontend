import React, { Component } from 'react'
import { PageTitleHeader } from './style'

export class PageTitle extends Component {
  render() {
    return <PageTitleHeader>{this.props.pageTitle}</PageTitleHeader>
  }
}

export default PageTitle
