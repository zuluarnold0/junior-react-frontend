import styled, { css } from 'styled-components' //comment out

//window.styled.div
export const HeaderCartCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0px;
  width: 293px;
  min-height: 190px;
  .content-container {
    width: 144px;
    min-height: 190px;
  }
  .content-title {
    font-family: var(--ff-primary);
    font-style: normal;
    text-transform: capitalize;
    color: var(--clr-text);
    font-weight: 300;
    font-size: 16px;
    line-height: 160%;
  }
  .price-value {
    margin: 4px 0;
    font-family: var(--ff-primary);
    font-style: normal;
    color: var(--clr-text);
    font-weight: 500;
    font-size: 16px;
    line-height: 160%;
  }

  .img-container {
    display: flex;
  }
  .action-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    margin-right: 8px;
  }
  .action-add {
    border: 1px solid var(--clr-text);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
  }
  .number {
    font-family: var(--ff-primary);
    font-style: normal;
    color: var(--clr-text);
    font-weight: 500;
    font-size: 16px;
  }
  .action-sub {
    border: 1px solid var(--clr-text);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    cursor: pointer;
    span {
      width: 8px;
      height: 1px;
      background-color: var(--clr-text);
    }
  }
  .small-img-box {
    width: 121px;
    min-height: 190px;
    position: relative;
  }
  .small-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const AttributesContainer = styled.div`
  margin-bottom: 8px;

  .attributes-heading {
    font-family: var(--ff-primary);
    text-transform: capitalize;
    color: var(--clr-text);
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
  }
  .attributes-box {
    display: flex;
    align-items: center;
    margin-top: 8px;
  }

  .item {
    font-family: var(--ff-basic);
    border: 1px solid var(--clr-grey-light);
    background-color: var(--clr-white);
    text-transform: uppercase;
    width: 24px;
    height: 24px;
    font-style: normal;
    font-weight: 400;
    font-size: 9px;
    line-height: 160%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: var(--clr-grey-light);
    margin-right: 8px;
  }

  .selected-item {
    font-family: var(--ff-basic);
    text-transform: uppercase;
    width: 24px;
    height: 24px;
    font-style: normal;
    font-weight: 400;
    font-size: 9px;
    line-height: 160%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: var(--clr-white);
    letter-spacing: 0.05em;
    background: var(--clr-text);
    border: 1px solid var(--clr-text);
    margin-right: 8px;
    box-sizing: border-box;
  }

  .selected-swatch {
    border: 1px solid #5ece7b;
  }
`

export const SwatchAttributeContainer = styled.div`
  margin-right: 4px;
`
export const SwatchAttribute = styled.div`
  width: 16px;
  height: 16px;
  border: 2px solid #fff;
  ${(props) =>
    props.primary &&
    css`
      background: ${props.primary};
    `}
`
