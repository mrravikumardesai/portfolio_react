import React from 'react'
import { motion } from 'framer-motion'
const Services = () => {
    return (
        <motion.div
            initial={{ opacity: 1, x: 10 }}
            whileInView={{ opacity: 1, x: 0, }}
            className='relative londrina-solid-light w-screen h-screen flex flex-col gap-4 items-center justify-center  bg-gradient-to-r from-cyan-500 to-blue-500 text-[#F5F5F5] lg:text-4xl text-xl'>

            <section>
                <h1 >Services <span className='londrina-outline-regular'>i</span> provide</h1>
            </section>

            <ul className='text-3xl flex flex-col items-center'>
                <li className='hover:text-slate-200 hover:text-shadow-xl transition-all duration-300 ease-linear'>Backend Development</li>
                <li className='hover:text-slate-200 hover:text-shadow-xl transition-all duration-300 ease-linear'>Application Development</li>
                <li className='hover:text-slate-200 hover:text-shadow-xl transition-all duration-300 ease-linear'>Web Development</li>
                <li className='hover:text-slate-200 hover:text-shadow-xl transition-all duration-300 ease-linear'>Fullstack Development</li>
            </ul>

        </motion.div>
    )
}

export default Services
