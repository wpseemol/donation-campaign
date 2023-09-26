import { createContext, useState } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";

export const CrtContext = createContext(null);

const Layout = () => {
  const [srcText, setSrcText] = useState("");

  function handalSearchBtnClick(e) {
    //srchDataPass("click search btn" + e);
    setSrcText(e);
  }

  return (
    <>
      <CrtContext.Provider value={handalSearchBtnClick}>
        <Header></Header>
        <Main passData={srcText}></Main>
        <Footer></Footer>
      </CrtContext.Provider>
    </>
  );
};

export default Layout;
