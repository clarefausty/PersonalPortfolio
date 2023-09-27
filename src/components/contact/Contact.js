import React, { useRef } from 'react';
import {HiOutlineMail} from "react-icons/hi"
import "./contact.css"
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_687xsdc', 'template_3s5trlh', form.current, 'HEu255RG9LLvzRa8K')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <section  id='contact' className='container contact section'>
    <h5>Get in Touch</h5>
    <h2>Contact Me</h2>
    <div className='contact-container'>
        <div className='contact-options'>
        <article className='about-card contact-option'>
        <HiOutlineMail/>
        <h4>Email</h4>
        <h5>clarefausty@gmail.com</h5>
        <a href="mailto:clarefausty@gmail.com">Send a Message</a>
        </article>
        <article className='about-card contact-option'>
  <HiOutlineMail />
  <h4>Whatsapp</h4>
  <h5>+2348169569392</h5>
  <a href='https://api.whatsapp.com/send?phone=2348169569392'>Send a Message</a>
</article>

        </div>
    <form ref={form} onSubmit={sendEmail}>
    <input type='text' name='name' placeholder='Your name' required/>
    <input type='email' name='email' placeholder='Your email' required/>
    <textarea name='message' placeholder='Your message' rows="7" required></textarea>
    <button type='submit'>Send Message</button>
    </form>
    </div>
    </section>
  )
}

export default Contact