import Nav from "../Nav/Nav";

const Header = () => {
  return (
    <header>
      <figure className="relative h-banarHeight w-full">
        <img
          className="h-full w-full object-cover object-top"
          src="./Images/banar-paiture.jpg"
          alt="nature image"
        />
        <figcaption
          className="absolute inset-0 h-banarHeight w-full border-white bg-white/75 
          "
        >
          <Nav />
        </figcaption>
      </figure>
    </header>
  );
};

export default Header;
