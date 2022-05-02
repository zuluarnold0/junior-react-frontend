import styled from 'styled-components'

export const PriceDropDownContent = styled.div`
  display: none;
  position: absolute;
  top: 0;
  transform: translate(-20px, 50px);
  background-color: var(--clr-white);
  width: 114px;
  padding: 12px 0;
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
  .chevron-up {
    display: block;
  }
  .chevron-down {
    display: none;
  }
  &:hover {
    .chevron-up {
      display: none;
    }
    .chevron-down {
      display: block;
    }
  }
  &:hover ${PriceDropDownContent} {
    display: block;
  }
  @media only screen and (max-width: 700px) {
    font-size: 12px;
    padding: 5px;
  }
`
export const Currency = styled.div`
  font-family: var(--ff-primary);
  font-style: normal;
  font-size: 18px;
  font-weight: 500;
  display: block;
  color: var(--clr-text);
  .text-link {
    padding: 12px 16px;
  }
  .selected-link {
    padding: 12px 16px;
    background-color: #eee;
  }
`
