import { createContext } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";

export const CrtContext = createContext(null);

const Layout = () => {
  return (
    <>
      <CrtContext.Provider value={handalSearchBtnClick}>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </CrtContext.Provider>
    </>
  );
};

function handalSearchBtnClick(e) {
  console.log("click search btn" + e);
}

export default Layout;
