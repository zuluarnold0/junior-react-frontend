import React, { Component } from 'react'

export class ChevronUp extends Component {
  render() {
    const { width, height } = this.props
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.024 5.928l-4.357 4.357-.62-.618L7.716 5h.618L13 9.667l-.619.618-4.357-4.357z"
        />
      </svg>
    )
  }
}

export default ChevronUp
