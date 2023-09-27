import Header from "../../components/Header/Header";
import { Outlet } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Home;
