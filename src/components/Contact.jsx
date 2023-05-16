import React, { useState } from 'react';
import styles from "./Contact.module.css";

function Contact() {
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [message, setMessage] = useState('');

  return (
      <div>
        <h1>Contact</h1>
        <form action="">
          <input type="text" placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)} />
          <input type="text" placeholder='Enter your mail' value={mail} onChange={(e) => setMail(e.target.value)} />
          <input type="text" placeholder='Enter your message here' value={message} onChange={(e) => setMessage(e.target.value)} />
          <button type="submit" disabled={name === '' || mail === '' || message === ''} onClick={(e) => e.preventDefault()}> Submit</button>
        </form>
      </div>
  )
}

export default Contact