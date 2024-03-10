import Footer from "../Fragments/Footer";
import Navbar from "../Fragments/Navbar";
import { useSelector } from "react-redux";

const Layout = ({ children, navActive }) => {
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);
  return (
    <div className={`container-fluid p-0 m-0 ${isDarkMode && "dark-mode"}`}>
      <Navbar active={navActive} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
