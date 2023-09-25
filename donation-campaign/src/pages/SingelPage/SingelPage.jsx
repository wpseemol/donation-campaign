import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function hendalarDontionClickFor(clickedId) {
  function getLsData() {
    const lsData = localStorage.getItem("donationCart");
    if (lsData) {
      return JSON.parse(lsData);
    }
    return [];
  }

  function setLsData(id) {
    const storGetData = getLsData();
    const isHasData = storGetData.find((item) => item === id);
    if (!isHasData) {
      storGetData.push(id);
      const jsonData = JSON.stringify(storGetData);
      localStorage.setItem("donationCart", jsonData);
      toast("Your Donetion is Complete. Thank you!");
    }
  }

  setLsData(clickedId);
}

const SingelPage = () => {
  // ;

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

  const params = useParams();

  const id = params?.item.split("-")[1];
  const clickedData = donationData.find((element) => element.id === id);
  const {
    category,
    title,
    image_url,

    description,

    text_color,
    price,
  } = clickedData || {};

  const priceBtnStyle = {
    backgroundColor: text_color,
  };

  return (
    <section>
      <div className="relative">
        <img
          className="w-full max-h-singlePageImageHeight object-cover object-center"
          src={image_url}
          alt={title + " frome " + category + "Category"}
        />
        <div className="absolute bottom-0 left-0 bg-singlePageBgClr w-full">
          <button
            onClick={() => {
              hendalarDontionClickFor(id);
            }}
            className="m-9 text-xl text-white font-semibold px-6 py-4 rounded-md"
            style={priceBtnStyle}
          >
            <p>Donate ${Math.round(price)}</p>
          </button>
        </div>
      </div>
      <div className="mt-14">
        <h2 className="text-singlePgTitl font-bold">{title}</h2>
        <p className="text-lg font-normal mt-6">{description}</p>
      </div>
      <ToastContainer />
    </section>
  );
};

export default SingelPage;
