import styled, { css } from 'styled-components'

export const AttributesContainer = styled.div`
  margin: 30px 0;
  @media only screen and (max-width: 1000px) {
    margin: 20px 0;
  }
  .sizes-heading {
    font-family: var(--ff-secondary);
    text-transform: uppercase;
    color: var(--clr-text);
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 18px;
  }
  .sizes-box {
    display: flex;
    align-items: center;
    margin-top: 5px;
  }
  .size {
    border: 1px solid var(--clr-text);
    margin-right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 63px;
    height: 45px;
    font-family: var(--ff-basic);
    text-transform: uppercase;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    letter-spacing: 0.05em;
    color: var(--clr-text-medium);
    box-sizing: border-box;
    @media only screen and (max-width: 1000px) {
      width: 40px;
    }
  }
  .selected-size {
    margin-right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 63px;
    height: 45px;
    font-family: var(--ff-basic);
    text-transform: uppercase;
    font-style: normal;
    color: var(--clr-white);
    font-weight: 400;
    font-size: 16px;
    letter-spacing: 0.05em;
    background: var(--clr-text);
    border: 1px solid var(--clr-text);
    box-sizing: border-box;
    @media only screen and (max-width: 1000px) {
      width: 40px;
    }
  }
  .size,
  .selected-size {
    cursor: pointer;
  }
  .selected-swatch {
    border: 1px solid #5ece7b;
  }
`
export const SwatchAttributeContainer = styled.div`
  margin-right: 8px;
  cursor: pointer;
`
export const SwatchAttribute = styled.div`
  width: 32px;
  height: 32px;
  border: 2px solid #fff;
  ${(props) =>
    props.primary &&
    css`
      background: ${props.primary};
    `}
`
