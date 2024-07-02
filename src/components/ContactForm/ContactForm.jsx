import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Linkedin from "../../assets/icons/linkedin logo.png";
import Github from "../../assets/icons/github-mark-white.png";
import "./contact.css";

function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_x9bdidq", "template_v0ul5ik", form.current, {
        publicKey: "_VFZ2FlY-NKytzoyr",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section className="contact-section">
      <h1>CONTACT</h1>
      <form ref={form} onSubmit={sendEmail} className="form-container">
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
      <section>
        <div className="contact-icon-container">
          <img
            src={Linkedin}
            alt="icon"
            className="link-icon"
            onClick={() =>
              window.open("https://www.linkedin.com/in/yann-lahellec/", "blank")
            }
          />
          <img
            src={Github}
            alt=""
            className="git-icon"
            onClick={() =>
              window.open("https://github.com/YannLahellec", "blank")
            }
          />
        </div>
      </section>
    </section>
  );
}

export default ContactForm;
