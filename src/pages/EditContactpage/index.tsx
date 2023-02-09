import FormContactEdit from "../../components/FormContactEdit";
import HeaderEditContact from "../../components/HeaderEditContact";

import { RegisterPageStyled } from "./styles";

const EditContactPage = () => {
  return (
    <RegisterPageStyled>
      <HeaderEditContact />
      <FormContactEdit />
    </RegisterPageStyled>
  );
};

export default EditContactPage;
