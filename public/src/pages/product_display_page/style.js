import styled from 'styled-components'

export const ProductDisplayPageContainer = styled.div`
  min-height: calc(100vh - 160px);
  margin: 0 auto;
  padding: 160px 0 40px 0;
  width: var(--container-width);
  .product-display-page {
    display: flex;
    @media only screen and (max-width: 800px) {
      display: block;
    }
  }

  .warning-modal-content,
  .fail-modal-content,
  .success-modal-content {
    font-family: var(--ff-primary);
    font-style: normal;
    padding: 20px 40px;
    background-color: #f9f9f9;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    color: var(--clr-text);
  }
  .success-modal-content {
    border: 5px solid var(--clr-primary);
  }
  .fail-modal-content {
    border: 5px solid rgb(241, 48, 48);
  }
  .warning-modal-content {
    border: 5px solid yellow;
  }
  .message-modal-name {
    font-weight: 600;
    text-transform: uppercase;
  }
  .message-modal-text {
    font-weight: 400;
  }
  @media only screen and (max-width: 1000px) {
    padding-top: 120px;
  }
  @media only screen and (max-width: 800px) {
    max-width: 600px;
  }
`
