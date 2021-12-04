import React from "react";
import { Breadcrumb } from "exo-ui";
import SiteLogo from "Components/Logo";
import { Container, Wrapper, MainView, Header, Body, SideView } from "./styles";
import { Dropdown } from "exo-ui";

interface LayoutProps {
  active: number;
  steps: string[];
  header: JSX.Element;
  children?: JSX.Element[];
}

const Layout: React.FC<LayoutProps> = (props) => (
  <Container>
    <Wrapper>
      <MainView>
        <Header>
          <SiteLogo />
          <Breadcrumb active={props.active} steps={props.steps} />
        </Header>
        <Dropdown header={props.header}>
          <SideView>{props.children && props.children[1]}</SideView>
        </Dropdown>
        <Body>{props.children && props.children[0]}</Body>
      </MainView>
      <SideView>{props.children && props.children[1]}</SideView>
    </Wrapper>
  </Container>
);

export default Layout;
