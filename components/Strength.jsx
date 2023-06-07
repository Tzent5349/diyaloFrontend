import React from 'react';
import Image from 'next/image';

import Win0 from "../public/assets/images/1.png";
import Win1 from "../public/assets/images/win1.jpeg";
import Win from "../public/assets/images/win.jpeg";

 
const Strength = () => {
  return (
    <div className='w-full mt-14'>
{/*         <h1 className='text-xl font-moon font-extrabold text-center text-secondary'>Why choose us</h1>
        <h1 className='text-4xl mt-4 font-moon font-extrabold text-center text-primary'>Our Strength</h1> */}
        <div className="stengthContainer my-14 flex flex-col md:flex-row w-full items-center justify-center gap-14">
            <Image src={Win0} alt='' width={200}  />
            <Image src={Win} alt='' width={200}  />
            <Image src={Win1} alt=''  width={200} />

        </div>
    </div>
  )
  }

export default Strength