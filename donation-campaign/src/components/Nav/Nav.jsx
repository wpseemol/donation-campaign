import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/Images/Logo.png";

const Nav = () => {
  return (
    <nav className="myContainer sm:flex justify-between items-center  text-textColor m ">
      <section className="my-14 flex justify-center sm:inline">
        <Link to={"/"}>
          <img src={Logo} alt="" />
        </Link>
      </section>

      <section>
        <div className="relative w-full  px-4 ">
          <ul
            className="sm:static absolute -top-6 left-1/2 transform -translate-x-1/2 sm:transform-none
        text-center bg-slate-50  p-5 sm:m-0 sm:p-0 rounded-xl sm:bg-inherit sm:text-left  sm:bg-none
        sm:flex items-center gap-10 font-normal text-xl w-full"
          >
            <li className="hover:bg-slate-200 p-4 rounded-md duration-300">
              <NavLink
                to={"/"}
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li className="my-2 hover:bg-slate-200 p-4 rounded-md duration-300">
              <NavLink
                to={"./donation"}
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Donation
              </NavLink>{" "}
            </li>
            <li className="hover:bg-slate-200 p-4 rounded-md duration-300">
              <NavLink
                to={"./statistics"}
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Statistics
              </NavLink>{" "}
            </li>
          </ul>
        </div>
      </section>
    </nav>
  );
};

export default Nav;
