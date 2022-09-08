import styled from "styled-components";

export const ContainerDay = styled.ul`
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  background-color: #0077b6;
  border-radius: 10px;
  min-width: 17rem;
  color: white;

  h3{
    font-weight: 600;
  }

`;

export const ContainerOverFlow = styled.div`
  width: 90%;
  height: 36rem;
  max-height: 37rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.6rem;
  overflow-x: hidden;
`;
