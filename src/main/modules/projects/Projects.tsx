import {  motion } from "framer-motion"
import { TbBrandMysql, TbBrandTypescript } from 'react-icons/tb'
import { RiJavaLine, RiJavascriptLine, RiNodejsLine } from 'react-icons/ri'
import { SiAndroidstudio, SiDart, SiFlutter } from 'react-icons/si'
import { FaReact } from 'react-icons/fa6'
import { BiLogoFirebase } from 'react-icons/bi'
import { BsBrowserChrome } from 'react-icons/bs'
import { CiMobile1 } from 'react-icons/ci'

const Projects = () => {

  const icons: any = {
    "typescript": <TbBrandTypescript />,
    "javascript": <RiJavascriptLine />,
    "android": <SiAndroidstudio />,
    "reactjs": <FaReact />,
    "nodejs": <RiNodejsLine />,
    "dart": <SiDart />,
    "flutter": <SiFlutter />,
    "java": <RiJavaLine />,
    "mysql": <TbBrandMysql />,
    "firebase": <BiLogoFirebase />,
    "website": <BsBrowserChrome />,
    "application": <CiMobile1 />,
  }

  const data = [
    {
      id: 1,
      title: 'HCS Portfolio',
      description: "Create Userfriendly Website for Harry Creative Studio Portfolio",
      tags: ["ReactJs", "NodeJs", "Typescript", "Dart", "Flutter"],
      role: ["Website", "Backend"]
    },
    {
      id: 2,
      title: 'ELaundry',
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, numquam quis. Maiores voluptatibus reprehenderit odio quia enim, omnis quisquam maxime corporis amet!",
      tags: ["Android", "Java", "NodeJs", "Javascript", "Firebase"],
      role: ["Application", "Backend"]
    },
    {
      id: 3,
      title: 'Nimble (Human Resource Managment System)',
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, numquam quis. Maiores voluptatibus reprehenderit odio quia enim, omnis quisquam maxime corporis amet!",
      tags: ["NodeJs", "Typescript", "MySql"],
      role: ["Backend", "APIs"]
    },
    {
      id: 4,
      title: 'Construction network',
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, numquam quis. Maiores voluptatibus reprehenderit odio quia enim, omnis quisquam maxime corporis amet!",
      tags: ["Flutter", "Dart", "ReactJs", "NodeJs", "Typescript", "MySql"],
      role: ["Application", "Website", "Backend", "APIs"]
    },
  ]



  return (
    <>
      <div className='bg-[#ffffff] text-[#121212] flex flex-col items-center justify-between '>
        <motion.div
          initial={{ opacity: 0, y: 110 }}
          whileInView={{ opacity: 1, y: 0, }}
          className='lg:max-w-5xl grid lg:grid-cols-2 grid-cols-1 gap-2 text-4xl londrina-solid-light lg:m-12 p-2'>
          <p className='lg:text-6xl text-3xl lg:text-start text-center py-2 lg:p-0'>
            Proj<span className='londrina-outline-regular'>ects</span>
          </p>
          <p className='lg:text-lg text-xl tracking-widest londrina-solid-thin text-justify'>
            Below is list of selected projects i've done. if you have any questions or would like to chat about other things i've worked on, feel free to PING ME
          </p>
        </motion.div>
        {
          data && data.map((item: any) => {
            return (
              <>
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0, }}
                  animate={{ animation: 'ease-out' }}
                  className='max-w-5xl w-screen lg:p-4 rounded-lg gap-4 p-2'>
                  <div className='flex flex-col gap-2'>
                    <p className='quicksand-800 lg:text-3xl text-xl'>{item.title}</p>

                    <div className='flex flex-row gap-2 flex-wrap'>
                      {item.role && item.role.length !== 0 &&
                        item.role.map((el: string) => <p className='pill border-2 rounded-md h-fit w-fit px-2 text-[10px] quicksand-100'>{el}</p>
                        )
                      }
                    </div>
                    <p className='quicksand-300 text-xl text-wrap'>{item.description}</p>

                    <div className='flex flex-row gap-2 flex-wrap'>
                      {item.tags && item.tags.length !== 0 &&
                        item.tags.map((el: string) => <p className='pill border-2 rounded-xl h-fit w-fit px-2 text-sm quicksand-100 flex flex-row items-center gap-1'> {icons[el.toLowerCase()]} {el}</p>
                        )
                      }
                    </div>

                  </div>
                </motion.section>
              </>
            )
          })
        }

      </div>
    </>
  )
}

export default Projects