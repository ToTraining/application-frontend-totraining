import { Button } from "@nextui-org/react";
import styled from "styled-components";

export const AddExerciseBtn = styled(Button)`
  background-color: #6bcacb;
  border-radius: 8px;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.3);
  color: black;
  margin-right: 1rem;
  /* width: 100px !important; */

  @media (min-width: 500px) {
    margin-right: 3rem;
  }
`;
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
