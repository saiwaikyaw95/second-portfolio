
import {ABOUT_TEXT} from '../constants';
import {motion} from 'framer-motion';
import aboutPhoto from '../assets/about.png';

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4" id='about'>
      <h1 className="my-16 text-center text-4xl">
        About
        <span className="text-neutral-500"> Me</span>
      </h1>
      <div className="flex flex-wrap">
        <motion.div 
          whileInView={{opacity:1, x:0}}
          initial={{x:-100, opacity:0}}
          transition={{duration:0.5}}
        className="w-full lg:w-1/2 lg:px-5">
          <div className="flex justify-center items-center">
            <img className='rounded-2xl' src={aboutPhoto} alt='about'/>
          </div>        
        </motion.div>
        <motion.div 
          whileInView={{opacity:1, x:0}}
          initial={{x:100, opacity:0}}
          transition={{duration:0.5}}
        className="w-full lg:w-1/2 lg:mt-10">
            <div className="flex justify-center lg:justify-start">
              <p className='my-2 max-w-xl py-6'>{ABOUT_TEXT}</p>
            </div>
          </motion.div>
      </div>
    </div>
  )
}

export default About