import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import CardComponent from "../../components/CardComponent/CardComponent";
import { getLsData } from "../../myHooks/LsSetGet";

const Donation = () => {
  const allDonatItem = useLoaderData().data || [];
  const [dntItems, setDntItems] = useState([]);

  const [dataLlengtth, setDatalenth] = useState(4);

  useEffect(() => {
    const donationItems = getLsData();

    if (donationItems.length > 0) {
      const donetItem = allDonatItem.filter((donItm) =>
        donationItems.includes(donItm.id)
      );

      setDntItems(donetItem);
    }
  }, []);

  if (dntItems.length <= 0) {
    return (
      <main className="myContainer">
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-6 mx-3 mt-48 sm:mt-0">
          {dntItems &&
            dntItems
              .slice(0, dataLlengtth)
              .map((cotent) => (
                <CardComponent key={cotent.id} content={cotent} />
              ))}
        </div>
        <div
          className={
            dntItems.length < 4 || dataLlengtth === dntItems.length
              ? "hidden"
              : "flex justify-center items-center my-14"
          }
        >
          <button
            onClick={() => setDatalenth(dntItems.length)}
            className="btn bg-green-800 text-white"
          >
            See All
          </button>
        </div>
      </main>
    );
  } else {
    return (
      <main className="myContainer mt-96 sm:mt-80 ">
        <div className="flex justify-center ">
          <h2 className="text-4xl font-bold"> Data No Found </h2>
        </div>
      </main>
    );
  }
};

export default Donation;
