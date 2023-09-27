import { useState } from "react";
import Footer from "../components/Footer/Footer";
import Main from "../components/Main/Main";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLoaderData, useParams } from "react-router-dom";

const Layout = (e) => {
  const getSrhText = useParams();

  const allData = useLoaderData().data || [];

  const [haveSarchText, setHaveSarchText] = useState("");
  const [sarchDatas, setSarchDatas] = useState([]);

  const [searchText, setSearchText] = useState("");
  function handelSearchData(e) {
    setSearchText(e.target.value);
  }

  //srchDataPass("click search btn" + e);
  function handalSarchebtunClick(schText) {
    if (schText) {
      const searchData = allData.filter(
        (data) => data.category.toLowerCase() === schText.toLowerCase()
      );
      const sarcheDatas = searchData || [];
      setSarchDatas(sarcheDatas);
      setHaveSarchText(schText);
    } else {
      toast("Your input fill is nothing");
    }
  }

  return (
    <>
      <div className="relative  w-full  px-4">
        <div className="absolute sm:-top-myTop -top-myTopsm left-1/2 transform -translate-x-1/2 w-full  z-10 px-2">
          <div className=" bg-white sm:mx-auto sm:w-customInput flex items-center border w-full rounded-lg ">
            <input
              onChange={handelSearchData}
              className="text-sm p-3  w-5/6 sm:w-3/4 outline-none rounded-l-lg"
              type="text"
              name="text"
              placeholder="Search here...."
            />
            <input
              onClick={() => handalSarchebtunClick(searchText)}
              className="btn bg-primaryColr  sm:block w-2/6 sm:w-1/4 border-2 border-primaryColr text-white font-semibold rounded-r-lg"
              type="button"
              value="Search"
            />
          </div>
        </div>
      </div>

      <Main
        passData={!haveSarchText ? allData : sarchDatas}
        sarceText={haveSarchText}
      ></Main>
      <ToastContainer />

      <Footer></Footer>
    </>
  );
};

export default Layout;
