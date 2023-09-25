import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";




    

const SingelPage = () => {

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
   
   console.log(donationData, id);

   const clickedData = donationData.find((element) => element.id === id);
   console.log(clickedData);
   const {
     category,
     title,
     image_url,
     category_background_color,
     description,
     background_color,
     text_color,
     price
   } = clickedData || {};

   


  return (
    <section>
      <div>
        <img src={image_url} alt={title + " frome " + category + "Category"} />
        <div>
          <p>{price}</p>
        </div>
      </div>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </section>
  );
};

export default SingelPage;
