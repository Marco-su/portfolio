import "./myServices.css";
import frontLogo from "../../assets/icons/computer.svg";
import backLogo from "../../assets/icons/database.svg";

const MyServices = () => {
  return (
    <div id="services">
      <div className="text-box">
        <h2>Services</h2>
        <p>
          Creating your website is the first step. To provide the best
          experience for your users and have a website in excellent condition
          and with the improvements offered by new technologies, it is an
          excellent idea to carry out regular maintenance.
        </p>
        <p>For all this and much more, you can count on me.</p>
      </div>

      <div className="logos">
        <div className="logo-box">
          <img src={frontLogo} alt="FrontEnd" />
          <span>Front-end</span>
        </div>
        <div className="logo-box">
          <img src={backLogo} alt="FrontEnd" />
          <span>Back-end</span>
        </div>
      </div>
    </div>
  );
};

export default MyServices;
