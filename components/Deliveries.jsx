import React from 'react';
import Image from 'next/image';

import image1 from "../public/assets/images/delivery/bolt1.webp";
import image2 from "../public/assets/images/delivery/uber.png";
import image3 from "../public/assets/images/delivery/glovo1.png";


const Deliveries = () => {
  return (
    <div className='deliveriesWrapper w-full md:bg-neutral/100 py-20 bg-neutral/20 text-primary flex flex-col  mt-44 items-center justify-center'>
        <h1 className='text-4xl font-moon font-extrabold'>Like what you saw</h1>
        <h1 className='text-2xl font-bold mt-4 '>Order from our delivery partners</h1>

        <div className="delivery w-full flex flex-col md:flex-row mt-14 gap-20 justify-around md:justify-center items-center ">
            <Image src={image1} alt='' width={140}/>
            <Image src={image2} alt='' width={150}/>
            <Image src={image3} alt='' width={150}/>

        </div>
    </div>
  )
}

export default Deliveries