import React from "react";
import { Wrapper } from "./styles";
import { Card, Field } from "exo-ui";
import { CardNumber, CardName, CardExpiry, CardCvc } from "./elems";

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
          <CardCvc />
        </Field>
      </Wrapper>
    </Card>
  );
};

export default PaymentCard;
