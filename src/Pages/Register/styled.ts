import { Button } from "@nextui-org/react";
import styled from "styled-components";

export const Main=styled.div`
    display: flex;
    align-items: flex-end;
    gap: 5rem;
    
    `

export const ContainerRegister = styled.div`
  background-color: white;
  flex-direction: column;

  
  display: flex;

  margin-top: 10%;



  @media screen and (max-width: 700px) {
    width: 100%;
    height: auto;
  }
 
`;
export const DivFormImg = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  img {
    width: 55rem;
    height: 26rem;
    margin-bottom: 6rem;
  }
  @media screen and (max-width: 700px) {
    display: none;
  }
`;
export const DivForm = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;



  @media screen and (max-width: 700px) {
    width: 100%;
  }

`;
export const DivFormHeader = styled.div`
      height: 57px;
    width: 100vw;

  background: #091025;
  color: white;
  display: flex;
    align-items: flex-end;
    justify-content: space-around;
  p {
    font-size: 2.5rem;
   
  }
  @media screen and (min-width: 700px) {
   display: none;

  }

`;
export const DivFormTitulo = styled.div`
color:white;
h1{
  font-size: 2rem;
  font-weight: 300;
  letter-spacing: 1px;
}
`;

export const DivMain=styled.div`
/* padding-top: 2rem; */
display: flex;
flex-direction: column;
  align-content: center;
  align-items: center;
  background: #0077b6;
  gap: .6rem;
  border-radius: 10px;

  justify-content: space-evenly;
    height: 40rem;

hr{
  width: 58%;
    border-bottom: 3px solid #ffffffd9;
    background: white;
}

`
export const BtnDiv=styled.div` 
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding-top: .5rem;
`
export const BtnCadastrar=styled(Button)`
background-color: white;
color: black;
`