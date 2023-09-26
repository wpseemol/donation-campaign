import axios from "axios";
import { useEffect, useState } from "react";

const useMySiteDataFatch = () => {
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

  return donationData;
};

export default useMySiteDataFatch;
