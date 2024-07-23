import React from 'react'
import ContactFormInput from './ContactFormInput'
import Button from './Button'

function ContactForm() {
    return (
        <div>
            <form className='flex flex-col space-y-7'>
                <ContactFormInput placeholder={"Your name"} />
                <ContactFormInput placeholder={"Phone Number"} />
                <ContactFormInput placeholder={"Your Email"} />
                <ContactFormInput placeholder={"Your Message"} />
                <Button text={"Send Message"} />
            </form>
        </div>
    )
}

export default ContactForm