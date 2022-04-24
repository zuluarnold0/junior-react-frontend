import styled from 'styled-components'

export const DisplayCartSuccessModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  opacity: 0.7;
  display: flex;
  align-items: center;
  justify-content: center;
  .success-modal-content {
    font-family: var(--ff-primary);
    font-style: normal;
    padding: 10px 20px;
    background-color: #f9f9f9;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    color: var(--clr-text);
  }
  .success-modal-content {
    border: 2px solid var(--clr-primary);
  }
  .message-modal-name {
    font-weight: 600;
    text-transform: uppercase;
  }
  .message-modal-text {
    font-weight: 400;
  }
`
