import { Link } from "react-router-dom";
import Animation from "../../../aos";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Card = (props) => {
  const { avatar, id, first_name, email } = props;
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);
  useEffect(() => {
    Animation();
  }, [isDarkMode]);
  return (
    <div
      className={`card col-10 col-md-4 col-lg-3 my-3 mx-2 ${
        isDarkMode && " dark-card"
      }`}
      data-aos="fade-up"
      data-aos-delay={`${(id % 7) * 100}`}
    >
      <Link
        to={`/user/${id}`}
        style={{ textDecoration: "none", color: "black", margin: "0" }}
      >
        <div className="image-container">
          <img src={avatar} className="card-img-top img-fluid" alt="..." />
        </div>
        <div className="card-body text-center ">
          <p className="card-text fw-semibold fs-4 border-2 border-bottom">
            {first_name}
          </p>
          <p className="card-text"> {email}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
