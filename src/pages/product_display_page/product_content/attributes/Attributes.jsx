import React, { Component } from 'react'
import { AttributesContainer, SwatchAttribute } from './style'

class Attributes extends Component {
  displayAttributeItems = (attribute) => {
    const { items, type, name } = attribute
    const { selectedAttributes, updateSelectedAttributes } = this.props

    return (
      items &&
      items.map((item) => {
        const foundAttribute =
          selectedAttributes &&
          selectedAttributes.find((selected) => {
            return (
              selected.attributeName === name &&
              selected.itemName === item.displayValue
            )
          })

        return type.toLowerCase() !== 'swatch' ? (
          <div
            key={item.id}
            className={foundAttribute ? 'selected-size' : 'size'}
            onClick={() =>
              updateSelectedAttributes({
                attributeName: name,
                itemName: item.displayValue,
                itemType: type,
                itemValue: item.value,
              })
            }
          >
            {item.value}
          </div>
        ) : (
          <SwatchAttribute
            primary={item.value}
            key={item.id}
            className={foundAttribute ? 'selected-size' : ''}
            onClick={() =>
              updateSelectedAttributes({
                attributeName: name,
                itemName: item.displayValue,
                itemType: type,
                itemValue: item.value,
              })
            }
          ></SwatchAttribute>
        )
      })
    )
  }

  displayAttribute = () => {
    const { attributes } = this.props
    return (
      attributes &&
      attributes.map((attribute) => {
        return (
          <AttributesContainer key={attribute.id}>
            <h5 className="sizes-heading">{attribute.name}</h5>
            <div className="sizes-box">
              {this.displayAttributeItems(attribute)}
            </div>
          </AttributesContainer>
        )
      })
    )
  }
  render() {
    return <>{this.displayAttribute()}</>
  }
}

export default Attributes
