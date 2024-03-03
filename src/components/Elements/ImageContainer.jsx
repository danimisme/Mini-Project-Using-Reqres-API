import Animation from "../../../aos";
import { useEffect } from "react";

const ImageContainer = (props) => {
  useEffect(() => {
    Animation();
  }, []);
  const { src, alt = "image" } = props;
  return (
    <div
      className=" image-form col-4 d-none d-lg-block"
      style={{ zIndex: "1" }}
    >
      <img src={src} alt={alt} className="img-fluid" data-aos="fade-right" />
    </div>
  );
};

export default ImageContainer;
