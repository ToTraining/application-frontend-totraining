import styled from "styled-components";

export const ContainerDay = styled.ul`
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  background-color: bisque;
  border-radius: 10px;
  min-width: 200px;
  :hover {
    border: 1px solid blue;
  }
`;

export const ContainerOverFlow = styled.div`
  width: 90%;
  height: 90%;
  max-height: 23rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;
  overflow-x: hidden;
`;
