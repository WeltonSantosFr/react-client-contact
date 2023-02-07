import { Link } from "react-router-dom";

import { HeaderHomeStyled } from "./styles";

const HeaderHome = () => {
  return (
    <HeaderHomeStyled>
      <h1>Client Contact</h1>
      <Link to="/contact">Novo Contato</Link>
      <Link
        onClick={() => {
          window.localStorage.clear();
        }}
        to="login"
      >
        Voltar
      </Link>
    </HeaderHomeStyled>
  );
};

export default HeaderHome;
