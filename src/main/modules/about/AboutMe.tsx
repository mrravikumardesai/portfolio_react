import React from 'react'
import { motion, useTime, useTransform } from "framer-motion"

const AboutMe = () => {
    const time = useTime();
    const rotate = useTransform(time, [0, 500], [0, 18], { clamp: false });
  
    return ( 
        <motion.div 
        initial={{ opacity: 0,}}
        whileInView={{ opacity: 1 }}
        transition={{duration:.1}}
        className='relative bg-[#F5F5F5] text-[#121212] flex items-center justify-center shadow-2xl w-screen h-screen' >
            <motion.div 
                            initial={{ opacity: 0, y: 230 }}
                            whileInView={{ opacity: 1, y: 0, }}
                            //  viewport={{ once: true, }}
                            transition={{ ease: "easeOut", duration: .4 }}
            className='flex flex-col gap-2 text-4xl londrina-solid-light max-w-7xl m-12'>
                <p>
                    About Me
                </p>
                <p className='text-lg tracking-widest londrina-solid-thin text-justify'>
                    Dedicated software developer that is driven to create scalable and safe backend systems. I've developed and maintained 1k+ secure and public APIs for a variety of projects using my Node.js expertise, all while guaranteeing dependable security and speed. proficient in backend and mobile development to create interactive apps. I recently completed my Master's degree in Information Technology (2023), which strengthened my technical background even more. Apart from programming, I get inspired by writing, reading, watching movies, and being outside.
                </p>

                <motion.div
                 style={{rotate}}
                  
                className='a border-2 top-8 right-16 border-slate-600 w-8 h-8 absolute  rounded-md'>
                    
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default AboutMe