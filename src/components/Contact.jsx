import React, { useEffect, useState } from 'react';
import Joi from "joi";
import styles from "./Contact.module.css";

function Contact() {
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [message, setMessage] = useState('');
  const [formSubmit, setFormSubmit] = useState({});
  const [errors, setErrors] = useState({});

  const schema = Joi.object({
    name: Joi.string()
        .min(3)
        .max(30)
        .required(),

    mail: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['fr', 'com', 'net'] } })
        .required(),

    message: Joi.string()
        .min(1)
        .max(2500)
        .required(),
})

const handleSubmit = (e) => {
  e.preventDefault();
  setFormSubmit({name:name, mail:mail, message:message})
  console.log(formSubmit)
}

useEffect(() => {
  const { error, value } = schema.validate(formSubmit);
  setErrors(error);
  console.log(error)
  console.log(value)
}, [formSubmit])

console.log(errors)
  return (
      <div>
        <h1>Contact</h1>
        <form >
          <label htmlFor="name">Name</label>
          <input type="text" id='name' placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)} />
          <label htmlFor="email">Email</label>
          <input type="text" id="email" placeholder='Enter your email' value={mail} onChange={(e) => setMail(e.target.value)} />
          <label htmlFor="message">Message</label>
          <textarea type="text" id="message" placeholder='Enter your message here' rows="10" cols="30" value={message} onChange={(e) => setMessage(e.target.value)} />
          {errors != null && errors != undefined && errors != {} ? <p className={styles.errorMessage}>{errors.message}</p> : <p className={styles.errorMessage}>Your mail has been sent successfully. Thanks!</p>}
          <button type="submit" disabled={name === '' || mail === '' || message === ''} onClick={(e) => handleSubmit(e)}> Submit</button>
        </form>
      </div>
  )
}

export default Contact