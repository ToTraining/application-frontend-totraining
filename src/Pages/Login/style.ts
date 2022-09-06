import { Button } from "@nextui-org/react";
import styled from "styled-components";

export const Header = styled.div`
  height: 57px;
  width: 100vw;

  background: #091025;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0;
  img {
    width: 150px;
  }
  @media (min-width: 650px) {
    justify-content: flex-start;
    padding-left: 20px;
  }
`;
export const Main = styled.div`
  background-color: #edfafd;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
  align-items: center;

  height: 100vh;
  width: 100vw;

  padding-top: 100px;
  @media (min-width: 650px) {
    justify-content: center;
    flex-direction: row;
    align-items: center;
    padding: 0;
  }
`;
export const DivImg = styled.div`
  display: none;

  img {
    display: none;
  }
  @media (min-width: 650px) {
    width: 50%;
    display: flex;
    align-items: center;

    img {
      display: block;
      width: auto;
      height: auto;
    }
  }
`;

export const DivForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 16rem;
  margin: 0;
`;
export const DivFormTitulo = styled.div`
  color: white;
  h1 {
    font-size: 2rem;
    font-weight: 300;
    letter-spacing: 1px;
  }
`;

export const DivMain = styled.div`
  /* padding-top: 2rem; */
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  background: #0077b6;
  gap: 1rem;
  width: 16rem;
  border-radius: 10px;

  justify-content: space-evenly;
  height: 25rem;
  hr {
    width: 58%;
    border-bottom: 3px solid #ffffffd9;
    background: white;
  }
`;

export const BtnDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding-top: 0.5rem;
`;

export const BtnLogin = styled(Button)`
  background-color: white;
  color: black;
  width: 195px !important;
`;
