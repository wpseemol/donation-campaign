import { Outlet, useLocation, useNavigation } from "react-router-dom";
import MainDisplayCard from "../MainDisplayCard/MainDisplayCard";
import NotFoundComp from "../NotFoundComp/NotFoundComp";
import PropTypes from "prop-types";

const Main = ({ passData, sarceText }) => {
  const nevection = useNavigation();
  const isLoadingProducts = nevection.state === "loading";
  const { pathname } = useLocation();

  if (passData.length === 0) {
    return (
      <main className="myContainer">
        {isLoadingProducts && (
          <div className="text-center mt-60">
            <span className="loading loading-bars loading-lg"></span>
          </div>
        )}
        {pathname === "/" ? (
          !sarceText ? (
            <div className="text-center mt-60">
              <span className="loading loading-bars loading-lg"></span>
            </div>
          ) : (
            <NotFoundComp sarceText={sarceText} />
          )
        ) : (
          <Outlet />
        )}
      </main>
    );
  } else {
    return (
      <main className="myContainer">
        {isLoadingProducts && (
          <div className="text-center mt-60">
            <span className="loading loading-bars loading-lg"></span>
          </div>
        )}
        {pathname === "/" ? (
          <section className="grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6 mt-20 mx-2">
            {passData.map((data) => (
              <MainDisplayCard data={data} key={data.id} />
            ))}
          </section>
        ) : (
          <Outlet />
        )}
      </main>
    );
  }
};

Main.propTypes = {
  passData: PropTypes.array.isRequired,
  sarceText: PropTypes.string.isRequired,
};

export default Main;
