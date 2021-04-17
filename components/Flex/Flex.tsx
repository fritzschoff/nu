import styled from "styled-components";
import {
  flexbox,
  background,
  border,
  layout,
  position,
  space,
} from "styled-system";
import { FlexProps } from "./types";

const Flex = styled.div<FlexProps>`
  display: flex;
  ${flexbox}
  ${background}
  ${border}
  ${layout}
  ${position}
  ${space}
`;

export default Flex;
