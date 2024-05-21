import React, { useState } from 'react'
import AnimatedCursor from 'react-animated-cursor'
import { AnimatePresence, motion } from "framer-motion"

const Projects = () => {



  const data = [
    {
      id: 1,
      title: 'HCS Portfolio',
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, numquam quis. Maiores voluptatibus reprehenderit odio quia enim, omnis quisquam maxime corporis amet!",
      tags: ["ReactJs", "NodeJs", "Typescript", "Dart", "Flutter"],
    }
  ]



  return (
    <>
      <div className=' bg-[#121212] text-[#ffffff] flex flex-col items-center justify-center '>
        <section className='max-w-5xl grid lg:grid-cols-2 grid-cols-1 gap-2 text-4xl londrina-solid-light m-12'>
          <p className='text-6xl'>
            Proj<span className='londrina-outline-regular'>ects</span>
          </p>
          <p className='text-lg tracking-widest londrina-solid-thin text-justify'>
            Below is list of selected projects i've done. if you have any questions or would like to chat about other things i've worked on, feel free to PING ME
          </p>


        </section>
        {
          data && data.map((item: any) => {
            return (
              <>
                <section
                  className=' max-w-5xl p-4 rounded-lg gap-4 relative'>
                  <div className='flex flex-col gap-2'>
                    <p className='londrina-solid-regular text-2xl'>{item.title}</p>
                    <p className='londrina-solid-light text-sm'>{item.description}</p>
                  </div>
                </section>
              </>
            )
          })
        }

      </div>
    </>
  )
}

export default Projects