import React from 'react'
import { HiMenu } from "react-icons/hi";
import assets from '../assets/asset'
import { AiOutlineShopping } from 'react-icons/ai'
import { FaShareAlt } from 'react-icons/fa';
import { IoShareOutline } from 'react-icons/io5';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet"

const MobileNav = () => {
  return (
    <div className='flex justify-between items-center px-3'>
      <div className='flex gap-4 items-center'>
        <div>
          <Sheet>
            <SheetTrigger><HiMenu size={24} className='text-white' /></SheetTrigger>
            <SheetContent side='left' className="bg-black opacity-80 h-[50%] ">
              <SheetHeader>
                <SheetTitle>
                  <p className='text-[20px] font-semibold text-white my-5'>Shop All Items</p>
                </SheetTitle>
                <SheetDescription>
                  <ul className="text-white capitalize flex flex-col gap-4">
                    <li className='text-[18px] my-5'>
                      <SheetClose asChild>
                        <a href="" className='text-[#C3D4E9]'>Our Collections</a>
                      </SheetClose>
                    </li>
                    <li className='text-[18px] my-5'>
                      <SheetClose asChild>
                        <a href="" className='text-[#C3D4E9]'>About The Brand</a>
                      </SheetClose>
                    </li>
                    <li className='text-[18px] my-5'>
                      <SheetClose asChild>
                        <a href="" className='text-[#C3D4E9]'>Track Order</a>
                      </SheetClose>
                    </li>
                    <li className='text-[18px] my-5'>
                      <SheetClose asChild>
                        <a href="" className='text-[#C3D4E9]'>Contact Us</a>
                      </SheetClose>
                    </li>
                  </ul>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>

        <div>
          <img src={assets.searchlogo} alt="" />
        </div>
      </div>

      <img src={assets.logo} alt="XsLogo" width='40' />

      <div className='flex gap-4 items-center'>
        <AiOutlineShopping className='text-white text-2xl' />
         {/* <FaShareAlt className='text-white text-2xl' /> */}
           <IoShareOutline size={24} className='text-white text-2xl'/>
      </div>
    </div>
  )
}

export default MobileNav;
