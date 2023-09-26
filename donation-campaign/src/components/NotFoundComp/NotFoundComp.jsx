import PropTypes from "prop-types";
const NotFoundComp = ({ sarceText }) => {
  return (
    <div className="text-3xl font-bold text-center mt-20">
      No data found. Your Search Text is{" "}
      <span className="bg-slate-500 p-2 rounded-md text-gray-100">
        {sarceText}
      </span>
    </div>
  );
};

NotFoundComp.propTypes = {
  sarceText: PropTypes.string.isRequired,
};

export default NotFoundComp;
