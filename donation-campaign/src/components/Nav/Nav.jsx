import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav
      className="container 2xl:container xl:container lg:container md:container sm:container  mx-auto
    sm:flex justify-between items-center text-textColor
    "
    >
      <section className="my-14 flex justify-center sm:inline">
        <Link to={"/"}>
          <img src="./Images/Logo.png" alt="" />
        </Link>
      </section>

      <section>
        <ul
          className="
        text-center bg-slate-50 m-8 p-5 sm:m-0 sm:p-0 rounded-xl sm:bg-inherit sm:text-left  sm:bg-none
        sm:flex items-center gap-14 font-normal text-xl"
        >
          <li className="">
            <NavLink
              to={"/"}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li className="my-2">
            <NavLink
              to={"./donation"}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Donation
            </NavLink>{" "}
          </li>
          <li className="">
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
      </section>
    </nav>
  );
};

export default Nav;
