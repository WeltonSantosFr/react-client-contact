import styled from "styled-components";

export const HeaderStyled = styled.header`
  width: 100%;
  height: 6rem;
  background-color: var(--color-grey4);
  color: var(--color-success);
  font-size: var(--font-size-title1);
  font-weight: var(--font-weight-title1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  h1 {
    margin-bottom: 1rem;
  }
`;
