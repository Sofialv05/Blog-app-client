import PropTypes from "prop-types";

export default function CategoryFilter({ setSelectedCategory, categories }) {
  const handleFilter = (e) => {
    setSelectedCategory(e.target.value);
    // console.log(e.target.value);
  };

  return (
    <div>
      <label htmlFor="CategoryId" className="text-lg font-bold text-sub3 mr-4">
        Filter :
      </label>
      <select
        name="CategoryId"
        id="CategoryId"
        className="border border-gray-300 text-gray-900 text-center text-sm rounded-lg transition duration-150 ease-in-out bg-gray-50 focus:ring-2 focus:outline-none focus:ring-sub2 focus:ring-offset-0 focus:border-sub2 w-auto p-2 "
        onChange={handleFilter}
      >
        <option value="" selected>
          Show All
        </option>
        {categories.map((category, index) => {
          return (
            <option key={index} value={category.id}>
              {category.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}

CategoryFilter.propTypes = {
  setSelectedCategory: PropTypes.string,
  categories: PropTypes.array,
};
