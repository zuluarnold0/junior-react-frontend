import styled from 'styled-components'

export const OrderSummaryContainer = styled.div`
  border-top: 1px solid #e5e5e5;
  padding: 32px 0;
  .item-box {
    margin-bottom: 8px;
  }

  .item-key {
    font-family: var(--ff-primary);
    font-size: 24px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0em;
    text-transform: capitalize;
    color: var(--clr-text);
  }

  .item-value {
    font-family: var(--ff-primary);
    font-size: 24px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0em;
    color: var(--clr-text);
  }

  .total-box {
    margin: 16px 0;
  }

  .total-key {
    font-family: var(--ff-primary);
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0em;
    color: var(--clr-text);
    text-transform: capitalize;
    font-weight: 500;
    margin-right: 16px;
  }

  .total-value {
    font-family: var(--ff-primary);
    font-size: 24px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0em;
    color: var(--clr-text);
  }

  .order-button {
    width: 279px;
    height: 43px;
    border: none;
    outline: none;
    color: var(--clr-white);
    background-color: var(--clr-primary);
    font-family: var(--ff-primary);
    text-transform: uppercase;
    font-style: normal;
    font-weight: 600;
    cursor: pointer;
    font-size: 14px;
    line-height: 17px;
    text-transform: uppercase;
  }
`
