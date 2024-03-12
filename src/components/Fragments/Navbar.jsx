import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setDarkMode } from "../../redux/reducers/darkModeReducers";
import { useDispatch, useSelector } from "react-redux";
const Navbar = ({ active }) => {
  const token = localStorage.getItem("token");
  const [navStyle, setNavStyle] = useState("");
  const navigate = useNavigate();
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);
  const dispatch = useDispatch();
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
    <nav
      className={`navbar navbar-expand-lg sticky-top ${navStyle} ${
        isDarkMode && " navbar-dark"
      }`}
    >
      <div className="container-lg">
        <Link className="navbar-brand" to="/">
          ReqRes
        </Link>
        {token ? (
          <>
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
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
              <button
                className="btn btn-outline-secondary rounded-pill ms-2 border-0"
                onClick={() => dispatch(setDarkMode())}
              >
                <i
                  className={`bi ${
                    isDarkMode
                      ? "bi-brightness-high-fill"
                      : "bi-moon-stars-fill"
                  } `}
                ></i>
                {isDarkMode ? " Light" : " Dark"}
              </button>
            </div>
          </>
        ) : (
          <>
            <button
              className="btn btn-outline-secondary rounded-pill ms-2 "
              onClick={() => dispatch(setDarkMode())}
            >
              <i
                className={`bi ${
                  isDarkMode ? "bi-brightness-high-fill" : "bi-moon-stars-fill"
                } `}
              ></i>
              {isDarkMode ? " Light" : " Dark"}
            </button>
          </>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
