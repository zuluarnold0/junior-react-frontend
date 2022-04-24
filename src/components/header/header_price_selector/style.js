import styled from 'styled-components'

export const PriceModalContainer = styled.div`
  display: block;
  position: absolute;
  z-index: 1;
  margin-top: 60px;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  cursor: pointer;
  min-height: calc(100vh - 80px);
  .price-modal-wrapper {
    margin: auto;
    width: var(--container-width);
    display: flex;
    justify-content: flex-end;
  }
`

export const PriceDropDownContent = styled.div`
  display: block;
  position: absolute;
  background-color: #f9f9f9;
  max-width: 100px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 2;
`

export const PriceContainer = styled.div`
  font-family: var(--ff-primary);
  font-size: 18px;
  font-weight: 500;
  color: var(--clr-text);
  padding: 5px 11px;
  cursor: pointer;
  display: flex;
  @media only screen and (max-width: 700px) {
    font-size: 12px;
    padding: 5px;
  }
`
export const Currency = styled.div`
  font-family: var(--ff-primary);
  font-size: 16px;
  font-weight: 500;
  display: block;
  .selected-currency {
    color: #fff;
    background-color: var(--clr-primary);
    padding: 12px 16px;
  }
  .text-currency {
    color: var(--clr-text);
    padding: 12px 16px;
  }
  &:hover {
    background-color: #f1f1f1;
  }
`
