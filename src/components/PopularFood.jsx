import React from 'react'
import FoodCard from './FoodCard'

function PopularFood() {
    const Foods = [
        {
            src: "",
            name: "apple"
        },
        {
            src: "",
            name: "blueberry"
        },
        {
            src: "",
            name: "strawberry"
        },
        {
            src: "",
            name: "Eggplant"
        },
        {
            src: "",
            name: "Cabbage"
        },
        {
            src: "",
            name: "Carrot"
        },
    ]
    return (
        <div className='py-8 bg-[#334B35] flex-col flex items-center'>
            <div className='container flex flex-col space-y-12'>
                <div>
                    <p className='text-center text-white text-sm mb-3'>Popular Foods and Vegetables</p>
                    <h3 className='text-3xl text-white font-bold text-center'>Quality Fruits & Vegetables</h3>
                </div>
                <div className='flex items-center w-full justify-between'>
                    {
                        Foods.map((food, index) => (
                            <FoodCard image={food.src} name={food.name} key={index} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default PopularFood