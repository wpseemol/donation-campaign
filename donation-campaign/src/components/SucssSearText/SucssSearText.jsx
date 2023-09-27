import PropTypes from "prop-types";

const SucssSearText = ({ scussText }) => {
  return (
    <div className="text-2xl font-bold text-center mt-10">
      <h2>
        Showing results for{" "}
        <span className="bg-green-500 p-2 rounded-md text-gray-100">
          {scussText}
        </span>
      </h2>
    </div>
  );
};

SucssSearText.propTypes = {
  scussText: PropTypes.string.isRequired,
};

export default SucssSearText;
