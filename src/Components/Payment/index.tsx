import React from "react";
import { Wrapper } from "./styles";
import { Card, Input, Field } from "exo-ui";
import { CardNumber, CardName, CardExpiry } from "./elems";

const PaymentCard: React.FC = () => {
  return (
    <Card title="Cardit Card">
      <Wrapper>
        <Field>
          <CardNumber />
        </Field>
        <Field>
          <CardName />
        </Field>
        <Field>
          <CardExpiry />
          <Input placeholder="CVC" />
        </Field>
      </Wrapper>
    </Card>
  );
};

export default PaymentCard;
