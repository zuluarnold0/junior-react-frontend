import styled, { css } from 'styled-components'

export const AttributesContainer = styled.div`
  margin: 30px 0;
  @media only screen and (max-width: 1000px) {
    margin: 20px 0;
  }
  .sizes-heading {
    font-family: var(--ff-primary);
    text-transform: uppercase;
    font-weight: 600;
    font-size: 15px;
    color: var(--clr-text);
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
    width: 50px;
    height: 36px;

    font-family: var(--ff-primary);
    text-transform: uppercase;
    font-weight: 500;
    font-size: 13px;
    @media only screen and (max-width: 1000px) {
      width: 40px;
    }
  }
  .selected-size {
    border: 1px solid dimgray;
    background-color: dimgray;
    margin-right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 36px;

    font-family: var(--ff-primary);
    text-transform: uppercase;
    font-weight: 500;
    font-size: 13px;
    color: var(--clr-white);
    @media only screen and (max-width: 1000px) {
      width: 40px;
    }
  }
  .size,
  .selected-size {
    cursor: pointer;
  }
`
export const SwatchAttribute = styled.div`
    border: 1px solid var(--clr-text);
    margin-right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 36px;
    cursor: pointer;
    font-family: var(--ff-primary);
    text-transform: uppercase;
    font-weight: 500;
    font-size: 13px;
    @media only screen and (max-width: 1000px) {
      width: 40px;
    }
  }
  
    ${(props) =>
      props.primary &&
      css`
        background: ${props.primary};
      `}
  `
