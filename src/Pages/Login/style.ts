import { Button } from "@nextui-org/react";
import styled from "styled-components"

export const Main = styled.div`
display: flex;
align-items: center;
 
    gap: 4rem;

    padding-top: 15%;

`
export const DivImg=styled.div`
width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
 
  @media screen and (max-width: 700px) {
    display: none;
  }

img {
    width: 45rem;
    height: 25rem;
   
  }
`
export const ContainerRegister = styled.div`
  background-color: white;

 
 display: flex;
  flex-direction: column;
 

  @media screen and (max-width: 700px) {
    width: 100%;
    height: auto;
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
export const DivForm = styled.div`

margin: 2rem;
display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;


  
`;
export const DivFormTitulo = styled.div`
color:white;
h1{
  font-size: 2rem;
  font-weight: 300;
  letter-spacing: 1px;
}
`
;

export const DivMain=styled.div`
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
hr{
  width: 58%;
    border-bottom: 3px solid #ffffffd9;
    background: white;
}

    @media screen and (max-width: 700px) {
        gap: 1rem;
    padding: 2rem;

  }
   


`

export const BtnDiv=styled.div` 
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding-top: .5rem;
`

export const BtnLogin=styled(Button)`
background-color: white;
color: black;

`