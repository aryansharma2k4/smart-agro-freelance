// import React from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";

import { EmblaCarousel } from "./EmblaCarousel";

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
                <div>
                    <EmblaCarousel testimonial={testimonials} />
                </div>
            </div>
        </div>
    );
}

export default TestimonialSection;