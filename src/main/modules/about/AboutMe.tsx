import { motion, useTime, useTransform } from "framer-motion"

const AboutMe = () => {
    const time = useTime();
    const rotate = useTransform(time, [0, 500], [0, 40], { clamp: false });


    return (
        <div    
            id="about"
            className='relative bg-[#F5F5F5] text-[#121212] flex items-center justify-center shadow-2xl w-full h-screen' >
            <motion.div
                
                className='max-w-5xl grid lg:grid-cols-2 grid-cols-1 gap-2 text-4xl londrina-solid-light m-12'>
                <motion.p 
                initial={{ opacity: 0, y:  -20 }}
                whileInView={{ opacity: 1, y: 0, }}
                transition={{ ease: "easeInOut", duration: .4 }}
                className='text-6xl'>
                    About <span className='londrina-outline-regular'>Me</span>
                </motion.p>
                <motion.p 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0, }}
                transition={{ ease: "easeInOut", duration: .8 }}
                className='text-lg tracking-widest londrina-solid-thin text-justify'>
                    Dedicated software developer that is driven to create scalable and safe backend systems. I've developed and maintained 1k+ secure and public APIs for a variety of projects using my Node.js expertise, all while guaranteeing dependable security and speed. proficient in backend and mobile development to create interactive apps. I recently completed my Master's degree in Information Technology (2023), which strengthened my technical background even more. Apart from programming, I get inspired by writing, reading, watching movies, and being outside.
                </motion.p>

            </motion.div>
            <motion.div
                style={{ rotate }}
                className='border-2 top-2 right-2 border-slate-600 w-8 h-8 absolute rounded-md'>
            </motion.div>
            <motion.div
                style={{ rotate }}
                className='border-2 bottom-2 left-2 border-slate-600 w-8 h-8 absolute rounded-lg'>
            </motion.div>
            {/* <motion.div
                style={{ scale,rotate }}
                className={`bottom-0 right-0  bg-[#ffffff90] w-8 h-8 absolute rounded-lg z-10`}>
            </motion.div> */}


        </div>
    )
}

export default AboutMe