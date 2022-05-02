import styled, { css } from 'styled-components' //comment out

//window.styled.div
export const CartCardContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  border-top: 1px solid #e5e5e5;
  padding: 24px 0;
  .content-container {
  }
  .content-title {
    font-family: var(--ff-primary);
    font-style: normal;
    text-transform: capitalize;
    color: var(--clr-text);
    font-weight: 600;
    font-size: 30px;
    line-height: 27px;
    padding-bottom: 16px;
    @media only screen and (max-width: 450px) {
      font-size: 22px;
    }
  }
  .content-subtitle {
    font-family: var(--ff-primary);
    font-style: normal;
    font-weight: 400;
    text-transform: capitalize;
    color: var(--clr-text);
    font-size: 30px;
    line-height: 27px;
    padding-bottom: 20px;
    @media only screen and (max-width: 450px) {
      font-size: 22px;
    }
  }
  .price-value {
    font-family: var(--ff-primary);
    font-style: normal;
    color: var(--clr-text);
    font-weight: 700;
    font-size: 24px;
    line-height: 24px;
  }

  .attribute-name {
    font-family: var(--ff-primary);
    text-transform: uppercase;
    font-weight: 500;
    font-size: 11px;
    color: var(--clr-text);
    margin-bottom: 2px;
  }

  .item-name {
    border: 1px solid var(--clr-text);
    background-color: var(--clr-white);
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
    color: var(--clr-text);
    @media only screen and (max-width: 450px) {
      width: 40px;
      height: 30px;
    }
  }

  .img-action-container {
    display: flex;
  }

  .action-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    margin-right: 24px;
  }
  .action-add {
    border: 1px solid var(--clr-text);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 45px;
    width: 45px;
    font-weight: 500;
    font-size: 30px;
    cursor: pointer;
    @media only screen and (max-width: 450px) {
      width: 30px;
      height: 30px;
      font-size: 20px;
    }
  }
  .number {
    font-size: 20px;
    font-weight: 600;
    font-family: var(--ff-primary);
    font-style: normal;
    color: var(--clr-text);
  }
  .action-sub {
    border: 1px solid var(--clr-text);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 45px;
    width: 45px;
    cursor: pointer;
    @media only screen and (max-width: 450px) {
      width: 30px;
      height: 30px;
    }
    span {
      width: 15px;
      height: 1px;
      background-color: var(--clr-text);
      @media only screen and (max-width: 450px) {
        width: 16px;
      }
    }
  }

  .display-slider-img-box {
    overflow: hidden;
    position: relative;
    height: 288px;
    width: 200px;
  }

  .slider-wrapper {
    width: 1400px;
    height: 100%;
    display: flex;
    transform: translateX(0px);
    transition: all 1s ease;
  }

  .single-image-box {
    height: 100%;
    width: 200px;
    display: flex;
    align-items: center;
  }

  .single-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .left-arrow {
    position: absolute;
    bottom: 16px;
    right: 48px;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--clr-black);
    cursor: pointer;
  }
  .right-arrow {
    position: absolute;
    bottom: 16px;
    right: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    background-color: var(--clr-black);
    cursor: pointer;
  }
`
export const AttributesContainer = styled.div`
  margin: 20px 0 16px 0;

  .attributes-heading {
    font-family: var(--ff-secondary);
    text-transform: uppercase;
    color: var(--clr-text);
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 18px;
    margin: 7px 0px;
  }
  .attributes-box {
    display: flex;
    align-items: center;
  }
  .item {
    border: 1px solid var(--clr-text);
    margin-right: 8px;
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
  .selected-item {
    margin-right: 8px;
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
  .selected-swatch {
    border: 1px solid #5ece7b;
  }
`
export const SwatchAttributeContainer = styled.div`
  margin-right: 8px;
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
