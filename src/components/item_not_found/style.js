import styled from 'styled-components'

export const ItemNotFoundContainer = styled.div`
  width: 100%;
  margin-top: 80px;
  height: calc(100vh - 80px);
  background-color: var(--clr-primary);
  display: flex;
  justify-content: center;
  align-items: center;
  .not-found-message {
    padding: 20px 40px;
    font-family: var(--ff-primary);
    font-style: normal;
    font-weight: 600;
    text-transform: uppercase;
    color: #f9f9f9;
    font-size: 20px;
  }
`
