import React from 'react'
import { CONTACT } from '../constants'
import {motion} from "framer-motion";

const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-20' id='contact'>
      <motion.h2 
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:0.5}}
      className='my-10 text-center text-4xl'>Get in Touch</motion.h2 >

      <form action='https://getform.io/f/bvrejvob' method='POST'>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-7'>
                
                <motion.input 
                  whileInView={{opacity:1, x:0}}
                  initial={{opacity:0,x:-100}}
                  transition={{duration:1}}
                type='text' name='name' id='' placeholder='Your Name'
                        className='w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700
                        dark:bg-neutral-800 rounded-md 
                        focus:outline-none focus:border-purple-600'/>
            
                <motion.input 
                  whileInView={{opacity:1, x:0}}
                  initial={{opacity:0,x:100}}
                  transition={{duration:1}}
                type='text' name='email' id='' placeholder='Your Email'
                        className='w-full px-4 py-4 text-gray-400 placeholder-gray-400 border
                        border-gray-700 dark:bg-neutral-800 rounded-md 
                        focus:outline-none focus:border-purple-600'/>                

                <div className='sm:col-span-2'>
                    <motion.input 
                      whileInView={{opacity:1, x:0}}
                      initial={{opacity:0,x:-100}}
                      transition={{duration:1}}
                    type='text' name='message' id='' placeholder='Your Message'
                            className='w-full px-4 py-4 text-gray-400 placeholder-gray-400 border
                            border-gray-700 dark:bg-neutral-800 rounded-md focus:outline-none focus:border-purple-600'/>
                </div>

                <motion.div 
                  whileInView={{opacity:1, y:0}}
                  initial={{opacity:0,y:100}}
                  transition={{duration:1}}
                className='sm:col-span-2'>
                  <button type='submit' 
                          className='text-xl w-full p-4 mt-2 font-semibold text-white bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 rounded-md'>
                    Send
                  </button>
                </motion.div>

              </div>

            </form>

    </div>
  )
}

export default Contact