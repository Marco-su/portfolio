import "./Contact.css";

const Contact = () => {
  return (
    <div id="contact">
      <h2>Contact</h2>
      <div id="contact-methods">
        <div className="method">
          <i className="fas fa-envelope"></i>
          <span>Email</span>
          <div className="contact-direction-container">
            <span className="contact-direction">
              marco_subero1996@hotmail.com
            </span>
          </div>
        </div>
        <div className="method">
          <i className="fab fa-whatsapp"></i>
          <span>WhatsApp</span>
          <div className="contact-direction-container">
            <span className="contact-direction">+584268062855</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
