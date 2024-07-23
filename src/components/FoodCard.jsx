import React from 'react'

function FoodCard({name,image}) {
    return (
        <div className='p-6 bg-[#3F7000] rounded-md'>
            <div>
                <img src={image} alt={name} />
            </div>
            <p className='text-white mt-3 text-sm'>{name}</p>
        </div>
    )
}

export default FoodCard