import { Link } from "react-router-dom";
import { HeaderRegisterStyled } from "./styles";

const HeaderEditContact = () => {
  return (
    <HeaderRegisterStyled>
      <div>
        <h1>Client Contact</h1>

        <Link to="/home">Voltar</Link>
      </div>
    </HeaderRegisterStyled>
  );
};

export default HeaderEditContact;
