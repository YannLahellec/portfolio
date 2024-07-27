import { useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import emailjs from "@emailjs/browser";
import {icons} from "../../assets";
import "react-toastify/dist/ReactToastify.css";
import "./contact.css";

function ContactForm() {
  const form = useRef();

  console.log(form);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        `${import.meta.env.VITE_YOUR_SERVICE_ID}`,
        `${import.meta.env.VITE_YOUR_TEMPLATE_ID}`,
        form.current,
        {
          publicKey: `${import.meta.env.VITE_YOUR_PUBLIC_KEY}`,
        }
      )
      .then(
        () => {
          toast.success("Message envoyé", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section className="contact-section" id="contact">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <h1>CONTACT</h1>
      <form ref={form} onSubmit={sendEmail} className="form-container">
        <label>Name</label>
        <input
          type="text"
          name="user_name"
          className="input-contact"
          placeholder="Nom..."
          required
        />
        <label>Email</label>
        <input
          type="email"
          name="user_email"
          className="input-contact"
          placeholder="...@mail.com"
          required
        />
        <label>Message</label>
        <textarea
          name="message"
          className="input-contact-message"
          placeholder="Message"
          required
        />
        <input type="submit" value="ENVOYER" className="send-input" />
      </form>
      <section>
        <div className="contact-icon-container">
          <img
            src={icons.linkedin}
            alt="icon"
            className="link-icon"
            onClick={() =>
              window.open("https://www.linkedin.com/in/yann-lahellec/", "blank")
            }
          />
          <img
            src={icons.github}
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
