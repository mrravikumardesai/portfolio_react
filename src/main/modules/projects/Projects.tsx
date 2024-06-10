import { motion } from "framer-motion"
import { TbBrandMysql, TbBrandTypescript } from 'react-icons/tb'
import { RiJavaLine, RiJavascriptLine, RiNodejsLine } from 'react-icons/ri'
import { SiAndroidstudio, SiDart, SiFlutter, SiRazorpay, SiSocketdotio } from 'react-icons/si'
import { FaAws, FaReact } from 'react-icons/fa6'
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
    'socket.io':<SiSocketdotio/>,
    'aws':<FaAws />,
    'razorpay':<SiRazorpay/>
  }

  const data = [
    {
      id: 4,
      title: 'Constructify Networks',
      // description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, numquam quis. Maiores voluptatibus reprehenderit odio quia enim, omnis quisquam maxime corporis amet!",
      description: [
        `Handled the construction based project with Node.js for backend management, React.js forfrontend interface, and Flutter for cross-platformmobile application.`,
        `Successfully added OTP verification for furthersecurity and integrated Razorpay for safe paymentgateway capabilities.`,
        `Created a multi-user system that allowsprofessionals to establish profiles in a variety ofcategories and regions, utilizing location servicesto make it easy for users to find and get in touchwith qualified professionals.`,
        `Established an expedient communication systemthat permits users to make direct phone inquiries,guaranteeing effective connection between usersand experts`
      ],
      tags: ["Flutter", "Dart", "ReactJs", "NodeJs", "Typescript", "MySql","Razorpay"],
      role: ["Application", "Website", "Backend", "APIs"]
    },
    {
      id: 1,
      title: 'HCS Portfolio',
      description: [
        `MySQL was utilized for data management while a React.js frontend and a Node.js/Express.js/Sequelize backend were used to create and manage a dynamic blog post website.`,
        `Worked with a web designer to incorporate React.js based visually appealing functionalities that improve user experience.`
      ],
      tags: ["ReactJs", "NodeJs", "Typescript", "Dart", "Flutter"],
      role: ["Website", "Backend"]
    },
    {
      id: 2,
      title: 'ELaundry',
      description: [
        `Developed an industry-leading e-laundry application with the goal of improving andstreamlining users' laundry experiences.`,
        `It used Android SDK for mobile applications andNode.js and MySQL for the backend.`,
        `There's no need for in-person visits with the easilynavigable app that provides seamless access tolaundry services.`,
        `It offers a useful and time-saving solution forpeople with hectic schedules thanks to featureslike simple registration and a variety of serviceoptions.`
      ],
      tags: ["Android", "Java", "NodeJs", "Javascript", "Firebase"],
      role: ["Application", "Backend"]
    },
    {
      id: 3,
      title: 'Nimble (Human Resource Managment System)',
      description: [
        `Create and maintain a solid HRMS backend with MySQL, Express.js, and Node.js for effective datamanagement.`, 
        `Improved security using bcrypt, jsonwebtoken, andnodemailer technologies.`, 
        `Used the Document360 APIs for front-end side search and help functionality`, 
        `Advanced Excel-related features were implemented using exceljs to communicate withdatabases.`, 
        `Utilized AWS SDK to store and retrieve files fromAWS S3 bucket.`, 
        `For role-based dynamic chat functionality,socket.io was integrated.`
      ],
      tags: ["NodeJs", "Typescript", "MySql","socket.io",'aws'],
      role: ["Backend", "APIs"]
    },

  ]



  return (
    <>
      <div id="projects" className='bg-[#ffffff] text-[#121212] flex flex-col items-center justify-between '>
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
                    {/* <p className='quicksand-300 text-xl text-wrap'>{item.description}</p> */}
                    <ul className="list-disc">
                      {
                        item.description.map((desc: string) => <li className='quicksand-300 text-xl text-wrap bullet'>{desc}</li>)
                      }

                    </ul>

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