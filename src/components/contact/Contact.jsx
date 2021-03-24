import "./Contact.css";
import ContactInfo from "./ContactInfo";

const Contact = () => {
  return (
    <div id="contact">
      <h2>Contact</h2>
      <div className="contact-methods">
        <ContactInfo
          icon={<i className="fas fa-envelope"></i>}
          method="Email"
          info="marco_subero1996@hotmail.com"
        />

        <ContactInfo
          icon={<i className="fab fa-whatsapp"></i>}
          method="WhatsApp"
          info="+584268062855"
        />
      </div>
    </div>
  );
};

export default Contact;
