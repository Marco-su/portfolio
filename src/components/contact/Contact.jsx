import "./Contact.css";
import ContactInfo from "./ContactInfo";

const Contact = () => {
  return (
    <div id="contact">
      <h2 className="subtitle">Contact</h2>
      <div className="contact-methods">
        <ContactInfo
          icon={<i className="fas fa-envelope"></i>}
          method="Email"
          info="marco_subero1996@hotmail.com"
          href="mailto:marco_subero1996@hotmail.com"
        />

        <ContactInfo
          icon={<i className="fab fa-whatsapp"></i>}
          method="WhatsApp"
          info="+584268062855"
          href="https://wa.link/libzsn"
        />
      </div>
      <div className="aaa"></div>
    </div>
  );
};

export default Contact;
