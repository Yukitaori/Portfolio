import React, { useEffect, useState } from "react";
import Joi from "joi";
import emailjs from "@emailjs/browser";
import styles from "./Contact.module.css";

function Contact() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");
  const [formSubmit, setFormSubmit] = useState();
  const [informationMessage, setInformationMessage] = useState(null);
  const initEmailjs = () => {
    emailjs.init(import.meta.env.VITE_EMAILJS);
  };

  useEffect(() => {
    initEmailjs();
  }, []);

  const templateParams = {
    from_name: name,
    from_mail: mail,
    message: message,
  };

  const schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),

    mail: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["fr", "com", "net"] } })
      .required(),

    message: Joi.string().min(1).max(2500).required(),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmit({ name: name, mail: mail, message: message });
  };

  useEffect(() => {
    const { error, value } = schema.validate(formSubmit);
    if (formSubmit && !error) {
      emailjs.send("service_hatoyzi", "contact_form", templateParams).then(
        (response) => {
          setInformationMessage(
            "Your message has been sent successfully. Thanks!"
          );
          setName("");
          setMail("");
          setMessage("");
          setFormSubmit();
        },
        (error) => {
          setInformationMessage("There's been a problem. Try again later.");
        }
      );
    } else if (error) {
      setInformationMessage(error.message);
    } else if (!formSubmit) {
      setInformationMessage("Please write something before trying to submit.");
    }
  }, [formSubmit]);

  return (
    <div id="contact">
      <h1>Contact</h1>
      <form>
        <label htmlFor="name">Name</label>
        <input
          className={styles.inputs}
          type="text"
          id="name"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          className={styles.inputs}
          type="text"
          id="email"
          placeholder="Enter your email"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
        />
        <label htmlFor="message">Message</label>
        <textarea
          className={styles.inputs}
          type="text"
          id="message"
          placeholder="Enter your message here"
          rows="10"
          cols="30"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        {informationMessage ? (
          <p role="alert" className={styles.errorMessage}>
            {informationMessage}
          </p>
        ) : null}
        <button
          type="submit"
          className={styles.submitButton}
          disabled={name === "" || mail === "" || message === ""}
          onClick={(e) => handleSubmit(e)}
        >
          {" "}
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;

