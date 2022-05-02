import styled from 'styled-components'

export const ProductContentContainer = styled.div`
  width: 292px;
  @media only screen and (max-width: 800px) {
    padding: 20px 0;
  }
  .content-title {
    font-family: var(--ff-primary);
    font-style: normal;
    text-transform: capitalize;
    color: var(--clr-text);
    font-weight: 600;
    font-size: 30px;
  }
  .content-subtitle {
    font-family: var(--ff-primary);
    font-style: normal;
    text-transform: capitalize;
    color: var(--clr-text);
    padding-bottom: 10px;
    font-weight: 400;
    font-size: 30px;
  }
  .content-heading {
    font-family: var(--ff-secondary);
    text-transform: uppercase;
    color: var(--clr-text);
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 18px;
  }

  .price-container {
    margin: 10px 0;
  }
  .price-value {
    margin: 10px 0 20px 0;
    font-family: var(--ff-primary);
    font-style: normal;
    color: var(--clr-text);
    font-weight: 700;
    font-size: 24px;
    line-height: 18px;
    @media only screen and (max-width: 1000px) {
      margin: 0 0 10px 0;
    }
  }
  .add-to-cart-button {
    width: 292px;
    height: 52px;
    border: none;
    outline: none;
    color: var(--clr-white);
    background-color: var(--clr-primary);
    font-family: var(--ff-primary);
    text-transform: uppercase;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    cursor: pointer;
    @media only screen and (max-width: 800px) {
      max-width: 240px;
    }
  }
  .description {
    margin-top: 40px;
    font-family: var(--ff-tertiary);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: var(--clr-text);
  }
`
