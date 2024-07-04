import PropTypes from "prop-types";

export function SubmitButton({ text }) {
  return (
    <button
      type="submit"
      className="w-full text-white transition ease-in-out duration-300 bg-primary hover:bg-sub font-medium rounded-lg text-sm px-5 py-2.5 text-center"
    >
      {text}
    </button>
  );
}

SubmitButton.propTypes = {
  text: PropTypes.string,
};

export function Button({ color, text, handle }) {
  return (
    <button
      className={
        "text-white rounded-md px-4 py-2 transition ease-in-out duration-300 " +
        color
      }
      onClick={handle}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
  handle: PropTypes.func,
};
