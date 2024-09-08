import {FaFacebook, FaInstagram, FaTelegram} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaSquareXTwitter} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='flex justify-between mx-auto my-4'>
      <span className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl text-transparent my-auto'>Sai Wai Kyaw</span>
      <div className='flex items-center justify-center gap-3 lg:gap-5 text-2xl'>
        <a className="hover:text-slate-500" href='https://www.facebook.com/sai.w.kyaw.104?mibextid=LQQJ4d'><FaFacebook/></a>
        <a className="hover:text-slate-500" href='https://t.me/saiwaikyaw'><FaTelegram/></a>
        <a className="hover:text-slate-500" href='https://github.com/saiwaikyaw95'><FaGithub/></a>
        <a className="hover:text-slate-500" href='https://twitter.com/saiwaikyaw8'><FaSquareXTwitter/></a>
        <a className="hover:text-slate-500" href='https://www.instagram.com/saiwaikyaw95'><FaInstagram/></a>
      </div>
      <p className='text-purple-900 hidden lg:block'> saiwaikyaw95@gmail.com <br/> #webDev2024 </p>
    </div>
  )
}

export default Footer
