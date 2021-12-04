import React from "react";
import SiteLogo from "Components/Logo";
import { Breadcrumb } from "exo-ui";
import { Container, Wrapper, MainView, Header, Body, SideView } from "./styles";

interface LayoutProps {
  step: number;
  steplist: string[];
  children?: JSX.Element[];
}

const Layout: React.FC<LayoutProps> = (props) => {
  const currentStep = props.steplist[props.step];

  return (
    <Container>
      <Wrapper>
        <MainView>
          <Header>
            <SiteLogo />
            <Breadcrumb active={currentStep} steps={props.steplist} />
          </Header>
          <Body>{props.children && props.children[0]}</Body>
        </MainView>
        <SideView>{props.children && props.children[1]}</SideView>
      </Wrapper>
    </Container>
  );
};

export default Layout;
