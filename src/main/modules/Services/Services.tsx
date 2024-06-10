import { motion } from 'framer-motion'
const Services = () => {
    return (
        <motion.div
            id="services"
            initial={{ opacity: 1, y: 10 }}
            whileInView={{ opacity: 1, y: 0, }}
            className='relative londrina-solid-light w-full h-screen flex flex-col gap-4 items-center justify-center  bg-gradient-to-r from-cyan-500 to-blue-500 text-[#F5F5F5] lg:text-4xl text-xl'>
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
            >
                <h1 >Services <span className='londrina-outline-regular'>i</span> provide</h1>
            </motion.section>

            <ul className='lg:text-3xl text-xl flex flex-col items-center quicksand-800'>
                <motion.li 
                    initial={{opacity:0,y:10}}
                    whileInView={{opacity:1,y:0}}
                   
                className='hover:text-slate-200 hover:text-shadow-xl transition-all duration-300 ease-linear'>Backend Development</motion.li>
                <motion.li 
                    initial={{opacity:0,y:20}}
                    whileInView={{opacity:1,y:0}}
                className='hover:text-slate-200 hover:text-shadow-xl transition-all duration-300 ease-linear'>Application Development</motion.li>
                <motion.li 
                    initial={{opacity:0,y:30}}
                    whileInView={{opacity:1,y:0}}
                className='hover:text-slate-200 hover:text-shadow-xl transition-all duration-300 ease-linear'>Web Development</motion.li>
                <motion.li 
                    initial={{opacity:0,y:40}}
                    whileInView={{opacity:1,y:0}}
                className='hover:text-slate-200 hover:text-shadow-xl transition-all duration-300 ease-linear'>Fullstack Development</motion.li>
            </ul>

        </motion.div>
    )
}

export default Services
