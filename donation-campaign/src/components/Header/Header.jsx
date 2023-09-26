import { useContext } from "react";
import { useLocation } from "react-router-dom";
import Nav from "../Nav/Nav";
import { CrtContext } from "../../Layout/Layout";

const Header = () => {
  const searchBtnClick = useContext(CrtContext);
  const { pathname } = useLocation();

  function handelSearchData(e) {
    console.log(e.text);
  }

  return (
    <header>
      {pathname === "/" ? (
        <figure className="relative h-banarHeight w-full">
          <img
            className="h-full w-full object-cover object-top"
            src="./Images/banar-paiture.jpg"
            alt="nature image"
          />
          <figcaption
            className="absolute inset-0 h-banarHeight w-full border-white bg-white/75 
          "
          >
            <Nav />
            <h2 className="text-center sm:text-5xl text-2xl font-bold sm:mt-28 mt-10 mx-3 mb-4 sm:mb-10">
              I Grow By Helping People In Need
            </h2>

            <div className="bg-white sm:mx-auto mx-2 sm:w-customInput max-w-72 flex items-center border rounded-lg">
              <input
                onChange={handelSearchData}
                className="text-sm p-3  w-3/4 outline-none rounded-l-lg"
                type="text"
                name="text"
                placeholder="Search here...."
              />
              <input
                onClick={() => {
                  searchBtnClick("Hello Seemol");
                }}
                className="btn bg-primaryColr w-1/4 border-2 border-primaryColr text-white font-semibold rounded-r-lg"
                type="button"
                value="Search"
              />
            </div>
          </figcaption>
        </figure>
      ) : (
        <Nav />
      )}
    </header>
  );
};

export default Header;
