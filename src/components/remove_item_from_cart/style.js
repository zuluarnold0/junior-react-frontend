import styled from 'styled-components'

export const RemoveFromCartModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  margin-top: 80px;
  height: calc(100% - 80px);
  background-color: white;
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
    margin-bottom: 20px;
  }
  .remove-modal-name {
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
    width: 120px;
    height: 40px;
    color: var(--clr-text);
    background-color: crimson;
    border: 1px solid crimson;
    color: white;
    outline: none;
    font-size: 12px;
    font-family: var(--ff-primary);
    text-transform: uppercase;
    cursor: pointer;
  }
  .cancel-button {
    width: 120px;
    height: 40px;
    border: none;
    outline: none;
    font-size: 12px;
    color: var(--clr-white);
    border: 1px solid var(--clr-primary);
    background-color: var(--clr-primary);
    font-family: var(--ff-primary);
    text-transform: uppercase;
    cursor: pointer;
  }
`
