import Footer from "../Fragments/Footer";
import Navbar from "../Fragments/Navbar";
import { DarkMode } from "../../context/DarkMode";
import { useContext } from "react";

const Layout = ({ children }) => {
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);

  return (
    <div className={`container-fluid p-0 m-0 ${isDarkMode && "dark-mode"}`}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
