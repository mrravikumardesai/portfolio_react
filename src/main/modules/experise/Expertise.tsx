import { motion } from "framer-motion"
import { TbBrandMysql, TbBrandRedux, TbBrandTypescript } from 'react-icons/tb'
import { RiJavaLine, RiJavascriptLine, RiNodejsLine } from 'react-icons/ri'
import { SiAndroidstudio, SiDart, SiFlutter, SiGetx, SiSocketdotio } from 'react-icons/si'
import { FaAws, FaReact } from 'react-icons/fa6'
import { BiLogoFirebase } from 'react-icons/bi'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
const Expertise = () => {

    // const icons: any = {
    //     "flutter": <SiFlutter />,
    //     "getx": <SiGetx />,
    //     "nodejs": <RiNodejsLine />,
    //     "typescript": <TbBrandTypescript />,
    //     "dart": <SiDart />,
    //     "reactjs": <FaReact />,
    //     "redux": <TbBrandRedux />,
    //     "javascript": <RiJavascriptLine />,
    //     "android": <SiAndroidstudio />,
    //     "java": <RiJavaLine />,
    //     "mysql": <TbBrandMysql />,
    //     "firebase": <BiLogoFirebase />,
    //     'socket.io': <SiSocketdotio />,
    //     'aws': <FaAws />
    // }

    const icons = [
        <SiFlutter size={80} />,
        <SiGetx size={80} />,
        <RiNodejsLine size={80} />,
        <TbBrandTypescript size={80} />,
        <SiDart size={80} />,
        <FaReact size={80} />,
        <TbBrandRedux size={80} />,
        <RiJavascriptLine size={80} />,
        <SiAndroidstudio size={80} />,
        <RiJavaLine size={80} />,
        <TbBrandMysql size={80} />,
        <BiLogoFirebase size={80} />,
        <SiSocketdotio size={80} />,
        <FaAws size={80}/>
    ]



    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{
                opacity: 1, y: 0
            }}
            className='bg-[#121212] text-[#ffffff] py-2 gap-2'>
            <Swiper
                modules={[Autoplay]}
                spaceBetween={10}
                autoplay={{ delay: 2000 }}
                loop={true}
                // pagination={{ clickable: true }}
                breakpoints={{
                    0: { slidesPerView: 3, spaceBetween: 20, centeredSlides: false },
                    768: { slidesPerView: 5, spaceBetween: 28, centeredSlides: true },
                    1024: { slidesPerView: 6, spaceBetween: 32 },
                }}
            >
                {
                    icons.map((key, index: number) => <motion.div>
                        <SwiperSlide virtualIndex={index} className="">
                            <p className="mx-12">{key}</p>
                        </SwiperSlide>
                    </motion.div>)
                }
            </Swiper>


        </motion.div>
    )
}

export default Expertise
