import React from "react";
import { Wrapper } from "./styles";
import { Card, Input, Field } from "exo-ui";

const PaymentCard: React.FC = () => {
  return (
    <Card title="Cardit card">
      <Wrapper>
        <Field>
          <Input placeholder="Card number" />
        </Field>
        <Field>
          <Input placeholder="Name on card" />
        </Field>
        <Field>
          <Input placeholder="Expiration date" />
          <Input placeholder="Cvc" />
        </Field>
      </Wrapper>
    </Card>
  );
};

export default PaymentCard;
