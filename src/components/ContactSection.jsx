import React from 'react'
import ContactForm from './ContactForm'

function ContactSection() {
    return (
        <div className='py-8 border-b-2 px-20 border-b-slate-700 bg-[#334B35] flex items-center mx-auto'>
            <div className='container w-full flex items-center justify-between'>
                <div className='text-white w-[50%] flex flex-col space-y-5'>
                    <div>
                        <p className=' text-white text-sm mb-3'>CONTACT NOW</p>
                        <h3 className='text-3xl text-white font-bold '>GET IN TOUCH NOW</h3> 
                    </div>
                    <p className='my-4 text-base'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi temporibus repellat ullam laborum blanditiis! Corporis sit ad animi vel consequuntur.</p>
                    <div>
                        <p className='text-sm text-gray-400'>PHONE</p>
                        <p className='mt-2'>+95759409237</p>
                        <p className='text-base'>+95759409237</p>
                    </div>
                    <div>
                        <p className='text-sm mb-3 text-gray-400'>EMAIL</p>
                        <p className='text-base'>needhelp@gmail.com</p>
                    </div>
                    <div>
                        <p className='text-sm mb-3 text-gray-400'>ADDRESS</p>
                        <p className='text-base'>Road No. 8, Niketan, Dhaka, Bangladesh</p>
                    </div>
                </div>
                <div className='w-[50%]'>
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}

export default ContactSection