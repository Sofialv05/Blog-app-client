import PropTypes from "prop-types";

export function Input({ label }) {
  return (
    <div className="mb-5">
      <label
        htmlFor="base-input"
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {label}
      </label>
      <input
        type="text"
        id="base-input"
        className="block w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg transition duration-150 ease-in-out focus:ring-2 focus:outline-none focus:ring-primary focus:ring-offset-0 focus:border-primary"
      />
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string,
};

export function InputLarge({ label }) {
  return (
    <div className="mb-5">
      <label
        htmlFor="large-input"
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {label}
      </label>
      <input
        type="text"
        id="large-input"
        className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg transition duration-150 ease-in-out bg-gray-50 text-base focus:ring-2 focus:outline-none focus:ring-primary focus:ring-offset-0 focus:border-primary"
      />
    </div>
  );
}

InputLarge.propTypes = {
  label: PropTypes.string,
};
