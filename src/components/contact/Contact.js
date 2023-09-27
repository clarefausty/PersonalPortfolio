import React from 'react'
import {HiOutlineMail} from "react-icons/hi"
import "./contact.css"

function Contact() {
  return (
    <section id='contact' className='container section'>
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
    <form>
    <input type='text' name='name' placeholder='Your name' required/>
    <input type='email' name='email' placeholder='Your email' required/>
    <textarea name='message' placeholder='Your message' rows="7" required></textarea>
    </form>
    </div>
    </section>
  )
}

export default Contact