import styled, { css } from 'styled-components' //comment out

//window.styled.div
export const CartCardContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  border-top: 1px solid #ddd;
  padding: 20px 0;
  .content-container {
    max-width: 200px;
  }
  .content-title {
    font-family: var(--ff-primary);
    font-style: normal;
    text-transform: capitalize;
    color: var(--clr-text);
    padding-bottom: 10px;
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
    @media only screen and (max-width: 450px) {
      font-size: 22px;
    }
  }
  .price-value {
    margin: 10px 0 20px 0;
    font-size: 18px;
    font-weight: 600;
    font-family: var(--ff-primary);
    font-style: normal;
    color: var(--clr-text);
  }
  .attribute-container {
    margin-bottom: 10px;
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
    width: 170px;
    display: flex;
  }

  .action-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    margin-right: 10px;
  }
  .action-add {
    border: 1px solid var(--clr-text);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
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
    width: 40px;
    height: 40px;
    cursor: pointer;
    @media only screen and (max-width: 450px) {
      width: 30px;
      height: 30px;
    }
    span {
      width: 16px;
      height: 1px;
      background-color: var(--clr-text);
      @media only screen and (max-width: 450px) {
        width: 16px;
      }
    }
  }

  .display-slider-img-box {
    overflow: hidden;
    width: 120px;
    position: relative;
  }

  .slider-wrapper {
    width: 1000px;
    height: 100%;
    display: flex;
    transform: translateX(0px);
    transition: all 1s ease;
  }

  .single-image-box {
    height: 100%;
    width: 120px;
    display: flex;
    align-items: center;
  }

  .single-image {
    width: 100%;
    object-fit: cover;
  }

  .left-arrow {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    cursor: pointer;
  }
  .right-arrow {
    position: absolute;
    top: 50%;
    right: 0%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    cursor: pointer;
  }
`

export const SelectedSwatchAttribute = styled.div`
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
  color: var(--clr-white);
  @media only screen and (max-width: 450px) {
    width: 40px;
    height: 30px;
  }

  ${(props) =>
    props.primary &&
    css`
      background: ${props.primary};
    `}
`
