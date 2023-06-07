import React from 'react';
import Link from 'next/link';

import {AiFillFacebook, AiFillInstagram, AiOutlineWhatsApp} from "react-icons/ai";
import {MdLocalPhone} from "react-icons/md";

const Footer = () => {
  return (
    <div className='FooterWrapper w-full py-2 bg-primary text-basee'>
      <div className="footer flex flex-wrap justify-around gap-4">
        <div className="part1 flex flex-col items-center gap-2">
        <p className='text-2xl font-bold'>Diyalo Restaurant</p>
        <div className=" flex items-center flex-col text-2xl  gap-4">
          <p>Tv. da Palma,</p>
          <p>1150-052 Lisboa</p>
          <p className='flex gap-4 items-center'> <MdLocalPhone /> 931767921 </p>
          <p className='flex gap-4 items-center'> <AiOutlineWhatsApp /> 931767921 </p>
        </div>
        </div>

{        <div className="part2 flex flex-col items-center gap-2">
          <p className='text-2xl font-bold'>Useful Links</p>
        <div className="linksHolder flex text-2xl flex-col gap-4 items-center">
          <Link href="" className='w-fit'>About Us</Link>
          <Link href="" className='w-fit'>Services</Link>
          <Link href="" className='w-fit'>Contact Us</Link>
          <Link href="" className='w-fit'>Online Reservation</Link>
        </div>
        </div>}

        <div className="part3 flex flex-col items-center gap-2">
        <p className='text-2xl font-bold'>Follow us on:</p>
        <div className=" flex items-center flex-col text-2xl  gap-4">
            <AiFillFacebook />
            <AiFillInstagram />
        </div>
        <div className="rights flex flex-col justify-center items-center">
          <h1>|| © 2023 Copyright || All right reserved ||</h1>
          <h1> Created by Abhishek Sharma</h1>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Footer