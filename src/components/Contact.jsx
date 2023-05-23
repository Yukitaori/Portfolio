import React, { useEffect, useState } from 'react';
import Joi from "joi";
import styles from "./Contact.module.css";

function Contact() {
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [message, setMessage] = useState('');
  const [formSubmit, setFormSubmit] = useState({})

  const schema = Joi.object({
    name: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),

    mail: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        .required(),

    message: Joi.string()
        .alphanum()
        .min(1)
        .max(2500)
        .required(),
})

const handleSubmit = (e) => {
  e.preventDefault();
  setFormSubmit({name: name, mail: mail, message: message})
}

useEffect(() => {
  const { error, value } = schema.validate(formSubmit);
  console.log(error)
  console.log(value)
}, [formSubmit])

  return (
      <div>
        <h1>Contact</h1>
        <form >
          <input type="text" placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)} />
          <input type="text" placeholder='Enter your mail' value={mail} onChange={(e) => setMail(e.target.value)} />
          <textarea type="text" placeholder='Enter your message here' rows="10" cols="30" value={message} onChange={(e) => setMessage(e.target.value)} />
          <button type="submit" disabled={name === '' || mail === '' || message === ''} onClick={(e) => handleSubmit(e)}> Submit</button>
        </form>
      </div>
  )
}

export default Contact