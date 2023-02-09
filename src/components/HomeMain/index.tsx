import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api";
import { Contact, HomeMainStyled } from "./styles";

interface IContact {
  id: string;
  name: string;
  email: string;
  phone: string;
  registry_date: string;
  isActive: boolean;
}

const HomeMain = () => {
  let navigate = useNavigate();
  const [contacts, setContacts] = useState<Array<IContact>>();
  useEffect(() => {
    let token = localStorage.getItem("clientToken");

    api
      .get("/contact", { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        setContacts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const [token] = useState(window.localStorage.getItem("clientToken"));

  useEffect(() => {
    token === null && navigate("/login");
  }, [token, navigate]);
  return (
    <HomeMainStyled>
      {contacts?.map((contact) => {
        return (
          <Contact key={contact.id}>
            <p>{contact.name}</p>
            <p>{contact.email}</p>
            <p>{contact.phone}</p>
            <p>{contact.registry_date}</p>
            <p>{contact.isActive ? "ATIVO" : "INATIVO"}</p>
            <button
              onClick={() => {
                navigate("/editContact");
                localStorage.setItem("contactEmail", contact.email);
              }}
            >
              Editar
            </button>
          </Contact>
        );
      })}
    </HomeMainStyled>
  );
};

export default HomeMain;
