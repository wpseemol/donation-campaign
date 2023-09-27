import { createContext, useState } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLoaderData } from "react-router-dom";

export const CrtContext = createContext(null);

const Layout = () => {
  const allData = useLoaderData().data || [];
  
  const [sarchDatas, setSarchDatas] = useState([]);
  const [isSearData, setIsSarData] = useState(false);
  const [searchrText, setSearchrText] = useState("");

  function handalSearchBtnClick(e) {
    //srchDataPass("click search btn" + e);

    if (e) {
      const searchData = allData.filter(
        (data) => data.category.toLowerCase() === e.toLowerCase()
      );
      const sarcheDatas = searchData || [];
      setSarchDatas(sarcheDatas);
      setIsSarData(true);
      setSearchrText(e);
    } else {
      toast("Your input fill is nothing");
    }
  }

  return (
    <>
      <CrtContext.Provider value={handalSearchBtnClick}>
        <Header></Header>
        <Main
          passData={!isSearData ? allData : sarchDatas}
          sarceText={searchrText}
        ></Main>
        <ToastContainer />
        <Footer></Footer>
      </CrtContext.Provider>
    </>
  );
};

export default Layout;
