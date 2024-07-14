import { useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import emailjs from "@emailjs/browser";
import Linkedin from "../../assets/icons/linkedin logo.png";
import Github from "../../assets/icons/github-mark-white.png";
import "react-toastify/dist/ReactToastify.css";
import "./contact.css";

function ContactForm() {
  const form = useRef();

  console.log(form)

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs
      .sendForm("service_x9bdidq", "template_v0ul5ik", form.current, {
        publicKey: "_VFZ2FlY-NKytzoyr",
      })
      .then(
        () => {
          toast.success('Message envoyé', {
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
        <input type="text" name="user_name" className="input-contact"  placeholder="Nom..." required/>
        <label>Email</label>
        <input type="email" name="user_email" className="input-contact" placeholder="...@mail.com" required/>
        <label>Message</label>
        <textarea name="message" className="input-contact-message" placeholder="Message" required />
        <input type="submit" value="ENVOYER" className="send-input"/>
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
