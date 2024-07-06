import PropTypes from "prop-types";

export default function PaginationButton({
  paginationOption,
  currentPage,
  setCurrentPage,
}) {
  const { totalPage } = paginationOption;

  const handleChangePage = (page) => {
    if (page < 1 || page > totalPage) return;
    setCurrentPage(page);
  };

  const pageNumbers = () => {
    let numbers = [];
    for (let i = 1; i <= totalPage; i++) {
      numbers.push(
        <li key={i}>
          <button
            className={
              "flex items-center justify-center px-4 h-10  font-semibold" +
              (currentPage === i
                ? "text-white border border-gray-300 bg-gray-200 hover:bg-f"
                : "text-primary leading-tight bg-white border border-gray-300 hover:bg-gray-100 ")
            }
            onClick={() => handleChangePage(i)}
          >
            {i}
          </button>
        </li>
      );
    }

    return numbers;
  };

  return (
    <nav aria-label="Page navigation" className="flex justify-center">
      <ul className="inline-flex -space-x-px text-base h-10">
        <li>
          <button
            className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700"
            onClick={() => handleChangePage(currentPage - 1)}
          >
            Previous
          </button>
        </li>
        {pageNumbers()}
        <li>
          <button
            className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700"
            onClick={() => handleChangePage(currentPage + 1)}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
}

PaginationButton.propTypes = {
  paginationOption: PropTypes.object,
  currentPage: PropTypes.number,
  setCurrentPage: PropTypes.number,
};
