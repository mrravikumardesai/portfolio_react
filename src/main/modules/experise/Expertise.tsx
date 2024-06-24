import { motion } from "framer-motion"
import { TbBrandMysql, TbBrandRedux, TbBrandTypescript } from 'react-icons/tb'
import { RiJavaLine, RiJavascriptLine, RiNodejsLine } from 'react-icons/ri'
import { SiAndroidstudio, SiDart, SiFlutter, SiGetx } from 'react-icons/si'
import { FaReact } from 'react-icons/fa6'
import { BiLogoFirebase } from 'react-icons/bi'
const Expertise = () => {

    const icons: any = {
        "flutter": <SiFlutter />,
        "getx": <SiGetx />,
        "nodejs": <RiNodejsLine />,
        "typescript": <TbBrandTypescript />,
        "dart": <SiDart />,
        "reactjs": <FaReact />,
        "redux": <TbBrandRedux />,
        "javascript": <RiJavascriptLine />,
        "android": <SiAndroidstudio />,
        "java": <RiJavaLine />,
        "mysql": <TbBrandMysql />,
        "firebase": <BiLogoFirebase />,
        'socket.io':<SiSocketdotio/>,
        'aws':<FaAws />

    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{
                opacity: 1, y: 0
            }}

            
            className='bg-[#121212] text-[#ffffff] flex flex-col items-center justify-between py-8 gap-8'>
                <div className='flex flex-row lg:text-7xl gap-4 md:text-4xl text-2xl flex-wrap'>
                    {
                        Object.keys(icons).map(key => <motion.div>
                            <p>{icons[key]}</p>
                        </motion.div>)
                    } 
                </div>


        </motion.div>
    )
}

export default Expertise
