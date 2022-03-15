import { css } from "styled-components";

const Flexbox = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FlexboxColumn = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const FlexboxRow = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const FlexboxSpace = css`
  display: flex;
  justify-content: space-between;
`;

export { Flexbox, FlexboxColumn, FlexboxRow, FlexboxSpace };
