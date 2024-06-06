import React from "react";
import "./ContactPage.css";

const ContactPage = () => {
  return (
    <>
    <div className="parent-container">
      <div className="container">
        <h2 className="my-8 text-white" style={{ fontSize: "20px" }}>
          Contact
        </h2>
        <form action="https://api.web3forms.com/submit" method="POST">  {/* contact form api service  */}
          <input type="hidden" name="access_key" value="6d212112-cb26-459d-bec9-df5692dbe60d"/>
          <ul className="contact">
            <li>
              <input type="text" name="name" placeholder="Name" />
            </li>
            <li>
              <input
                type="email"
                id=""
                name="email"
                placeholder="Email Address (required)"
                required
              />
            </li>
            <li>
              <input
                type="text"
                id=""
                name="subject"
                placeholder="Subject (required)"
                required
              />
            </li>
          </ul>

          <textarea
            id=""
            name="message"
            placeholder="Enquiry details (required)"
            required
          />
          <button type="submit"> Send </button>
        </form>
      </div>
      </div>
    </>
  );
};

export default ContactPage;
