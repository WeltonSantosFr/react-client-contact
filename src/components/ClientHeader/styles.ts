import styled from "styled-components";

export const UserHeaderStyled = styled.div`
  width: 100%;
  background-color: var(--color-grey4);
  color: var(--color-grey0);
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 120px;
  gap: 1rem;

  @media (min-width: 1024px) {
    width: 61%;
    margin: 0 auto;
  }

  h2 {
    margin-left: 1rem;
    font-size: var(--font-size-title1);
    font-weight: var(--font-weight-title1);
  }

  p {
    margin-left: 1rem;
    font-size: var(--font-size-headline);
    font-weight: var(--font-weight-headline);
    color: var(--color-grey1);
  }
`;
