import styled from 'styled-components' //comment out

//window.styled
export const HeaderCartTotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 32px 0;
  .total-key {
    color: var(--clr-text);
    font-family: var(--ff-tertiary);
    font-size: 16px;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: 0em;
  }
  .total-value {
    color: var(--clr-text);
    font-family: Raleway;
    font-size: 16px;
    font-weight: 700;
    line-height: 26px;
    letter-spacing: 0em;
  }
`
