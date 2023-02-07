import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api";
import { Contact, HomeMainStyled } from "./styles";

interface IContact {
  name: string;
  email: string;
  phone: string;
  registry_date: string;
  is_active: boolean;
}

const HomeMain = () => {
  let navigate = useNavigate();
  const [contacts, setContacts] = useState<Array<IContact>>();
  useEffect(() => {
    let token = localStorage.getItem("clientToken");
    console.log(token);
    api
      .get("/contact", { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        setContacts(res.data);
        console.log(contacts);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  const [token] = useState(window.localStorage.getItem("clientToken"));

  useEffect(() => {
    token === null && navigate("/login");
  }, [token, navigate]);
  return (
    <HomeMainStyled>
      {contacts?.map((contact) => {
        return (
          <Contact>
            <p>{contact.name}</p>
            <p>{contact.email}</p>
            <p>{contact.phone}</p>
            <p>{contact.registry_date}</p>
            <p>{contact.is_active}</p>
          </Contact>
        );
      })}
    </HomeMainStyled>
  );
};

export default HomeMain;
