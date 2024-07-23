import React from 'react'
import NewsCard from './NewsCard'

function NewsSection() {
    const data = [
        {
            author: "John Doe",
            comments: 10,
            date: "3 Sept 2023",
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, unde!"
        },
        {
            author: "John Doe",
            comments: 10,
            date: "3 Sept 2023",
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, unde!"
        },
        {
            author: "John Doe",
            comments: 10,
            date: "3 Sept 2023",
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, unde!"
        },
    ]
    return (
        <div className='py-8 bg-[#334B35] flex-col flex items-center'>
            <div className='container flex flex-col space-y-12'>
                <div>
                    <p className='text-center text-white text-sm mb-3'>FROM THE BLOG</p>
                    <h3 className='text-3xl text-white font-bold text-center'>News & Articles</h3>
                </div>
                <div className='flex items-center w-full justify-between'>
                    {
                        data.map((items, index) => (
                            <NewsCard author={items.author} comments={items.comments} text={items.text} date={items.date} image={items.image} key={index} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default NewsSection