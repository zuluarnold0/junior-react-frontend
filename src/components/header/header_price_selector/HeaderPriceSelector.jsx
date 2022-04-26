import React, { Component, Fragment } from 'react'
import ChevronUp from '../../../assets/svg/ChevronUp'
import ChevronDown from '../../../assets/svg/ChevronDown'
import {
  PriceContainer,
  PriceDropDownContent,
  Currency,
  PriceModalContainer,
} from './style'

class HeaderPriceSelector extends Component {
  state = {
    showCurrencyDropdown: false,
  }

  showSelectedCurrencies = (currencies, selectedCurrency) => {
    return (
      currencies &&
      currencies.map((currency) => {
        return (
          <Fragment key={currency.symbol}>
            {currency.label.toLowerCase() ===
              selectedCurrency.toLowerCase() && <p>{currency.symbol}</p>}
          </Fragment>
        )
      })
    )
  }

  mapCurrencies = (currencies, selectedCurrency, setSelectedCurrency) => {
    return (
      currencies &&
      currencies.map((currency) => {
        return (
          <Currency
            key={currency.symbol}
            onClick={() => setSelectedCurrency(currency.label)}
          >
            <p
              className={
                selectedCurrency === currency.label
                  ? 'selected-currency'
                  : 'text-currency'
              }
            >
              {currency.symbol} {currency.label}
            </p>
          </Currency>
        )
      })
    )
  }

  togglePriceModal = (e) => {
    this.setState({ showCurrencyDropdown: true })

    if (e.target.classList.contains('backdrop')) {
      this.setState({ showCurrencyDropdown: false })
    }
  }

  render() {
    const { currencies, selectedCurrency, setSelectedCurrency } = this.props
    return (
      <PriceContainer onClick={(e) => this.togglePriceModal(e)}>
        {this.showSelectedCurrencies(currencies, selectedCurrency)}
        <div>
          {this.state.showCurrencyDropdown ? (
            <ChevronUp height={10} width={18} />
          ) : (
            <ChevronDown height={10} width={18} />
          )}
        </div>
        {this.state.showCurrencyDropdown ? (
          <PriceModalContainer
            className="backdrop"
            onClick={(e) => this.togglePriceModal(e)}
          >
            <div className="price-modal-wrapper">
              <PriceDropDownContent>
                {this.mapCurrencies(
                  currencies,
                  selectedCurrency,
                  setSelectedCurrency,
                )}
              </PriceDropDownContent>
            </div>
          </PriceModalContainer>
        ) : (
          <></>
        )}
      </PriceContainer>
    )
  }
}

export default HeaderPriceSelector
