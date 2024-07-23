import React from 'react'

function TestimonialSection() {
    return (
        <div className='py-8 bg-[#334B35] flex-col flex items-center'>
            <div className='container flex flex-col space-y-12'>
                <div>
                    <p className='text-center text-white text-sm mb-3'>OUR TESTIMONIALS</p>
                    <h3 className='text-3xl text-white font-bold text-center'>WHAT ARE THEY TALKING ABOUT</h3>
                </div>
                <div className='flex items-center w-full justify-center space-x-10'>
                    <div>
                        <img src="/testimonial.jpg" className='w-[200px] h-[200px] rounded-full' alt="image" />
                    </div>
                    <div className='text-white w-[50%] flex flex-col space-y-5'>
                        <div>
                            <p className='text-sm'>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus enim exercitationem a veritatis ratione impedit recusandae voluptate, eaque, perferendis illo consectetur tenetur nostrum, sequi ipsam tempora in! Pariatur cupiditate alias autem officia consectetur est ad quod molestiae? Suscipit fugit quia dolores ducimus voluptate? Dolorem maiores, soluta enim quis sapiente quod."</p>
                        </div>
                        <div>
                            <p className='font-semibold'>John Doe</p>
                            <p className='text-sm text-gray-300'>Customer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestimonialSection