import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ active }) => {
  const [navStyle, setNavStyle] = useState("");
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      setNavStyle("bg-dark navbar-dark");
    } else {
      setNavStyle("");
    }
  });

  return (
    <nav className={`navbar navbar-expand-lg sticky-top ${navStyle}`}>
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
              <Link
                className={`nav-link ${active === "User" && "active"}`}
                to="/user/1"
              >
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
