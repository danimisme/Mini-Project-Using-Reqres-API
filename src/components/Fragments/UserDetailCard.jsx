import { Link } from "react-router-dom";

const UserDetailCard = (props) => {
  const { first_name, last_name, email, avatar, id } = props;
  return (
    <>
      <div className="row justify-content-center gap-1">
        <div className="col-8 col-md-6 col-lg-4">
          <img
            src={avatar}
            className="img-fluid w-100 rounded"
            alt="avatar"
            data-aos="fade-right"
          />
        </div>
        <div
          className="col-10 col-md-7 col-lg-5 align-self-center"
          data-aos="fade-left"
        >
          <ul className="list-group list-group-flush ">
            <li className="list-group-item">ID : {id}</li>
            <li className="list-group-item">First Name : {first_name}</li>
            <li className="list-group-item">Last Name : {last_name}</li>
            <li className="list-group-item">Email : {email}</li>
          </ul>
        </div>
      </div>
      <div className="button-container d-flex justify-content-end col-10">
        <Link to={`/`} className="btn btn-dark">
          Back
        </Link>
      </div>
    </>
  );
};
export default UserDetailCard;
