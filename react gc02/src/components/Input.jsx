import PropTypes from "prop-types";

export function Input({ label, name, value, onChange }) {
  return (
    <div className="mb-5">
      <label
        htmlFor={name}
        className="block mb-2 text-md font-medium text-gray-900"
      >
        {label} :
      </label>
      <input
        type="text"
        id={name}
        name={name}
        className="block w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg transition duration-150 ease-in-out focus:ring-2 focus:outline-none focus:ring-primary focus:ring-offset-0 focus:border-primary"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export function InputLarge({ label, name, value, onChange }) {
  return (
    <div className="my-5">
      <label
        htmlFor={name}
        className="block mb-2 text-md font-medium text-gray-900"
      >
        {label} :
      </label>
      <textarea
        id={name}
        name={name}
        className="h-72 block w-full p-3  text-gray-900 border border-gray-300 rounded-lg transition duration-150 ease-in-out bg-gray-50 text-base focus:ring-2 focus:outline-none focus:ring-primary focus:ring-offset-0 focus:border-primary"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

InputLarge.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
