import styled from 'styled-components'

export const ProductSmallImgsContainer = styled.div`
  width: 80px;
  margin-right: 40px;
  @media only screen and (max-width: 800px) {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin-right: 0px;
  }

  .small-img-box {
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    @media only screen and (max-width: 800px) {
      width: 40px;
      height: 40px;
      margin-right: 10px;
    }
    &:hover {
      cursor: pointer;
      box-shadow: 0px 0px 20px #ddd;
    }
  }
  .small-img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`
