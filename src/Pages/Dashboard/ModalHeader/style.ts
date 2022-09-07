import {
  Avatar,
  Button,
  Dropdown,
  StyledDropdownMenu,
} from "@nextui-org/react";
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
  border: none;
`;
export const ButtonUserMenuLogout = styled(Button)`
  background-color: transparent;
  width: 200px;
  color: red;
  text-align: center;

`;
export const MenuDropdown = styled(Dropdown.Menu)`


  min-width: 10px;

  

`;
export const DropdownItem = styled(Dropdown.Item)`

  background-color: white !important;
  height: 1px;


`;

export const AvatarDrop = styled(Avatar)`

    img {
      @media (min-width: 150px) {
      
    margin-right: 16px;

      }
      @media (min-width: 500px) {
        margin-right: -1px;
      }
    }
`;
export const DropdownTrigger = styled(Dropdown.Trigger)`


`;
export const DropdownContainer = styled(Dropdown)`


`;