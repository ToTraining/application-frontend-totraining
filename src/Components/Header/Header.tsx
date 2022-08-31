import { Dropdown, Avatar, Text, Grid, User } from "@nextui-org/react";
import { HeaderContainer } from "./style";

export default function Header() {
  return (
    <HeaderContainer>
      <h2>toTraining</h2>

      <Grid.Container justify="flex-end" gap={2}>
        <Grid>
          <Dropdown placement="bottom-left">
            <Dropdown.Trigger>
              <User className="avatarName"
                bordered
                as="button"
                size="lg"
                color="primary"
                name="Nome do usuário"
                description="@tonyreichert"
                src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
              />
            </Dropdown.Trigger>
            <Dropdown.Menu color="primary" aria-label="User Actions">
              <Dropdown.Item key="help_and_feedback">
                Todos os usuários
              </Dropdown.Item>
              <Dropdown.Item key="logout" color="error" withDivider>
                Sair
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Grid>
      </Grid.Container>
    </HeaderContainer>
  );
}
