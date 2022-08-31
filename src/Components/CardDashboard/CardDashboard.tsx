import { Card, Text } from "@nextui-org/react";
import { UlDashboard } from "./style";



export default function CardDashboard() {
  return (
    <UlDashboard>
      <Card className="cardDashboard" isHoverable variant="bordered" >
        <Card.Body>
          <Text className="titleCards">Domingo</Text>
        </Card.Body>
      </Card>

      <Card className="cardDashboard" isHoverable variant="bordered" >
        <Card.Body>
          <Text className="titleCards">Segunda-feira</Text>
        </Card.Body>
      </Card>

      <Card className="cardDashboard" isHoverable variant="bordered" >
        <Card.Body>
          <Text className="titleCards">Terça-feira</Text>
        </Card.Body>
      </Card>

      <Card className="cardDashboard" isHoverable variant="bordered" >
        <Card.Body>
          <Text className="titleCards">Quarta-feira</Text>
        </Card.Body>
      </Card>

      <Card  className="cardDashboard" isHoverable variant="bordered" >
        <Card.Body>
          <Text className="titleCards">Quinta-feira</Text>
        </Card.Body>
      </Card>

      <Card className="cardDashboard" isHoverable variant="bordered" >
        <Card.Body>
          <Text className="titleCards">Sexta-feira</Text>
        </Card.Body>
      </Card>

      <Card className="cardDashboard" isHoverable variant="bordered" >
        <Card.Body>
          <Text className="titleCards">Sábado</Text>
        </Card.Body>
      </Card>
    </UlDashboard>
  );
}
