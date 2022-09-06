import styled from "styled-components";

export const ContainerDay = styled.ul`
  width: 16.5rem;
  height: 25rem;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  background-color: bisque;
  border-radius: 10px;
  border: 1px solid blue;
`

export const ContainerOverFlow = styled.div`
  width: 90%;
  height: 21rem;
  max-height: 23rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;
  overflow-x: hidden;
`