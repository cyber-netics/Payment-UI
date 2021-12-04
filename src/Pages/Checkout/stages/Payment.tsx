import React from "react";
import styled from "styled-components";

import Template from "../../../Templates/Divide";
import ContactForm from "../../../Forms/Contact";
import AddressForm from "../../../Forms/Address";
import SideView from "../side";
import { Section, Button } from "exo-ui";
import { ContentBox, OptionBox } from "exo-ui";
import PaymentCard from "Components/Payment";

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

const PaymentStage: React.FC = () => {
  return (
    <Template
      step={1}
      steplist={["Cart", "Information", "Shipping", "Payment"]}
    >
      <>
        {/* <Form> */}
        <Section>
          <ContentBox
            items={[
              {
                name: "Contact",
                body: "example123@gmail.com",
                action: {
                  actionName: "Change",
                  function: () => {
                    console.log("change...");
                  },
                },
              },
              {
                name: "Address",
                body: "12345 Testing st. Helloworld, CA 913010",
                action: {
                  actionName: "Change",
                  function: () => {
                    console.log("change...");
                  },
                },
              },
              {
                name: "Shipping",
                body: "Overnight",
                action: {
                  actionName: "Change",
                  function: () => {
                    console.log("change...");
                  },
                },
              },
            ]}
          />
        </Section>

        <Section title="Payment">
          <PaymentCard />
        </Section>

        <Section title="Billing address">
          <OptionBox
            items={[
              { name: "Regular Shipping", result: "Free" },
              { name: "Overnight Shipping", result: "$20" },
            ]}
          />
        </Section>
        <NextButton radius={5} size="large">
          Next
        </NextButton>
        {/* </Form> */}
      </>
      <>
        <SideView />
      </>
    </Template>
  );
};

export default PaymentStage;
