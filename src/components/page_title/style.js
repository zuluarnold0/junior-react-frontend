import styled from 'styled-components'

export const PageTitleHeader = styled.h1`
  font-family: var(--ff-primary);
  font-style: normal;
  font-weight: 400;
  font-size: 42px;
  color: var(--clr-text);
  text-transform: capitalize;
  @media only screen and (max-width: 450px) {
    font-size: 36px;
  }
`
