import styled from 'styled-components'

export const CartContainer = styled.div`
  cursor: pointer;
  height: 18px;
  padding: 5px 11px;
  .shopping-cart-box {
    position: relative;
  }
  .cart-count {
    position: absolute;
    top: -8px;
    right: -10px;
    width: 18px;
    height: 18px;
    border-radius: 50px;
    background-color: var(--clr-text);
    color: var(--clr-white);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
  }
  @media only screen and (max-width: 700px) {
    height: 16px;
    padding: 5px;
  }
`

export const ModalContainer = styled.div`
  display: block;
  position: absolute;
  z-index: 1;
  margin-top: 80px;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  cursor: pointer;
  min-height: calc(100vh - 80px);
  background-color: rgba(0, 0, 0, 0.2);
  .modal-container-wrapper {
    margin: auto;
    width: var(--container-width);
    display: flex;
    justify-content: flex-end;
  }
`

export const ShoppinCartTopRightContainer = styled.div`
  display: block;
  position: absolute;
  background-color: #f9f9f9;
  top: 10px;
  width: 250px;
  padding: 10px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 2;
  .shopping-title-box {
    margin-bottom: 30px;
  }
  .shopping-title {
    font-family: var(--ff-primary);
    font-size: 14px;
    font-weight: 600;
    color: var(--clr-text);
    margin-right: 5px;
  }
  .shopping-title-count {
    font-family: var(--ff-primary);
    font-size: 14px;
    font-weight: 500;
    color: var(--clr-text);
  }

  .cart-buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .view-button {
    width: 120px;
    height: 40px;
    color: var(--clr-text);
    border: 1px solid var(--clr-text);
    outline: none;
    font-size: 12px;
    font-family: var(--ff-primary);
    text-transform: uppercase;
    cursor: pointer;
  }
  .checkout-button {
    width: 120px;
    height: 40px;
    border: none;
    outline: none;
    font-size: 12px;
    color: var(--clr-white);
    border: 1px solid var(--clr-primary);
    background-color: var(--clr-primary);
    font-family: var(--ff-primary);
    text-transform: uppercase;
    cursor: pointer;
  }
`

export const NoProductsInCart = styled.div`
  text-align: center;
  padding-bottom: 30px;
  p {
    text-transform: uppercase;
    color: var(--clr-text);
    font-size: 13px;
    font-weight: 600;
    font-family: var(--ff-primary);
  }
`
