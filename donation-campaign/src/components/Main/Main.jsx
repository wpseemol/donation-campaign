import { Outlet, useLocation, useNavigation } from "react-router-dom";
import MainDisplayCard from "../MainDisplayCard/MainDisplayCard";
import useMySiteDataFatch from "../../myHooks/MySiteDataFatch/MySiteDataFatch";
import { useEffect, useState } from "react";

const Main = (props) => {
  const nevection = useNavigation();
  const isLoadingProducts = nevection.state === "loading";
  const { pathname } = useLocation();

  // console.log(props);

  const alldata = useMySiteDataFatch();

  return (
    <main className="container 2xl:container xl:container lg:container md:container sm:container  mx-auto">
      {isLoadingProducts && (
        <div className="text-center mt-60">
          <span className="loading loading-bars loading-lg"></span>
        </div>
      )}
      {pathname === "/" ? (
        <section className="grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6 mt-20 mx-2">
          {alldata.map((data) => (
            <MainDisplayCard data={data} key={data.id} />
          ))}
        </section>
      ) : (
        <Outlet />
      )}
    </main>
  );
};

export function srchDataPass(srcData) {
  <Main data={srcData}></Main>;
  console.log(srcData);
}

export default Main;
