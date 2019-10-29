import styled from "styled-components";

export const AddPlayerForm = styled.form`
  display: flex;
  flex-direction: column;
  input,
  select {
    margin-bottom: 1em;
  }
  input[type="checkbox"] {
    display: inline-block;
  }
  label {
    display: inline-block;
  }
`;
