import { FaLinkedin, FaXTwitter } from 'react-icons/fa6'
import { RiGithubLine } from 'react-icons/ri'
import { motion } from "framer-motion"
// bg-[#30475E]
const HeroSectionTwo = () => {
    return (
        <motion.div
            initial={{ opacity: 1, y: -10 }}
            whileInView={{ opacity: 1, y: 0, }}
            className='relative w-full h-screen flex items-center justify-center  bg-gradient-to-t from-[#F5F5F5] to-blue-400 text-slate-700 lg:text-9xl text-5xl'>
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0, }}
                transition={{ ease: "easeOut", duration: .4 }}
                className='flex flex-col flex-wrap max-w-4xl items-center justify-center gap-2'>

                <h1 className='londrina-outline-regular text-center'>Transforming <span className='londrina-solid-regular '>Vision</span>  into  <span className='londrina-solid-regular '>Code</span></h1>
                <h1 className='londrina-outline-regular text-center lg:text-4xl text-2xl'>On demand <span className='londrina-solid-regular '>dynamic</span>  full stack  <span className='londrina-solid-regular '>developer</span></h1>

            </motion.div>
            <motion.div className='absolute mx-auto bottom-0'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
            >
                <a 
                href='#about'
                className='text-xl my-4 londrina-solid-black border-2 p-2 rounded-2xl tracking-wide hover:tracking-widest hover:rounded-md transition-all duration-150 ease-linear'>Explore more</a>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0, }}
                viewport={{ once: true, }}
                transition={{ ease: 'easeInOut', duration: 2 }}
                className='absolute lg:left-0 flex-col text-4xl max-w-9 justify-between gap-8 mx-4 items-center left-0 sm:block hidden'>
                <FaLinkedin className="hover:text-slate-500 transition-colors duration-150 ease-linear" />
                <RiGithubLine className="hover:text-slate-500 transition-colors duration-150 ease-linear" />
                <FaXTwitter className="hover:text-slate-500 transition-colors duration-150 ease-linear" />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 20, }}
                transition={{ ease: "easeOut", duration: 1 }}
                className='absolute top-0 mx-auto my-5 text-xl'>
                <div className='flex lg:flex-row flex-col justify-around items-center gap-4 w-screen font-mono text-2xl londrina-solid-regular px-2 sm:px-4 md:px-8 '>
                    <section className='hover:border-b-2 transition-all duration-150 ease-in-out '>
                        <h1>Ravikumar Desai</h1>
                    </section>
                    <section>
                        <ul className='flex flex-row gap-8'>
                            <a className='hover:border-b-2 transition-all duration-150 ease-in-out ' href='#about'>About</a>
                            <a className='hover:border-b-2 transition-all duration-150 ease-in-out ' href='#services' >Services</a>
                            <a className='hover:border-b-2 transition-all duration-150 ease-in-out ' href='#projects'>Projects</a>
                            <a className='hover:border-b-2 transition-all duration-150 ease-in-out ' href="#contact">Contact</a>
                        </ul>
                    </section>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default HeroSectionTwo