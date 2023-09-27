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

  return (
    <>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-6 mx-3">
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
    </>
  );
};

export default Donation;
