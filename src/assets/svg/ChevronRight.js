import React, { Component } from 'react'

export class ChevronRight extends Component {
  render() {
    const { color, width, height } = this.props
    return (
      <svg
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
      >
        <defs />
        <title />
        <g id="chevron-right">
          <line
            stroke={color}
            strokeLinecap="round"
            strokeWidth="2px"
            x1="21"
            x2="12"
            y1="16"
            y2="25"
          />
          <line
            stroke={color}
            strokeLinecap="round"
            strokeWidth="2px"
            x1="12"
            x2="21"
            y1="7"
            y2="16"
          />
        </g>
      </svg>
    )
  }
}

export default ChevronRight
