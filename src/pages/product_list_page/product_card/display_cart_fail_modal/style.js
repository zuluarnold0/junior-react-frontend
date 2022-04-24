import styled from 'styled-components'

export const DisplayCartFailModalContainer = styled.div`
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
  .fail-modal-content {
    font-family: var(--ff-primary);
    font-style: normal;
    padding: 10px 20px;
    background-color: #f9f9f9;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    color: var(--clr-text);
  }
  .fail-modal-content {
    border: 2px solid rgb(241, 48, 48);
  }
  .message-modal-name {
    font-weight: 600;
    text-transform: uppercase;
  }
  .message-modal-text {
    font-weight: 400;
  }
`
