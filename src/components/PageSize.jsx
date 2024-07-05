import PropTypes from "prop-types";

export default function PageSize({ pageSize, setPageSize }) {
  return (
    <form className="flex w-60 items-center justify-center">
      <label
        htmlFor="page-size"
        className="w-28 mr-1 text-lg font-bold text-sub3"
      >
        Page Size :
      </label>
      <select
        id="page-size"
        className="bg-gray-50 border self-center border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:outline-none focus:ring-sub2 focus:ring-offset-0 focus:border-sub2 block w-1/3 p-2.5 "
        value={pageSize}
        onChange={(e) => setPageSize(e.target.value)}
      >
        <option value="2">2</option>
        <option value="4">4</option>
        <option value="7">7</option>
        <option value="10">10</option>
      </select>
    </form>
  );
}

PageSize.propTypes = {
  pageSize: PropTypes.number,
  setPageSize: PropTypes.number,
};
