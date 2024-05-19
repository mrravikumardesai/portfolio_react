import React from 'react'

const AboutMe = () => {
    return (
        <div className=' bg-[#F5F5F5] text-[#121212] flex items-center justify-center shadow-2xl'>
            <section className='flex flex-col gap-2 text-4xl londrina-solid-light max-w-7xl m-12'>
                <p>
                    About Me
                </p>
                <p className='text-lg tracking-widest londrina-solid-thin text-justify'>
                    Dedicated software developer that is driven to create scalable and safe backend systems. I've developed and maintained 1k+ secure and public APIs for a variety of projects using my Node.js expertise, all while guaranteeing dependable security and speed. proficient in backend and mobile development to create interactive apps. I recently completed my Master's degree in Information Technology (2023), which strengthened my technical background even more. Apart from programming, I get inspired by writing, reading, watching movies, and being outside.
                </p>
            </section>
        </div>
    )
}

export default AboutMe