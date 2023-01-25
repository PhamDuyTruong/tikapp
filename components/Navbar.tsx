import React from 'react';
import Image from 'next/image'
import {useRouter} from 'next/router';
import {GoogleLogin, GoogleLogout} from 'react-google-login';
import { AiOutlineLogout } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { IoMdAdd } from 'react-icons/io';
import Link from 'next/link';
import Logo from '../utils/tiktik-logo.png';

const Navbar = () => {
  return (
    <div className='w-full flex justify-between items-center border-b-2 border-gray-200 py-2 px-4'>
        <Link href="/">
          <div className='w-[100px] md:w-[129px] md:h-[30px] h-[38px]'>
              <Image className='cursor-pointer' src={Logo} alt='logo' layout='responsive'/>
          </div>
        </Link>
        <div className='relative hidden md:block'>
            <form className='absolute md:static top-10 -left-20 bg-white'>
                <input className='bg-primary p-3 md:text-md font-medium border-2 border-gray-100 focus:outline-none focus:border-2 focus:border-gray-300 w-[300px] md:w-[350px] rounded-full  md:top-0' 
                  placeholder='Search account and videos'
                />
                <button  className="absolute md:right-5 right-6 top-4 border-l-2 border-gray-300 pl-4 text-2xl text-gray-400">
                    <BiSearch />
                </button>
            </form>
        </div>
    </div>
  )
}

export default Navbar