import React from "react";
import { Select, Option, Field, Input, InputNumber } from "exo-ui";

const AddressForm: React.FC = () => (
  <>
    <Field>
      <Input placeholder="Address" />
    </Field>
    <Field>
      <Input placeholder="Appartment, suit" />
    </Field>
    <Field>
      <Input placeholder="City" />
    </Field>
    <Field>
      <Select>
        <Option key="US" value="US">
          United States
        </Option>
        <Option key="AM" value="AM">
          Armenia
        </Option>
      </Select>
      <Select>
        <Option key="US" value="US">
          California
        </Option>
        <Option key="AM" value="AM">
          Alabama
        </Option>
      </Select>
      <InputNumber placeholder="Zip code" />
    </Field>
  </>
);

export default AddressForm;
