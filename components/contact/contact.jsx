import "./contact.scss"
import { useState } from "react";

export default function Contact() {

    const [message, setMessage] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true);
        // emailjs.sendForm(`gmail`, apiKey.TEMPLATE_ID, e.target, apiKey.USER_ID)
    }
    return (
        <div className="contact" id="contact">;
            {/* <div className="left">
                <img src="assets/Shake.png" alt="" />
            </div> */}
            <div className="right">
                <h2>Connect with me</h2>
                {/* <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email" />
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thank you for reaching out!</span>}
                </form> */}
                <div className="container">
                    <a class="link" href="tel:+8165889395" target="_blank" rel="noopener noreferrer">
                        <img src="assets/phone.png" class="icon" alt="Phone symbol" /></a>
                    <a class="link" href="mailto:Travisprice08@gmail.com?subject=Portfolio%20contact" target="_blank" rel="noopener noreferrer">
                        <img src="assets/gmail.svg" class="icon" alt="Email icon" /></a>
                    <a class="link" href="https://github.com/Travisprice08" target="_blank" rel="noopener noreferrer">
                        <img src="assets/github.svg" class="icon" alt="Github logo" /></a>
                    <a class="link" href="https://www.linkedin.com/in/travis-price-21b4ab1a1/" target="_blank" rel="noopener noreferrer">
                        <img src="assets/Linkedin.svg" class="icon" alt="LinkedIn logo" /></a>
                </div>

            </div>
        </div>
    )
}