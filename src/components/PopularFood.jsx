import React from 'react';
import FoodCard from './FoodCard';

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
    ];

    return (
        <div className='py-4 md:py-8 bg-[#334B35] flex flex-col items-center'>
            <div className='container mx-auto px-4'>
                <div className='text-center mb-8 md:mb-12'>
                    <p className='text-sm text-white mb-3'>Popular Foods and Vegetables</p>
                    <h3 className='text-3xl text-white font-bold'>Quality Fruits & Vegetables</h3>
                </div>
                <div className='flex flex-wrap justify-center gap-4 md:gap-8'>
                    {Foods.map((food, index) => (
                        <div className='w-50% sm:w-30% md:w-25% lg:w-10% p-1 md:p-2' key={index}>
                            <div className='aspect-w-1 aspect-h-1'>
                                <FoodCard image={food.src} name={food.name} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PopularFood;
