import styled from 'styled-components'

export const Navigation = styled.div`
  height: 100%;
  display: flex;

  .navigation-link {
    height: 100%;
    display: flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    .text {
      font-weight: 400;
      text-transform: uppercase;
      color: var(--clr-text);
      height: 56px;
      font-size: 16px;
      font-family: var(--ff-primary);
      font-style: normal;
      padding: 0 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      @media only screen and (max-width: 700px) {
        font-size: 12px;
        padding: 0 5px;
      }
    }
    .selected {
      font-size: 16px;
      font-family: var(--ff-primary);
      font-style: normal;
      padding: 0 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      font-weight: 600;
      color: var(--clr-primary);
      text-transform: uppercase;
      height: calc(100% - 4px);
      border-top: 2px solid #fff;
      border-bottom: 2px solid var(--clr-primary);
      @media only screen and (max-width: 700px) {
        font-size: 12px;
        padding: 0 5px;
      }
    }
  }
`
