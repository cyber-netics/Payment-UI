import styled from "styled-components";
import { InputStyle, Input as BaseInput } from "exo-ui";

export const Wrapper = styled.div`
  padding: 10px 18px;
  padding-bottom: 18px;

  & div {
    padding: 3px 0;
  }
`;

export const Input = styled(BaseInput)`
  &:focus {
    box-shadow: none;
  }
`;

export const InputWrapper = styled(InputStyle)`
  &&& {
    background: #fff;
    padding: 10.55px !important;
  }
`;
