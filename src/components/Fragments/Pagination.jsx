import { useSelector } from "react-redux";

const Pagination = ({ page, pages, setPage }) => {
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);
  const pageNumbers = [];
  for (let i = 1; i <= pages; i++) {
    pageNumbers.push(i);
  }

  const previousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const nextPage = () => {
    if (page < pages) {
      setPage(page + 1);
    }
  };

  return (
    <nav aria-label="pagination" className="mt-3">
      <ul className="pagination">
        <li
          className={`page-item ${page === 1 && "disabled"}  `}
          onClick={() => previousPage()}
        >
          <p className={`page-link  ${isDarkMode && "dark-pagination"}`}>
            Previous
          </p>
        </li>
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={` ${
              page !== number - 1 &&
              page !== number &&
              page !== number + 1 &&
              "d-none d-md-block"
            }  page-item`}
          >
            <p
              className={`page-link ${page === number && "active"} ${
                isDarkMode && "dark-pagination"
              }`}
              onClick={() => setPage(number)}
            >
              {number}
            </p>
          </li>
        ))}
        <li className={`page-item ${page === pages && "disabled"} `}>
          <p
            className={`page-link ${isDarkMode && "dark-pagination"}`}
            onClick={() => nextPage()}
          >
            Next
          </p>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
