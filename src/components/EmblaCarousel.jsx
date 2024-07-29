'use client'
import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import TestimonialCard from './TestimonialCard'

export function EmblaCarousel({testimonial}) {
    const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])

    return (
        <div className="embla" ref={emblaRef}>
            <div className="embla__container">
                {
                    testimonial.map((item, index) => (
                        <TestimonialCard className="embla__slide w-full" testimonial={item} key={index} />
                    ))
                }
            </div>
        </div>
    )
}