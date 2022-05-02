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
    top: -12px;
    right: -10px;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    color: var(--clr-white);
    background-color: var(--clr-black);
    font-family: var(--ff-tertiary);
    font-size: 14px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media only screen and (max-width: 700px) {
    height: 16px;
    padding: 5px;
  }
`

export const ModalContainer = styled.div`
  display: block;
  position: fixed;
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
  top: 0;
  padding: 32px 16px;
  width: 325px;
  max-height: 577px;
  background: #ffffff;
  box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
  z-index: 2;
  .shopping-title-box {
    margin-bottom: 32px;
  }
  .shopping-title {
    font-family: var(--ff-primary);
    color: var(--clr-text);
    margin-right: 5px;
    font-size: 16px;
    font-weight: 700;
    line-height: 26px;
    letter-spacing: 0em;
  }
  .shopping-title-count {
    font-family: var(--ff-primary);
    font-size: 14px;
    font-weight: 500;
    color: var(--clr-text);
    font-size: 16px;
    font-weight: 500;
    line-height: 26px;
    letter-spacing: 0em;
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
