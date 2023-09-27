import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Donation from "../pages/Donation/Donation";
import Statistics from "../pages/Statistics/Statistics";
import SingelPage from "../pages/SingelPage/SingelPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import axios from "axios";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    loader: () => axios.get("/dontion-campaign.json"),
    children: [
      {
        path: "/donation",
        element: <Donation />,
        loader: () => axios.get("/dontion-campaign.json"),
      },
      {
        path: "/statistics",
        element: <Statistics />,
        loader: () => axios.get("/dontion-campaign.json"),
      },
      {
        path: "/items/:item",
        element: <SingelPage />,
        loader: () => axios.get("/dontion-campaign.json"),
      },
    ],
  },
]);

export default router;
