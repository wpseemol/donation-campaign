
import { useLocation } from "react-router-dom";
import Nav from "../Nav/Nav";

import banarPaiture from "../../assets/Images/banarPaiture.jpg";


const Header = () => {
  
  const { pathname } = useLocation();

  

  return (
    <header>
      {pathname === "/" ? (
        <figure className="relative h-banarHeight w-full">
          <img
            className="h-full w-full object-cover object-top"
            src={banarPaiture}
            alt="nature image"
          />
          <figcaption
            className="absolute inset-0 h-banarHeight w-full border-white bg-white/75 
          "
          >
            <Nav />
            <h2 className="text-center sm:text-2xl md:text-5xl text-xl font-bold sm:mt-28  mx-3 mb-4 sm:mb-10 mt-60">
              I Grow By Helping People In Need
            </h2>

            
          </figcaption>
        </figure>
      ) : (
        <Nav />
      )}
    </header>
  );
};

export default Header;
