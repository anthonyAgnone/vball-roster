import styled from "styled-components";

export const LoggedOut = styled.div`
  width: 100%;
  padding: 2em 1em;
    iframe {
    position: absolute;
    left: 50%;
    transform: translateX(-50%)
  }
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

export const LogSignForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  input, button {
    width: 100%;
    margin-bottom: 1em;
  }
  input {
    text-indent: 5px;
  }
`