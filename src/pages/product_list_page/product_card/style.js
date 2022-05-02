import styled from 'styled-components'

export const ProductCardContainer = styled.div`
  height: 380px;
  width: 330px;
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
    object-fit: cover;
  }
  .content {
    height: 50px;
    width: 298px;
    margin: 0 16px;
    position: relative;
    @media only screen and (max-width: 350px) {
      width: 208px;
    }
  }
  .title {
    margin-top: 16px;
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
    font-size: 18px;
    color: var(--clr-text);
    font-weight: 500;
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
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
    .trolley-container {
      position: absolute;
      z-index: 2;
      bottom: 90px;
      right: 30px;
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
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
  }
  .out-of-stock {
    font-family: var(--ff-primary);
    font-style: normal;
    text-transform: capitalize;
    font-weight: 400;
    font-size: 24px;
    line-height: 160%;
    color: #8d8f9a;
  }
`
