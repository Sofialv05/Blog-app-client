import PropTypes from "prop-types";

export default function Search({ search, setSearch, submitSearch }) {
  const handleSearch = (event) => {
    event.preventDefault();
    submitSearch(search);
  };

  return (
    <form className="flex items-center gap-3 w-full" onSubmit={handleSearch}>
      <input
        type="search"
        name="keyword"
        id="keyword"
        placeholder="Search by title"
        className="w-full transition duration-150 ease-in-out block py-2 pl-5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:outline-none focus:ring-sub2 focus:ring-offset-0 focus:border-sub2 px-4"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="pl-3 submit" className="items-center">
        <svg
          className="w-7 h-7 text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </button>
    </form>
  );
}

Search.propTypes = {
  search: PropTypes.string,
  setSearch: PropTypes.string,
  submitSearch: PropTypes.func,
};
