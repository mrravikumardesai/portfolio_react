import { Image } from '@nextui-org/react'
import { motion } from 'framer-motion'
const Services = () => {
    return (
        <motion.div
            id="services"
            initial={{ opacity: 1, y: 10 }}
            whileInView={{ opacity: 1, y: 0, }}
            className=' w-full h-screen flex flex-col-reverse md:flex-row gap-8 items-center justify-center '>

            <section className='flex flex-col gap-4 items-start'>
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className='text-4xl londrina-solid-light'
                >
                    <h1>Quility <span className='londrina-outline-regular'>Services</span> Provided</h1>
                </motion.section>

                <ul className='lg:text-3xl text-xl flex flex-col quicksand-200'>
                    <motion.li
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}

                        className='hover:text-slate-200 hover:text-shadow-xl transition-all duration-300 ease-linear text-3xl'>Backend Development</motion.li>
                    <motion.li
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className='hover:text-slate-200 hover:text-shadow-xl transition-all duration-300 ease-linear text-3xl'>Application Development</motion.li>
                    <motion.li
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className='hover:text-slate-200 hover:text-shadow-xl transition-all duration-300 ease-linear text-3xl'>Web Development</motion.li>
                    <motion.li
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className='hover:text-slate-200 hover:text-shadow-xl transition-all duration-300 ease-linear text-3xl'>Fullstack Development</motion.li>
                </ul>
            </section>

            <Image
                isZoomed
                width={250}
                alt="NextUI Fruit Image with Zoom"
                src="https://cdn.pixabay.com/photo/2023/09/20/11/40/plants-8264659_1280.jpg"
            />


        </motion.div>
    )
}

export default Services
