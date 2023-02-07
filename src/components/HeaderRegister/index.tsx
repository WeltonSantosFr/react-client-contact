import { Link } from "react-router-dom";
import { HeaderRegisterStyled } from "./styles";

const HeaderRegister = () => {
  return (
    <HeaderRegisterStyled>
      <div>
        <h1>Client Contact</h1>

        <Link to="/login">Voltar</Link>
      </div>
    </HeaderRegisterStyled>
  );
};

export default HeaderRegister;
