import FormLogin from "../../components/FormLogin";
import Header from "../../components/Header";
import { LoginPageStyled } from "./styles";

const LoginPage = () => {
  return (
    <LoginPageStyled>
      <Header />
      <FormLogin />
    </LoginPageStyled>
  );
};

export default LoginPage;
