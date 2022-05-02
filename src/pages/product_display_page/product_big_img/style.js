import styled from 'styled-components'

export const ProductBigImgContainer = styled.div`
  width: 610px;
  height: 511px;
  margin-right: 80px;
  @media only screen and (max-width: 1000px) {
    height: 350px;
    max-width: 450px;
    margin-right: 40px;
  }
  .big-img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`
