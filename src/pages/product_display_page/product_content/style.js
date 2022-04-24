import styled from 'styled-components'

export const ProductContentContainer = styled.div`
  width: 240px;
  @media only screen and (max-width: 1000px) {
    width: 200px;
  }
  @media only screen and (max-width: 800px) {
    width: 100%;
    padding: 20px 0;
  }
  .content-title {
    font-family: var(--ff-primary);
    font-style: normal;
    text-transform: capitalize;
    color: var(--clr-text);
    padding-bottom: 5px;
  }
  .content-subtitle {
    font-family: var(--ff-primary);
    font-style: normal;
    font-weight: 300;
    text-transform: capitalize;
    color: var(--clr-text);
    padding-bottom: 10px;
  }
  .content-heading {
    font-family: var(--ff-primary);
    text-transform: uppercase;
    font-weight: 600;
    font-size: 15px;
    color: var(--clr-text);
  }

  .price-container {
    margin: 10px 0;
  }
  .price-value {
    margin-top: 10px;
    font-size: 18px;
    font-weight: 600;
    font-family: var(--ff-primary);
    font-style: normal;
    color: var(--clr-text);
    @media only screen and (max-width: 1000px) {
      margin: 0 0 10px 0;
    }
  }
  .add-to-cart-button {
    width: 240px;
    height: 40px;
    border: none;
    outline: none;
    color: var(--clr-white);
    background-color: var(--clr-primary);
    font-family: var(--ff-primary);
    text-transform: uppercase;
    cursor: pointer;
    @media only screen and (max-width: 1000px) {
      width: 200px;
    }
    @media only screen and (max-width: 800px) {
      max-width: 240px;
    }
  }
  .description {
    padding-top: 20px;
    font-family: sans-serif;
    font-size: 12px;
    line-height: 18px;
  }
`
