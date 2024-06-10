import { motion } from 'framer-motion'
import { CiMail } from 'react-icons/ci';

const ContactMe = () => {
    return (
        <motion.div
            initial={{ opacity: 1, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            id="contact"
            className='relative bg-[#121212] text-[#F5F5F5] flex items-center justify-center shadow-2xl w-full h-screen backdrop-blur-md' /* Add backdrop-blur-md class here */
        >
            <motion.a
                href={`mailto:mrravikumardesai@gmail.com`}
                initial={{ opacity: 0, y: 130 }}
                whileInView={{ opacity: 1, y: 0 }}
                className='lg:text-9xl md:text-5xl text-3xl transition-all duration-150 ease-linear z-10'>
                <span className='londrina-outline-regular'>mr</span>ravi<span className='londrina-outline-regular'>kumar</span>desai<span className='londrina-outline-regular'>@</span>gmail<span className='londrina-outline-regular'>.com</span>
            </motion.a>
            <motion.div
                initial={{ opacity: 0, y: -130 }}
                whileInView={{ opacity: 1, y: 0 }}
                className='absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2 border-slate-100 rounded-md opacity-5 text-slate-500 z-0 hover:text-slate-400 transition-all duration-300 ease-linear '
            >
                <CiMail size={120} />
            </motion.div>

        </motion.div>
    )
}

export default ContactMe