import styled from "styled-components";

export const HeaderHomeStyled = styled.header`
  width: 100%;
  height: 6rem;
  background-color: var(--color-grey4);
  color: var(--color-success);
  font-size: var(--font-size-title1);
  font-weight: var(--font-weight-title1);
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;

  @media (min-width: 1024px) {
    width: 61%;
    margin: 0 auto;
  }

  h1 {
    margin-left: 1rem;
    margin-bottom: 2.5rem;
  }

  a {
    margin-right: 1rem;
    margin-bottom: 2rem;
    text-decoration: none;
    color: var(--color-grey0);
    background-color: var(--color-grey3);
    width: 4.375rem;
    height: 1.875rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    font-size: var(--font-size-headline);
    font-weight: var(--font-weight-headline);
  }
`;
