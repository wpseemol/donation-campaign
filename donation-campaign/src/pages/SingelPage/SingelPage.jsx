import { useLoaderData, useParams } from "react-router-dom";
import { toast } from "react-toastify";
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
    } else {
      toast("Already donated!");
      console.log("chake");
    }
  }

  setLsData(clickedId);
}

const SingelPage = () => {
  const donationData = useLoaderData().data || [];

  const paramsData = useParams();

  const id = paramsData?.item?.split("-")[1];
  const clickedData = donationData.find((element) => element.id === id);
  const { category, title, image_url, description, text_color, price } =
    clickedData || {};

  const priceBtnStyle = {
    backgroundColor: text_color,
  };

  return (
    <section className="m-4 md:m-0">
      <div className="sm:relative rounded-lg">
        <img
          className="w-full rounded-lg  sm:max-h-singlePageImageHeight object-cover object-center"
          src={image_url}
          alt={title + " frome " + category + "Category"}
        />
        <div className="sm:absolute rounded-b-lg bottom-0 left-0 bg-singlePageBgClr w-full">
          <button
            onClick={() => {
              hendalarDontionClickFor(id);
            }}
            className="btn md:btn-lg sm:m-9 m-3 text-xl text-white font-semibold  rounded-md"
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
    </section>
  );
};

export default SingelPage;
