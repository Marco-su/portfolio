import "./ContactInfo.css";

const ContactInfo = ({ icon, method, info, href }) => {
  return (
    <a
      className="method-link"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="method">
        <div className="icon">
          {icon}
          <span>{method}</span>
        </div>

        <div className="info-container">
          <span className="contact-info">{info}</span>
        </div>
      </div>
    </a>
  );
};

export default ContactInfo;
