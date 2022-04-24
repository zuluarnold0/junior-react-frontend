import React, { Component } from 'react'

export class ShoppingCart extends Component {
  render() {
    const { color, width, height } = this.props
    return (
      <svg
        id="Layer_1"
        version="1.1"
        width={width}
        height={height}
        viewBox="0 0 64 64"
        xmlSpace="preserve"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g>
          <g id="Icon-Cart" transform="translate(76.000000, 478.000000)">
            <path
              fill={color}
              d="M-27.5-432.3h-30.3c-0.5,0-0.9-0.2-1.1-0.6c-0.3-0.4-0.3-0.9-0.1-1.3l2.6-6.6l-2.6-24.6h-8.4     v-2.8h9.6c0.7,0,1.3,0.5,1.4,1.2l2.8,26.1c0,0.2,0,0.4-0.1,0.7l-2,5h28.2V-432.3"
              id="Fill-110"
            />
            <path
              fill={color}
              d="M-54.7-439.2l-0.6-2.7l31.9-6.6v-11.3h-33v-2.8H-22c0.8,0,1.4,0.6,1.4,1.4v13.8     c0,0.7-0.5,1.2-1.1,1.3L-54.7-439.2"
              id="Fill-111"
            />
            <path
              fill={color}
              d="M-26.1-424c-3,0-5.5-2.5-5.5-5.5s2.5-5.5,5.5-5.5c3,0,5.5,2.5,5.5,5.5S-23.1-424-26.1-424     L-26.1-424z M-26.1-432.3c-1.5,0-2.8,1.2-2.8,2.8s1.2,2.8,2.8,2.8s2.8-1.2,2.8-2.8S-24.6-432.3-26.1-432.3L-26.1-432.3z"
              id="Fill-112"
            />
            <path
              fill={color}
              d="M-59.1-424c-3,0-5.5-2.5-5.5-5.5s2.5-5.5,5.5-5.5s5.5,2.5,5.5,5.5S-56.1-424-59.1-424     L-59.1-424z M-59.1-432.3c-1.5,0-2.8,1.2-2.8,2.8s1.2,2.8,2.8,2.8s2.8-1.2,2.8-2.8S-57.6-432.3-59.1-432.3L-59.1-432.3z"
              id="Fill-113"
            />
          </g>
        </g>
      </svg>
    )
  }
}

export default ShoppingCart