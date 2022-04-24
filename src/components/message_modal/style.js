import styled from 'styled-components'

export const MessageModalContainer = styled.div`
  display: block;
  position: absolute;
  z-index: 1;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  min-height: 100vh;
  // background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;

  .modal-content {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
