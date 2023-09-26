import { createContext, useState } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const CrtContext = createContext(null);

const Layout = () => {
  const [srcText, setSrcText] = useState("");

  function handalSearchBtnClick(e) {
    //srchDataPass("click search btn" + e);

    if (e) {
      setSrcText(e.toLowerCase());
    } else {
      toast("Your input fill is nothing");
    }
  }

  return (
    <>
      <CrtContext.Provider value={handalSearchBtnClick}>
        <Header></Header>
        <Main passData={srcText}></Main>
        <ToastContainer />
        <Footer></Footer>
      </CrtContext.Provider>
    </>
  );
};

export default Layout;
