import { useRef } from 'react'
import emailjs from 'emailjs-com'
import { AiTwotoneMail } from 'react-icons/ai'
// import { BsMessenger } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import './Contact.scss'

const API_KEY = import.meta.env.VITE_REACT_APP_EMAIL
const Contact = () => {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_o9dm3ps', 'template_8kn4tbs', form.current, API_KEY);

    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiTwotoneMail className='contact__icon' />
            <h4>Email</h4>
            <a href="mailto:jfschallibaum@gmail.com" target="_blank" rel="noopener noreferrer">Send a Message</a>
          </article>
          {/* <article className="contact__option">
            <BsMessenger className='contact__icon' />
            <h4>Messenger</h4>
            <a href="https://m.me/SonicFran" target="_blank" rel="noopener noreferrer">Send a Message</a>
          </article> */}
          <article className="contact__option">
            <IoLogoWhatsapp className='contact__icon' />
            <h4>WhatsApp Messenger</h4>
            <a href="https://api.whatsapp.com/send?phone=1123864313" target="_blank" rel="noopener noreferrer">Send a Message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your full name' required />
          <input type="email" name="email" placeholder='Email address' required/>
          <textarea name="message" rows="10" placeholder='Your message...' required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact