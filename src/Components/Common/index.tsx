import styled from "styled-components";
import { ContentBox as Y } from "exo-ui";
import { OptionBox as X } from "exo-ui";

export const ContentBox = styled(Y)`
  .content-item {
    font-size: 15px;
    padding: 14px 20px;
  }
`;

export const OptionBox = styled(X)`
  .option-item {
    padding: 18.5px 20px;

    span {
      font-size: 15.5px;
      line-height: 15px;
    }
  }
`;
