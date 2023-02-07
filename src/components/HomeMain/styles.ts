import styled from "styled-components";

export const HomeMainStyled = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--color-grey4);
  color: var(--color-grey0);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem;

  @media (min-width: 1024px) {
    width: 65%;
    margin: 0 auto;
  }
`;

export const Contact = styled.div`
  color: var(--color-grey0);
  height: max-content;
`;
