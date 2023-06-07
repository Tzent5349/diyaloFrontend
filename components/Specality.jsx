import React from "react";
import Image from "next/image";

import Image0 from "../public/assets/images/food/thali.webp";
import Image1 from "../public/assets/images/food/pilau.jpg";
import Image2 from "../public/assets/images/food/thali.webp";
import Image3 from "../public/assets/images/food/pilau.jpg";

import Image5 from "../public/assets/images/food/thali.webp";
import Image6 from "../public/assets/images/food/pilau.jpg";
import Image7 from "../public/assets/images/food/thali.webp";
import Image8 from "../public/assets/images/food/pilau.jpg";
import Image9 from "../public/assets/images/food/thali.webp";

const Specality = () => {
  const foods = [
    { src: Image1 },
    { src: Image2 },
    { src: Image3 },
    { src: Image5 },
    { src: Image6 },
    { src: Image7 },
    { src: Image8 },
    { src: Image9 },
    { src: Image0 },
  ];

  return (
    <div className="specalityWrapper w-full mt-20">
      {/* <h1 className='font-bold text-4xl text-center tracking-widest font-moon'>Our <span className='text-act'>Specality</span></h1> */}
      <div className="spcality mt-20 w-full flex justify-center ">
        <div className=" flex relative md:w-5/6 w-full">
          <div className=" flex example items-center bg-neutral rounded-2xl bg-sprinkle px-10 py-10 overflow-scroll scroll-smooth  overscroll-x-contain ">
            <div className=" flex gap-10">
              <div className=" rounded-s-2xl h-full "> </div>

              {foods.map((food, idx) => {
                return (
                  <div
                    key={idx}
                    className="imageHolder w-72 flex-0 rounded-2xl overflow-hidden shadow-2xl shadow-primary"
                  >
                    <Image src={food.src} alt="" className="aspect-[3/4] " />
                  </div>
                );
              })}
              <div className=" rounded-s-2xl h-full "> </div>
            </div>
            <div className="absolute z-50  rounded-s-2xl h-full w-12 md:w-20 left-0 bg-slate-800/80 ">
              {" "}
            </div>
            <div className="absolute rounded-e-2xl z-50 h-full w-12 md:w-20 right-0 bg-slate-800/80 ">
              {" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specality;
