import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Donation from "../pages/Donation/Donation";
import Statistics from "../pages/Statistics/Statistics";
import SingelPage from "../pages/SingelPage/SingelPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/donation",
        element: <Donation />,
        loader: () => fetch("/dontion-campaign.json"),
      },
      {
        path: "/statistics",
        element: <Statistics />,
        loader: () => fetch("/dontion-campaign.json"),
      },
      {
        path: "/:item",
        element: <SingelPage />,
      },
    ],
  },
]);

export default router;
