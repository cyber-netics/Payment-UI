import styled, { css } from "styled-components";

export const dynamicHeight = css`
  @media only screen and (min-width: 1000px) {
    height: calc(100vh - 5em);
  }
  @media only screen and (max-width: 1000px) {
    height: 100%;
  }
`;

export const Container = styled.div`
  ${dynamicHeight};
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  line-height: 1.3em;
  position: relative;
`;

export const Section = styled.div`
  min-width: 100%;
  &:before {
    background-color: transparent;
    top: 0;
    content: "";
    display: block;
    height: 1px;
    left: 0;
    position: absolute;
    transition: background-color 0.3s cubic-bezier(0.3, 0, 0, 1);
    width: 100%;
    z-index: 4;
  }
`;
