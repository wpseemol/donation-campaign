import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const MainDisplayCard = ({ data }) => {
  const {
    id,
    category,
    title,
    image_url,
    category_background_color,
    background_color,
    text_color,
  } = data || {};

  const navigate = useNavigate();

  function handelClick() {
    navigate(`/items/item-${id}`);
  }

  const crtBgColor = {
    backgroundColor: background_color,
    color: text_color,
  };

  const ctgrBgColor = {
    backgroundColor: category_background_color,
  };

  return (
    <div
      onClick={handelClick}
      style={crtBgColor}
      className="card rounded-lg flex flex-col"
    >
      <figure className="h-cardPicHeight">
        <img
          className="rounded-t-lg flex-grow-0 border"
          src={image_url}
          alt={title + " frome " + category}
        />
      </figure>
      <div className="mt-5">
        <h3
          style={ctgrBgColor}
          className=" inline ml-4 px-3 py-1 
            text-sm font-medium rounded-md"
        >
          {category}
        </h3>
        <h2 className="mb-4 ml-4 mt-3 text-xl font-semibold">{title}</h2>
      </div>
    </div>
  );
};

MainDisplayCard.propTypes = {
  data: PropTypes.object.isRequired,
};

export default MainDisplayCard;
