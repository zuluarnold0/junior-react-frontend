import styled from 'styled-components'

export const HeaderContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 80px;
  left: 0px;
  top: 0px;
  display: flex;
  align-items: center;
  .header-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: auto;
    width: var(--container-width);
    height: 100%;
  }
`

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 41px;
  .logo-icon {
    height: 28.619224548339844px;
    width: 31.181222915649414px;
  }
  @media only screen and (max-width: 400px) {
    display: none;
  }
`

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 40px;
  flex: 1;
`
