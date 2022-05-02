import styled from 'styled-components'

export const OverlayButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .view-button {
    color: var(--clr-text);
    font-family: var(--ff-primary);
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 16px 32px;
    width: 140px;
    height: 43px;
    background: var(--clr-white);
    border: 1px solid var(--clr-text);
    box-sizing: border-box;
    text-transform: uppercase;
    cursor: pointer;
  }
  .checkout-button {
    color: var(--clr-white);
    border: 1px solid var(--clr-primary);
    background-color: var(--clr-primary);
    font-family: var(--ff-primary);
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 16px 32px;
    width: 140px;
    height: 43px;
    text-transform: uppercase;
    cursor: pointer;
    box-sizing: border-box;
  }
`
