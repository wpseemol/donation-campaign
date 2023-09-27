import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Donation from "../pages/Donation/Donation";
import Statistics from "../pages/Statistics/Statistics";
import SingelPage from "../pages/SingelPage/SingelPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import axios from "axios";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Layout />,
        loader: () => axios.get("/dontion-campaign.json"),
      },
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
        path: "/:item",
        element: <SingelPage />,
        loader: () => axios.get("/dontion-campaign.json"),
      },
    ],
  },
]);

export default router;
