import React from 'react'

function ContactFormInput({placeholder}) {
    return (
        <input type="email" id="email" class="bg-[#263C28] border  text-gray-100 text-sm border-[#263C28] focus:border-[#263C28] w-[70%] rounded-lg block p-4  dark:placeholder-gray-400 dark:text-white  " placeholder={placeholder} required />
    )
}

export default ContactFormInput