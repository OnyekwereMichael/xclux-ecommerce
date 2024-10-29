import React, {useState} from 'react'
import assets from '../assets/asset'
import { AiOutlineShopping } from 'react-icons/ai'
import { FaShareAlt } from 'react-icons/fa';
import MobileNav from '../component/MobileNav';
import { IoShareOutline } from 'react-icons/io5';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(null); 

  const handleClick = (category) => {
    setActiveLink(category); // Set the clicked link as active
  };
  return (
    <nav className="bg-black opacity-80 flex justify-between items-center  w-full py-[10px]  px-[10px] ">
      <ul className="text-white capitalize flex  gap-[10px] max-xl:hidden">
        {/* <li className='text-[18px]'><a href="">Shop Now</a></li>
        <li className='text-[18px]'><a href="">Collections</a></li>
        <li className='text-[18px]'><a href="">About</a></li> */}

{['Shop Now', 'Collections', 'About'].map((category) => (
        <p
          key={category}
          className={`font-semibold whitespace-nowrap p-1 cursor-pointer text-[18px] ${
            activeLink === category ? 'border-b-4 border-white text-[#C3D4E9]' : 'border-none'
          }`}
          onClick={() => handleClick(category)}
        >
          <a href="#">{category}</a>
        </p>
      ))}
      </ul>

      <img src={assets.XsLogo} alt="XsLogo" width='40' className='max-xl:hidden'/>
      <div className='flex gap-[20px] max-xl:hidden'>
        <div className=" p-[7px] w-[300px] flex items-center justify-between text-white   border-[#C3D4E9] border-[1px] border-solid rounded-full smm:w-[200px] ">
          <div className="flex gap-2">
            <img src={assets.SearchLogo} alt="" width ='20' className="" />
            <input
              type="text"
              className="bg-transparent outline-none rounded-xl "
              placeholder="Search something here"
            />
          </div>
        </div>
      </div>

      <div className='flex gap-[10px] max-xl:hidden'>
        <AiOutlineShopping className='text-white text-2xl' />
        {/* <FaShareAlt className='text-white text-2xl' /> */}
        <IoShareOutline size={24} className='text-white text-2xl'/>
      </div>


       <div className='hidden max-md:block w-[100vw]'>
         <MobileNav/>
      </div>
    </nav>
  )
}

export default Navbar
