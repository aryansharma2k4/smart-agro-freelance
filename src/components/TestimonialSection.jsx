import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function TestimonialSection() {
    const testimonials = [
        {
            image: "/testimonial.jpg",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus enim exercitationem a veritatis ratione impedit recusandae voluptate, eaque, perferendis illo consectetur tenetur nostrum, sequi ipsam tempora in! Pariatur cupiditate alias autem officia consectetur est ad quod molestiae? Suscipit fugit quia dolores ducimus voluptate? Dolorem maiores, soluta enim quis sapiente quod.",
            name: "John Doe",
            role: "Customer"
        },
        {
            image: "/testimonial.jpg",
            text: "Another testimonial text. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            name: "Jane Smith",
            role: "Client"
        },
        {
            image: "/testimonial.jpg",
            text: "Yet another testimonial text. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            name: "Alice Johnson",
            role: "Customer"
        }
    ];

    return (
        <div className='py-8 bg-[#334B35] flex-col flex items-center'>
            <div className='container mx-auto px-4'>
                <div className='text-center mb-12'>
                    <p className='text-sm text-white mb-3'>OUR TESTIMONIALS</p>
                    <h3 className='text-3xl text-white font-bold'>WHAT ARE THEY TALKING ABOUT</h3>
                </div>
                <Carousel>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className='flex items-center justify-center'>
                            <div className='flex items-center w-full justify-center space-x-10'>
                                <div>
                                    <img src={testimonial.image} className='w-[200px] h-[200px] rounded-full' alt="testimonial" />
                                </div>
                                <div className='text-white w-[50%] flex flex-col space-y-5'>
                                    <div>
                                        <p className='text-sm'>" {testimonial.text} "</p>
                                    </div>
                                    <div>
                                        <p className='font-semibold'>{testimonial.name}</p>
                                        <p className='text-sm text-gray-300'>{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
}

export default TestimonialSection;
