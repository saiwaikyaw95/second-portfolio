import {RiBootstrapLine, RiJavascriptLine, RiReactjsLine} from 'react-icons/ri';
import {SiLaravel, SiTailwindcss} from 'react-icons/si';
import {DiMysql} from 'react-icons/di';
import { FaJava, FaPhp} from 'react-icons/fa';
import {motion} from 'framer-motion';
import { Tooltip } from 'react-tooltip';

const iconsVariants = (duration) => ({
  initial:{y: -10},
  animate:{
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});
 
const Technologies = () => {
  return (
    <div className='border-b border-neutral-900 pb-24'>
      <motion.h2 
         whileInView={{opacity:1, y:0}}
         initial={{opacity:0, y:-100}}
         transition={{duration:1.5}}
      className='my-20 text-center text-4xl' id='technologies'>Technologies</motion.h2>
      <motion.div
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:-100}}
        transition={{duration:1.5}}
      className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          variants={iconsVariants(2.5)}
          initial="initial"
          animate="animate"
          data-tooltip-id="react"
          data-tooltip-content="React"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className='text-7xl text-cyan-400'/>
        </motion.div>
        <motion.div 
          variants={iconsVariants(3)}
          initial="initial"
          animate="animate"
          data-tooltip-id="bootstraps"
          data-tooltip-content="Bootstraps"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiBootstrapLine className='text-7xl text-purple-600'/>
        </motion.div>
        <motion.div 
          variants={iconsVariants(3.5)}
          initial="initial"
          animate="animate"
          data-tooltip-id="tailwind"
          data-tooltip-content="Tailwind"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiTailwindcss className='text-7xl text-green-400'/>
        </motion.div>
        <motion.div 
          variants={iconsVariants(4)}
          initial="initial"
          animate="animate"
          data-tooltip-id="laravel"
          data-tooltip-content="Laravel"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiLaravel className='text-7xl text-red-700'/>
        </motion.div>
        <motion.div 
          variants={iconsVariants(4.5)}
          initial="initial"
          animate="animate"
          data-tooltip-id="java"
          data-tooltip-content="Java"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaJava className='text-7xl text-orange-500'/>
        </motion.div>
        <motion.div 
          variants={iconsVariants(5)}
          initial="initial"
          animate="animate"
          data-tooltip-id="javascript"
          data-tooltip-content="Javascript"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiJavascriptLine className='text-7xl text-yellow-400'/>
        </motion.div>
        <motion.div 
          variants={iconsVariants(5.5)}
          initial="initial"
          animate="animate"
          data-tooltip-id="php"
          data-tooltip-content="PHP"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaPhp className='text-7xl text-sky-700'/>
        </motion.div>
        <motion.div 
          variants={iconsVariants(6)}
          initial="initial"
          animate="animate"
          data-tooltip-id="sql"
          data-tooltip-content="MySQL"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiMysql className='text-7xl text-gray-700'/>
        </motion.div>
      </motion.div>

          <Tooltip id="react" />
          <Tooltip id="tailwind" />
          <Tooltip id="javascript" />
          <Tooltip id="bootstraps" />
          <Tooltip id="laravel" />
          <Tooltip id="php" />
          <Tooltip id="sql" />
          <Tooltip id="java" />
    </div>
  )
}

export default Technologies