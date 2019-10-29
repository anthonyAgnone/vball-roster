import styled from "styled-components";

export const LoggedOut = styled.div`
  width: 100%;
  padding: 2em 1em;
`

export const TabGroup = styled.div`
  display: flex;
  width: 100%;
  button {
    margin-right: 1em;
    background: none;
    border: none;
    color: #fff;
    padding: 8px 13px;
    &.active {
      background: #fff;
      color: #000;
    }
  }
`