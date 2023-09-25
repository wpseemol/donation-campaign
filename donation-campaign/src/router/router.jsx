import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Donation from "../pages/Donation/Donation";
import Statistics from "../pages/Statistics/Statistics";
import SingelPage from "../pages/SingelPage/SingelPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/donation",
        element: <Donation />,
        loader: () => fetch("/dontion-campaign.json"),
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/:item",
        element: <SingelPage />,
      },
    ],
  },
]);

export default router;
