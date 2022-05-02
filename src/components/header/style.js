import styled from 'styled-components'

export const HeaderContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 80px;
  left: 0px;
  top: 0px;
  display: flex;
  align-items: center;
  background-color: var(--clr-white);
  .header-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: auto;
    width: var(--container-width);
    height: 100%;
  }
`

export const HeaderLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 41px;
  @media only screen and (max-width: 400px) {
    display: none;
  }
`

export const NavigationContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  flex: 1;
`

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  flex: 1;
`
