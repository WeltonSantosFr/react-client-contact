import FormRegister from "../../components/FormRegister";
import HeaderRegister from "../../components/HeaderRegister";
import { RegisterPageStyled } from "./styles";

const RegisterPage = () => {
  return (
    <RegisterPageStyled>
      <HeaderRegister />
      <FormRegister />
    </RegisterPageStyled>
  );
};

export default RegisterPage;
