import { Image } from '@nextui-org/react';
import { motion } from 'framer-motion'
import { CiMail } from 'react-icons/ci';

const ContactMe = () => {
    return (
        <motion.div
            initial={{ opacity: 1, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            id="contact"
            className="flex flex-col gap-2 items-center justify-center shadow-2xl w-full h-screen backdrop-blur-md" /* Add backdrop-blur-md class here */
        >
            <motion.a
                href={`mailto:mrravikumardesai@gmail.com`}
                initial={{ opacity: 0, y: 130 }}
                whileInView={{ opacity: 1, y: 0 }}
                className='text-3xl sm:text-4xl transition-all duration-150 ease-linear z-10'>
                <span className='londrina-outline-regular'>mr</span>ravi<span className='londrina-outline-regular'>kumar</span>desai<span className='londrina-outline-regular'>@</span>gmail<span className='londrina-outline-regular'>.com</span>
            </motion.a>
            
        </motion.div>
    )
}

export default ContactMe