import React, { Component } from 'react'
import { LogoContainer } from './style'
import LogoSvg from '../../assets/svg/LogoSvg'

export class Logo extends Component {
  render() {
    return (
      <LogoContainer>
        <div className="logo-icon">
          <LogoSvg />
        </div>
      </LogoContainer>
    )
  }
}

export default Logo
