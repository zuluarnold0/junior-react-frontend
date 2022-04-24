import styled, { css } from 'styled-components' //comment out

//window.styled.div
export const HeaderCartCardContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
    font-size: 14px;
  }
  .content-subtitle {
    font-family: var(--ff-primary);
    font-style: normal;
    font-weight: 400;
    text-transform: capitalize;
    color: var(--clr-text);
    font-size: 14px;
  }
  .price-value {
    margin: 10px 0 20px 0;
    font-size: 14px;
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
    font-size: 10px;
    color: var(--clr-text);
    margin-bottom: 2px;
  }

  .item-name {
    border: 1px solid var(--clr-text);
    background-color: var(--clr-white);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--ff-primary);
    text-transform: uppercase;
    font-weight: 500;
    color: var(--clr-text);
    width: 30px;
    height: 30px;
    font-size: 9px;
  }

  .img-container {
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
    width: 20px;
    height: 20px;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
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
    width: 20px;
    height: 20px;
    cursor: pointer;
    span {
      width: 10px;
      height: 1px;
      background-color: var(--clr-text);
    }
  }
  .small-img-box {
    width: 80px;
    height: 120px;
    position: relative;
  }
  .small-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const SelectedSwatchAttribute = styled.div`
  border: 1px solid var(--clr-text);
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--ff-primary);
  text-transform: uppercase;
  font-weight: 500;
  color: var(--clr-white);
  width: 30px;
  height: 30px;
  font-size: 9px;

  ${(props) =>
    props.primary &&
    css`
      background: ${props.primary};
    `}
`
