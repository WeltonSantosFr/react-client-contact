import styled from "styled-components";

export const MainRegister = styled.main`
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

    div {
      width: 90%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
    }

    select {
      min-width: 100%;
      height: 40px;
      background-color: var(--color-grey2);
      color: var(--color-grey1);
      border: none;
      outline: none;
      border-radius: 5px;
      position: static;

      -webkit-appearance: none;
      -moz-appearance: none;
      text-indent: 1px;
      text-overflow: "";

      option {
        width: 100%;
      }
    }

    svg {
      width: 10px;
      height: 10px;
      margin-left: -10px;
      position: absolute;
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
      color: var(--color-grey0);
      font-size: var(--font-size-headline);
      font-weight: var(--font-weight-headline);
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
