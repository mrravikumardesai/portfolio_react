import { motion, useTime, useTransform } from "framer-motion"

const AboutMe = () => {
    const time = useTime();
    const rotate = useTransform(time, [0, 500], [0, 40], { clamp: false });


    return (
        <div    
            id="about"
            className='relative bg-[#ffffff] text-[#121212] flex items-center justify-center w-full h-screen' >
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
                    Having worked as a Node.js developer for more than a year, my name is Ravikumar Desai. I know how to construct cross-platform apps with Flutter and web applications with React.js and Express.js. My present employer has given me relevant Node.js experience, and I've used TypeScript and Node.js and React.js to accomplish a project. In addition, I worked as a backend database manager with Sequelize for an HRMS project, and I completed a six-month internship in Android development. I like to write stories, hike, and watch science fiction films. I see myself as a versatile full-stack developer.
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