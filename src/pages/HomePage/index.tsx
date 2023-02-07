import HeaderHome from "../../components/HeaderHome";
import HomeMain from "../../components/HomeMain";

import { HomePageStyled } from "./styles";

const HomePage = () => {
  return (
    <HomePageStyled>
      <HeaderHome />

      <HomeMain />
    </HomePageStyled>
  );
};

export default HomePage;
