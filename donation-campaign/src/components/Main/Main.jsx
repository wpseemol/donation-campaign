import {  useEffect, useState } from "react";
import { Outlet, useLocation, useNavigation } from "react-router-dom";
import axios from "axios";
import MainDisplayCard from "../MainDisplayCard/MainDisplayCard";


const Main = () => {
   const nevection = useNavigation();
   const isLoadingProducts = nevection.state === "loading";
   const { pathname } = useLocation();
   


  const [donationData, getDonationData] = useState([]);
  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get("./dontion-campaign.json");
        getDonationData(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getData();
  }, []);



  return (
    <main className="container 2xl:container xl:container lg:container md:container sm:container  mx-auto">
      {isLoadingProducts && (
        <div className="text-center mt-60">
          <span className="loading loading-bars loading-lg"></span>
        </div>
      )}
      {pathname === "/" ? (
        <section className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 mt-20 mx-2">
          {donationData.map((data) => (
            <MainDisplayCard data={data} key={data.id}  />
          ))}
        </section>
      ) : (
        <Outlet />
      )}
    </main>
  );
};

export default Main;
