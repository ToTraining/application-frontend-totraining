import styled from "styled-components";

export const ContainerWorkout = styled.li`
  width: 95%;
  height: 7.5rem;
  background-color: white;
  border-radius: 8px;
  margin: 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  padding: 5px;
  padding-left: 0.6rem;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
  }
  button {
    appearance: none;
    border: none;
    background-color: transparent;
  }
  h4 {
    margin: 0;
    margin-bottom: 5px;
    height: fit-content;
    color: black;
    line-height: 1.2em;
  }
  p {
    font-size: small;
    color: black;
  }
`;

export const ContainerInfoWorkout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 70%;
  height: 4rem;
  p {
    width: 50%;
    font-size: small;
    font-weight: bold;
    color: black;
  }
`;

export const ContainerButtons = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  margin: 0;
  width: 50% !important;
  gap: 0.7em;
`;
export const ButtonDelet = styled.button`
  width: fit-content;
  svg {
    color: #ee7373;
  }
`;