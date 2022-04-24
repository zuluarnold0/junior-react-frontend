import styled from 'styled-components'

export const ProductCardContainer = styled.div`
  height: 364px;
  width: 310px;
  margin: 20px;
  position: relative;

  .product-card-img {
    height: 290px;
    width: 100%;
    display: flex;
    justify-content: center;
    @media only screen and (max-width: 350px) {
      height: 236px;
    }
  }
  .product-card-img-box {
    height: calc(100% - 32px);
    width: calc(100% - 32px);
    margin: 16px;
  }
  .product-card-img-box .img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
  .content {
    height: 50px;
    width: 278px;
    margin: 0 16px;
    position: relative;
    @media only screen and (max-width: 350px) {
      width: 208px;
    }
  }
  .title {
    font-family: var(--ff-primary);
    text-transform: capitalize;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    color: var(--clr-text);
  }
  .price {
    font-family: var(--ff-primary);
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    color: var(--clr-text);
  }
  .trolley-container {
    display: none;
  }
  .trolley {
    width: 20px;
    height: 20px;
    object-fit: contain;
  }
  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 20px #ddd;
    .trolley-container {
      position: absolute;
      z-index: 2;
      bottom: 70px;
      right: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      background-color: var(--clr-primary);
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
  @media only screen and (max-width: 350px) {
    height: 346px;
    width: 240px;
  }

  .out-of-stock-box {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
  }
  .out-of-stock {
    font-family: var(--ff-primary);
    font-style: normal;
    font-weight: 500;
    text-transform: capitalize;
    color: dimgray;
  }
`
