import { Button, StyledDropdownMenu } from "@nextui-org/react";
import styled from "styled-components";

export const DivModal = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SelectExercises = styled.select`
  width: 350px;
  border-radius: 8px;
`;

export const SelectDay = styled.select`
  border-radius: 8px;
`;



export const ButtonUserMenu = styled(Button)`
background-color: transparent;
width: 200px;
color: black;
text-align: center;

`
export const ButtonUserMenuLogout = styled(Button)`
background-color: transparent;
width: 200px;
color: red;
text-align: center;


`