import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import Btn from "../../SharedUI/Btn/btn";

const Footer = () => {
  return (
    <div className="bg-dark text-light text-center">
      <div className="row mx-0 my-3 py-4 ">
        <h1 className="col-12 text-uppercase text-start ps-5">get in touch</h1>
        <div className="col-12 col-md-6 col-lg-4">
          <p>
            <FontAwesomeIcon icon={faEnvelope} />
            email@gmail.com
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} />
            +201223317145
          </p>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <Btn text="Contact Me" href="#Contact" />
        </div>
        <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
          <a href="#TW">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#IN">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="#FB">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </div>
      </div>
      <div className="row  mx-0">
        <p>Copyright &copy; Nader Mohammed</p>
      </div>
    </div>
  );
};

export default Footer;
