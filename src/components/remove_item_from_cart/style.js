import styled from 'styled-components'

export const RemoveFromCartModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  opacity: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  .remove-modal-content {
    font-family: var(--ff-primary);
    font-style: normal;
    padding: 10px 20px;
    background-color: #f9f9f9;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    color: var(--clr-text);
  }
  .remove-text-container {
    margin-bottom: 40px;
  }
  .remove-modal-name {
    font-family: var(--ff-secondary);
    font-weight: 600;
    text-transform: uppercase;
  }
  .remove-modal-text {
    font-weight: 400;
  }

  .remove-modal-buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .delete-button {
    width: 140px;
    height: 43px;
    color: var(--clr-text);
    background-color: crimson;
    border: 1px solid crimson;
    font-family: var(--ff-primary);
    text-transform: uppercase;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: white;
    outline: none;
    cursor: pointer;
  }
  .cancel-button {
    width: 140px;
    height: 43px;
    border: none;
    outline: none;
    font-family: var(--ff-primary);
    text-transform: uppercase;
    font-style: normal;
    font-weight: 600;
    cursor: pointer;
    font-size: 14px;
    line-height: 17px;
    text-transform: uppercase;
    color: var(--clr-white);
    border: 1px solid var(--clr-primary);
    background-color: var(--clr-primary);
  }
`
