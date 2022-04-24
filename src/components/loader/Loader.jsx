import React, { Component } from 'react'
import './loader.css'

export class Loader extends Component {
  render() {
    return (
      <div id="dot-loader">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    )
  }
}

export default Loader
