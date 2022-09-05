import styled from "styled-components";

export const Main = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;

  div {
    display: flex;
    align-items: center;
  }

  form {
    display: flex;
    flex-direction: column;

    background-color: #0077b6;
    border: 2px solid black;
    padding: 20px;
  }

  button {
    margin-bottom: 20px;
    padding: 7px;
    background-color: #fff;
  }
`;
