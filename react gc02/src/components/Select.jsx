import PropTypes from "prop-types";

export default function Select({ categories, categoryId, onChange }) {
  return (
    <div>
      <label htmlFor="CategoryId" className="text-md font-medium text-gray-900">
        Category :
      </label>
      <select
        name="CategoryId"
        id="CategoryId"
        value={categoryId}
        className="border border-gray-300 text-gray-900 text-center text-md rounded-lg transition duration-150 ease-in-out bg-gray-50 text-base focus:ring-2 focus:outline-none focus:ring-primary focus:ring-offset-0 focus:border-primary block w-full p-2.5 "
        onChange={onChange}
      >
        <option className="text-gray-500" value="" selected disabled>
          —————— Select Category ——————
        </option>
        {categories.map((category, index) => {
          return (
            <option
              key={index}
              value={category.id}
              selected={category.id === categoryId}
            >
              {category.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}

Select.propTypes = {
  categories: PropTypes.array,
  categoryId: PropTypes.number,
  onChange: PropTypes.func,
};
