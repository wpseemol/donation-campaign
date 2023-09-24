
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Donation from '../pages/Donation/Donation';
import Statistics from '../pages/Statistics/Statistics';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/donation",
        element: <Donation />,
      },
      {
        path: "/statistics",
        element: <Statistics />
      },
    ],
  },
]);

export default router;