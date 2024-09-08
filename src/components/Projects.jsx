import React from 'react'
import pj1 from '../assets/project1.jpg'
import pj2 from '../assets/project2.jpg'
import pj3 from '../assets/project3.jpg'
import pj4 from '../assets/project4.jpg'
import pj5 from '../assets/project5.jpg'
import pj6 from '../assets/project6.jpg'
import {motion} from 'framer-motion';

const containerX = (delay) => ({
  hidden: {x:-100, opacity:0},
  visible: {
    x:0,
    opacity:1,
    transition: {duration:0.5, delay: delay},
  },
});

const containerRevX = (delay) => ({
  hidden: {x:100, opacity:0},
  visible: {
    x:0,
    opacity:1,
    transition: {duration:0.5, delay: delay},
  },
});

const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-4' >

      <div className='pb-8'>
      <motion.h2
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:0.5}}
      className='my-20 text-center text-4xl' id='projects' >Projects</motion.h2>
        <motion.p 
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:-100}}
        transition={{duration:0.5}}
        className='text-neutral-600'>Check Out Some of my recent works</motion.p>
      </div>

      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
        
        <motion.div 
        variants={containerX(1)}
        initial="hidden"
        whileInView="visible"
        className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
                        shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
                        h-[200px] bg-cover relative'>
          <img src={pj1} alt=''/>
          <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col 
                          justify-center items-center'>
            <span className='text-2xl font-bold text-white tracking-wider'>Project</span>
            <div className='pt-8 text-center'>
              <a href='/'>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  Live
                </button>
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
        variants={containerX(0.5)}
        initial="hidden"
        whileInView="visible"
        className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
                        shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
                        h-[200px] bg-cover relative'>
          <img src={pj2} alt='' className='w-full h-full'/>
          <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col 
                          justify-center items-center'>
            <span className='text-2xl font-bold text-white tracking-wider'>Project</span>
            <div className='pt-8 text-center'>
              <a href='/'>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  Live
                </button>
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
        variants={containerX(0)}
        initial="hidden"
        whileInView="visible"
        className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
                        shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
                        h-[200px] bg-cover relative'>
          <img src={pj3} alt='' className='w-full h-full'/>
          <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col 
                          justify-center items-center'>
            <span className='text-2xl font-bold text-white tracking-wider'>Project</span>
            <div className='pt-8 text-center'>
              <a href='/'>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  Live
                </button>
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
        variants={containerRevX(0)}
        initial="hidden"
        whileInView="visible"
        className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
                        shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
                        h-[200px] bg-cover relative'>
          <img src={pj4} alt=''/>
          <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col 
                          justify-center items-center'>
            <span className='text-2xl font-bold text-white tracking-wider'>Project</span>
            <div className='pt-8 text-center'>
              <a href='/'>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  Live
                </button>
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
        variants={containerRevX(0.5)}
        initial="hidden"
        whileInView="visible"
        className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
                        shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
                        h-[200px] bg-cover relative'>
          <img src={pj5} alt=''/>
          <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col 
                          justify-center items-center'>
            <span className='text-2xl font-bold text-white tracking-wider'>Project</span>
            <div className='pt-8 text-center'>
              <a href='/'>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  Live
                </button>
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div 
        variants={containerRevX(1)}
        initial="hidden"
        whileInView="visible"
        className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
                        shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
                        h-[200px] bg-cover relative'>
          <img src={pj6} alt='' className='w-full'/>
          <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col 
                          justify-center items-center'>
            <span className='text-2xl font-bold text-white tracking-wider'>Project</span>
            <div className='pt-8 text-center'>
              <a href='/'>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  Live
                </button>
              </a>
            </div>
          </div>
        </motion.div>

      </div>

    </div>
  )
}

export default Projects