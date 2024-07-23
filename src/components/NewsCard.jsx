import React from 'react'

function NewsCard({text, comments, author, image, date}) {
    return (
        <div className='w-[300px] lg:h-[300px] md:h-[300px] sm:h-[250px] h-[200px] rounded-md'>
            <div className='relative'>
                <img className="w-full h-full" src={image} alt="image" />
                <div className='bg-[#F7C35F] rounded-l-md p-2 absolute right-0 bottom-0'>
                    <p className='text-black text-center text-sm'>{date}</p>
                </div>
            </div>
            <div className='p-4 bg-[#2D442F] rounded-md text-white'>
                <div className='flex items-start space-x-4'>
                    <div className='flex items-center space-x-2'>
                        <span></span>
                        <p className='text-[10px]'>By {author}</p>
                    </div>
                    <div className='flex items-center space-x-2'>
                        <span></span>
                        <p className='text-[10px]'>{comments} comments</p>
                    </div>
                </div>
                <div>
                    <p className='font-bold text-base mt-2'>{text}</p>
                </div>
            </div>
        </div>
    )
}

export default NewsCard