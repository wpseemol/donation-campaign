import PropTypes from "prop-types";
const NotFoundComp = ({ sarceText }) => {
  return (
    <div className="text-3xl font-bold text-center mt-20">
      <h2>
        Showing results for
        <span className="bg-slate-500 p-2 rounded-md text-gray-100 ml-3">
          {sarceText}
        </span>
        <p className="text-xl my-10">No Data Found</p>
      </h2>
      <a href="/">
        <button className="btn btn-success capitalize">Reload Page</button>
      </a>
    </div>
  );
};

NotFoundComp.propTypes = {
  sarceText: PropTypes.string.isRequired,
};

export default NotFoundComp;
