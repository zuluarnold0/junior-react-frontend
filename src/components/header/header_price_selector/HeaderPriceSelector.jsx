import React, { Component, Fragment } from 'react'
import { PriceContainer, PriceDropDownContent, Currency } from './style'
import ChevronUp from '../../../assets/svg/ChevronUp'
import ChevronDown from '../../../assets/svg/ChevronDown'

class HeaderPriceSelector extends Component {
  showSelectedCurrencies = () => {
    const { currencies, selectedCurrency } = this.props
    return currencies.map((currency) => {
      return (
        <Fragment key={currency.symbol}>
          {currency.label.toLowerCase() === selectedCurrency.toLowerCase() && (
            <p>{currency.symbol}</p>
          )}
        </Fragment>
      )
    })
  }

  setSelectedCurrency = (label) => {
    this.props.setSelectedCurrency(label)
    this.props.setDropDown('none')
    this.props.clearDropdown()
  }

  setCurrencyClass = (currency) => {
    const { selectedCurrency } = this.props
    return selectedCurrency === currency.label ? 'selected-link' : 'text-link'
  }

  mapCurrencies = () => {
    const { currencies } = this.props
    return currencies.map((currency) => {
      return (
        <Currency
          key={currency.symbol}
          onClick={() => this.setSelectedCurrency(currency.label)}
        >
          <div className={this.setCurrencyClass(currency)}>
            {currency.symbol} {currency.label}
          </div>
        </Currency>
      )
    })
  }

  render() {
    return (
      <PriceContainer>
        {this.showSelectedCurrencies()}
        <div>
          <div className="chevron-up">
            <ChevronUp height={10} width={18} />
          </div>
          <div className="chevron-down">
            <ChevronDown height={10} width={18} />
          </div>
        </div>
        <PriceDropDownContent style={{ display: this.props.displayDropdown }}>
          {this.mapCurrencies()}
        </PriceDropDownContent>
      </PriceContainer>
    )
  }
}

export default HeaderPriceSelector
