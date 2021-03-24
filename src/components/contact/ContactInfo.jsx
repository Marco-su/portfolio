import "./ContactInfo.css";

const ContactInfo = ({ icon, method, info }) => {
  return (
    <div className="method">
      {icon}
      <span>{method}</span>
      <div className="contact-info-container">
        <span className="contact-info">{info}</span>
      </div>
    </div>
  );
};

export default ContactInfo;
