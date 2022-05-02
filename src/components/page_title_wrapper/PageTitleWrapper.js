import React, { Component } from 'react'
import { PageTitleContainer } from './style'

export class PageTitleWrapper extends Component {
  render() {
    return <PageTitleContainer>{this.props.children}</PageTitleContainer>
  }
}

export default PageTitleWrapper
