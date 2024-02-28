import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ active }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark sticky-top">
      <div className="container-lg">
        <Link className="navbar-brand" to="/">
          ReqRes
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${active === "List User" && "active"}`}
                aria-current="page"
                to="/"
              >
                List User
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${active === "User" && "active"}`}>
                User Profile
              </Link>
            </li>
          </ul>
          <button
            className="btn btn-danger rounded-pill"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
