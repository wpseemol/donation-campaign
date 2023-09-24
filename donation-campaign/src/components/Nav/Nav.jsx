import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav
      className="container 2xl:container xl:container lg:container md:container sm:container  mx-auto
    flex justify-between items-center
    "
    >
      <section className="my-14">
        <img src="./Images/Logo.png" alt="" />
      </section>
      <section>
        <ul className="flex items-center gap-14">
          <li >
            <NavLink
              to={"/"}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"./donation"}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Donation
            </NavLink>{" "}
          </li>
          <li>
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
