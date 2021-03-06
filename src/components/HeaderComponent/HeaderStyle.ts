import styled from "styled-components";

export const HeaderStyles = styled.header`
  max-width: ${props => props.theme.media.desktop};
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  top: 0;
  padding: 25px 0 0 0;
  background-color: white;
  width: 100%;
  position: sticky;
  z-index: 2;

  .logo {
    height: 40px;
    width: 140px;
    padding-left: 15px;
  }

  .navBar {
    display: flex;
    justify-content: flex-end;
    margin: 5px 0 0 15px;
  }

  .navBar img {
    width: 25px;
    height: 25px;
    margin: 0 10px 0 0;
  }

  @media ${props => props.theme.media.phone} {
    .logo {
      grid-row-start: 2;
    }

    .menu {
      grid-row-start: 1;
    }

    .headerCabinet {
      display: none;
    }
  }

`