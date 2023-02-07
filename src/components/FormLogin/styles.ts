import styled from "styled-components";

export const MainLogin = styled.main`
  min-width: 100vw;
  min-height: 100vh;
  background-color: var(--color-grey4);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  form {
    margin-top: 1.5rem;
    width: 95%;
    min-height: max-content;
    padding: 2rem 0 2rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    gap: 1rem;
    background-color: var(--color-grey3);
    border-radius: 5px;

    @media (min-width: 1024px) {
      width: 25%;
    }

    h3 {
      font-size: var(--font-size-title3);
      font-weight: var(--font-weight-title3);
      color: var(--color-grey0);
    }

    label {
      color: var(--color-grey0);
      font-size: var(--font-size-headline);
      font-weight: var(--font-weight-headline);
      align-self: flex-start;
      margin-left: 1rem;

      @media (min-width: 768px) {
        margin-left: 2.2rem;
      }
    }

    input {
      width: 90%;
      height: 40px;
      background-color: var(--color-grey2);
      border: none;
      border-radius: 5px;
      outline: none;
      color: var(--color-grey1);

      ::placeholder {
        color: var(--color-grey1);
      }

      :focus {
        border: 1px solid var(--color-grey0);

        ::placeholder {
          color: var(--color-grey0);
        }
      }
    }

    button {
      width: 90%;
      height: 40px;
      border: none;
      outline: none;
      border-radius: 5px;
      background-color: var(--color-primary);
      color: var(--color-grey0);

      :hover {
        background-color: var(--color-primary-focus);
      }
    }

    p {
      color: var(--color-grey1);
      font-size: var(--font-size-headline);
      font-weight: var(--font-weight-headline);
      margin-top: 1rem;
      text-align: center;
    }

    a {
      width: 90%;
      height: 40px;
      background-color: var(--color-grey1);
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      color: var(--color-grey0);

      :hover {
        background-color: var(--color-grey2);
      }
    }
  }
`;
