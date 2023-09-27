
import PropTypes from "prop-types";

const CardComponent = ({ content }) => {
  const {
    // id,
    title,
    image_url,
    category_background_color,
    text_color,
    category,
    background_color,
    price,
  } = content || {};

  const handalGoItemPage = () => {
    console.log("Navigate(`item/itme-id`);");
  };

  const DonCrtBgColor = {
    backgroundColor: background_color,
    color: text_color,
  };

  const DonCtgrBgColor = {
    backgroundColor: category_background_color,
  };

  const btnBgColor = {
    backgroundColor: text_color,
  };

  return (
    <div
      style={DonCrtBgColor}
      className="
      rounded-lg
      flex"
    >
      <div className="w-1/3 h-cardPicHeight">
        <img
          className="h-full w-full object-cover object-center rounded-l-lg"
          src={image_url}
          alt={image_url}
        />
      </div>
      <div className=" w-2/3 ml-6 mb-7 mb flex flex-col items-start justify-end">
        <h3
          style={DonCtgrBgColor}
          className="inline px-3 py-1 rounded-md text-sm font-normal"
        >
          {category}
        </h3>
        <h2 className="mt-1 text-2xl text-textColor font-semibold">{title}</h2>
        <p className="mb-2 font-semibold">${price}</p>

        <button
          onClick={handalGoItemPage}
          style={btnBgColor}
          className="btn text-white text-xl font-semibold capitalize"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

CardComponent.propTypes = {
  content: PropTypes.object.isRequired,
};

export default CardComponent;
