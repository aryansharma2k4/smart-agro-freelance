import React from 'react'

function Button({text}) {
    return (
        <button className='bg-[#F7C35F] w-[30%] p-4 text-black rounded-lg text-sm'>
            {text.toUpperCase()}
        </button>
    )
}

export default Button