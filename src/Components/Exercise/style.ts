import styled from "styled-components";

export const ContainerWorkout = styled.li`
  width: 95%;
  /* min-height: 5rem;
  max-height: 10rem; */
  height: fit-content;
  background-color: white;
  border-radius: 8px;

  margin: 0;
  padding: 5px;

  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  padding-left: 0.6rem;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
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
    width: 90%;
    font-size: small;
    font-weight: bold;
    color: black;
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.7rem;
  height: 100%;
`;
export const ButtonDelet = styled.button`
  svg {
    color: #ee7373;
  }
`;
