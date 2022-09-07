import styled from "styled-components";

export const ContainerWorkout = styled.li`
  width: 95%;
  height: 5rem;
  background-color: white;
  border-radius: 8px;

  margin: 0;
  padding: 0;

  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  gap: 2rem;
  padding-left: 0.6rem;

  div {
    display: flex;
    flex-direction: column;
  }

  button {
    appearance: none;
    border: none;
    background-color: transparent;
  }

  h4 {
    margin: 0;
    height: 1.6rem;
    color: black;
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

  width: 100%;
  height: 4rem;
  p {
    font-size: small;
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
