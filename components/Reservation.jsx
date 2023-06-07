import React from 'react';

import Image from 'next/image';

import ReservationImage from "../public/assets/images/reservation.jpg";



const Reservation = () => {
  return (
    <div className='reservationWrapper bg-neutral w-full '>
        <h1 className='text-4xl font-extrabold text-primary pt-14 text-center'>Make online reservation</h1>
        <div className="reservation w-full flex flex-wrap gap-10 py-10 md:py-20 flex-row items-center justify-center">
            <div className="leftPart flex ">
                <Image src={ReservationImage} alt='' height={300} />
            </div>

            <div className="rightPart px-4 w-full md:w-auto flex justify-center h-full items-center">
                <form action="" className='flex flex-col w-full md:w-auto gap-4'>
                    <div className="CustomerInfo w-full flex flex-col md:flex-row gap-4">
                    <input type="text" name="" id="" placeholder='Your Name' required/>
                    <input type="number" name="" id="" placeholder='Phone Number' required/>
                    </div>
                    <div className='reserveInfo flex flex-col md:flex-row gap-4'>
                        <input type="number" placeholder='Number of People'/>
                        <input type="date" name="" id="" required/>
                        <input type="time" name="" id="" required placeholder='time'/>
                    </div>

                    <div className="message flex">
                        <textarea name="" id="" cols="30" rows="10" placeholder='Message'required/>
                    </div>
                <button className='py-4 px-3  font-extrabold text-xl bg-basee text-primary hover:bg-act hover:text-basee rounded'>Book a Table</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Reservation