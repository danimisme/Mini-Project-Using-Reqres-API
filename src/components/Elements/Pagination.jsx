const Pagination = ({ page, setPage }) => {
  const pages = 2;
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
    <nav aria-label="...">
      <ul className="pagination">
        <li
          className={`page-item ${page === 1 && "disabled"} `}
          onClick={() => previousPage()}
        >
          <a className="page-link">Previous</a>
        </li>
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <p
              className={`page-link ${page === number ? "active" : ""}`}
              onClick={() => setPage(number)}
            >
              {number}
            </p>
          </li>
        ))}
        <li className={`page-item ${page === pages && "disabled"} `}>
          <a className="page-link" onClick={() => nextPage()}>
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
