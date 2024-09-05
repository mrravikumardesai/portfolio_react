import { Image } from "@nextui-org/react"
import { motion, useTime, useTransform } from "framer-motion"

const AboutMe = () => {

    return (
        <div
            id="about"
            className='flex items-center justify-center w-full' >
            <motion.div
                className='max-w-5xl flex flex-col  md:flex-row gap-4 text-4xl londrina-solid-light m-12'>
                <Image
                    isZoomed
                    // width={2500}
                    alt="NextUI Fruit Image with Zoom"
                    src="https://cdn.pixabay.com/photo/2023/04/27/16/30/lines-7954992_1280.jpg"
                />
                <section className="flex flex-col gap-2">
                    <motion.p
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0, }}
                        transition={{ ease: "easeInOut", duration: .4 }}
                        className='text-5xl'>
                        About <span className='londrina-outline-regular'>Me</span>
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0, }}
                        transition={{ ease: "easeInOut", duration: .8 }}
                        className='text-lg tracking-widest londrina-solid-thin text-justify'>
                        Having worked as a Node.js developer for more than a year, my name is Ravikumar Desai. I know how to construct cross-platform apps with Flutter and web applications with React.js and Express.js. My present employer has given me relevant Node.js experience, and I've used TypeScript and Node.js and React.js to accomplish and maintain hight quility projects. In addition, I worked as a backend database manager with Sequelize for an HRMS project, I like to write stories, hike, and watch science fiction films. But as a fulltime hobby is programming and solving real world problems and because of that i see myself as a versatile full-stack developer.
                    </motion.p>
                </section>


            </motion.div>
            {/* <motion.div
                style={{ scale,rotate }}
                className={`bottom-0 right-0  bg-[#ffffff90] w-8 h-8 absolute rounded-lg z-10`}>
            </motion.div> */}


        </div>
    )
}

export default AboutMe