import FormContactRegister from "../../components/FormContactRegister";
import HeaderRegister from "../../components/HeaderRegister";
import { RegisterPageStyled } from "./styles";

const RegisterContactPage = () => {
  return (
    <RegisterPageStyled>
      <HeaderRegister />
      <FormContactRegister />
    </RegisterPageStyled>
  );
};

export default RegisterContactPage;
