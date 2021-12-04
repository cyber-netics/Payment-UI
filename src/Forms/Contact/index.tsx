import React from "react";
import { Checkbox, Input, Field, InputEmail, InputNumber } from "exo-ui";

import styled from "styled-components";
const ExtraSpace = styled.div`
  margin-top: 3px;
`;

const ContactForm: React.FC = () => (
  <>
    <Field>
      <Input placeholder="First name" />
      <Input placeholder="Last name" />
    </Field>
    <Field>
      <InputEmail placeholder="Email" />
    </Field>
    <Field>
      <InputNumber placeholder="Phone number" />
    </Field>
    <Field>
      <ExtraSpace>
        <Checkbox size="medium">
          {"Keep me up to date on news and offers"}
        </Checkbox>
      </ExtraSpace>
    </Field>
  </>
);

export default ContactForm;
