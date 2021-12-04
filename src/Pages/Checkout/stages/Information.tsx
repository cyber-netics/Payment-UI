import React from "react";
import Template from "../../../Templates/Divide";
import ContactForm from "../../../Forms/Contact";
import AddressForm from "../../../Forms/Address";
import SideView from "../side";
import { Section, Button } from "exo-ui";

import styled from "styled-components";

const Form = styled.form``;

const FormItem = styled.div`
  & > div {
    margin-bottom: 11px;
  }

  & > div:last-child {
    margin-top: 12px;
    margin-bottom: 9px;
  }
`;

const NextButton = styled(Button)`
  min-width: 200px;
  div {
    justify-content: center;
  }
`;

const InformationStage: React.FC = () => {
  return (
    <Template
      step={1}
      steplist={["Cart", "Information", "Shipping", "Payment"]}
    >
      <>
        {/* <Form> */}
        <div style={{ paddingTop: "37px" }}>
          <Section title="Contact information">
            <FormItem>
              <ContactForm />
            </FormItem>
          </Section>

          <Section title="Shipping address">
            <FormItem>
              <AddressForm />
            </FormItem>
          </Section>
          <NextButton radius={5} size="large">
            Next
          </NextButton>
        </div>

        {/* </Form> */}
      </>
      <>
        <SideView />
      </>
    </Template>
  );
};

export default InformationStage;
