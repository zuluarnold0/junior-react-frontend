import styled from 'styled-components'

export const ErrorPageContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-color: var(--clr-primary);
  display: flex;
  justify-content: center;
  align-items: center;
  .error-message {
    padding: 20px 40px;
    font-family: var(--ff-primary);
    font-style: normal;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 20px;
    color: var(--clr-white);
  }
`
