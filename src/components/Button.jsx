import PropTypes from "prop-types";

export function SubmitButton({ label }) {
  return (
    <button
      type="submit"
      className="w-full text-white transition ease-in-out duration-300 bg-primary hover:bg-sub font-medium rounded-lg text-sm px-5 py-2.5 text-center"
    >
      {label}
    </button>
  );
}

SubmitButton.propTypes = {
  label: PropTypes.array,
};
