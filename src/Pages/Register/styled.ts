import { Input } from "@nextui-org/react";
import styled from "styled-components";

export const InputRegister = styled(Input)`
  border: 5px solid red;
`;

export const ContainerRegister = styled.div`
  background-color: white;

  width: 100%;
  height: 80vh;
  display: flex;

  margin-top: 10%;

  @media screen and (max-width: 700px) {
    width: 100%;
    height: auto;
  }
  @media screen and (max-width: 310px) {
  }
`;
export const DivFormImg = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  img {
    width: 20rem;
    height: 18rem;
  }
  @media screen and (max-width: 700px) {
    display: none;
  }
`;
export const DivForm = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 5rem;

  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;
export const DivFormHeader = styled.div`
  display: flex;

  justify-content: space-evenly;
  align-items: center;
  background: #091025;
  color: white;
  p {
    font-size: 2.5rem;
  }
`;
export const DivFormTitulo = styled.div``;

export const DivFormInputs = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  background: #0077b6;
`;
