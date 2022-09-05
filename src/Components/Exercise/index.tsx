import { Dropdown } from "@nextui-org/react";

interface Iworkout {
  title: string;
  rep: number;
  time: number;
  day: string;
  set: number;
  weigth: number;
  id: number;
}

export const Exercise = ({
  title,
  rep,
  time,
  day,
  weigth,
  set,
  id,
}: Iworkout) => {
  return (
    <li>
      <div>
        <h4>{title}</h4>
        <p>{rep} repetições</p>
        <p>Série: {set}</p>
        <p>Tempo de descanso: {time}</p>
        <p>Peso {weigth} Kg</p>
      </div>
      <Dropdown>
        <Dropdown.Button light>...</Dropdown.Button>
        <Dropdown.Menu aria-label="Static Actions">
          <Dropdown.Item key="edit">Editar exercício</Dropdown.Item>
          <Dropdown.Item key="delete" color="error" withDivider>
            Excluir exercício
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </li>
  );
};
