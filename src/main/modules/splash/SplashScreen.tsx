import { motion } from "framer-motion"
const SplashScreen = () => {

    return (
        <>
      
                <div className='relative w-screen h-screen flex items-center justify-center  bg-gradient-to-r from-cyan-500 to-blue-500 text-[#F5F5F5] lg:text-9xl text-5xl'>
                    <motion.div
                        initial={{ opacity: 0,  }}
                        whileInView={{ opacity: 1, }}
                        transition={{ ease: "easeOut", duration: 1.5 }}
                        className='flex flex-col flex-wrap max-w-4xl items-center justify-center gap-2'>
                        <h1 className='londrina-outline-regular text-center'>Ravikumar <span className='londrina-solid-regular '>Desai</span></h1>
                    </motion.div>

                </div>
            
        </>
    )
}

export default SplashScreen