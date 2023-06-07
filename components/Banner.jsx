import React from 'react';

import Image from 'next/image';

import Food1 from "../public/assets/images/new/maybe.png"

const Banner = () => {
  return (
    <div className='BannerWrapper mt-10 w-full'>
        <div className="banner w-full flex gap-14 flex-col md:flex-row md:px-10 items-center justify-center">
            <div className="leftPart flex md:w-2/3 flex-col ml-auto md:text-right items-center">
                <h1 className='text-3xl md:text-6xl font-moon md:mr-6 text-primary tracking-widest font-semibold'> <span className='text-act'>Nepalese</span>  Cusine</h1>
                <p className='font-sans text-xl md:text-right md:mr-20 md:text-4xl font-semibold mt-4 text-primary'>Where every flavor tells a story.</p>
                <p className='font-sans text-md text-center md:w-3/4 md:text-center mt-6 text-secondary'>Food perfected by our Chefs, with all natural spices blended perfectly for that savourly taste, making perfect authentic Nepalese Food</p>

            </div>

            <div className="rightPart ml-auto ">
                <Image src={Food1} alt='' className='' priority />
            </div>
        </div>

    </div>
  )
}

export default Banner