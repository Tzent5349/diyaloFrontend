import Image from "next/image";
import { useEffect } from "react";
import Image1 from "../public/assets/images/new/momo.png"
import Image2 from "../public/assets/images/new/img2.png"
import Image3 from "../public/assets/images/new/img3.png"


const Offers = () => {


    
    function observer()  {new IntersectionObserver(entries =>{
        entries.forEach(entry => {
            // If the element is visible
            if (entry.isIntersecting) {
              // Add the animation class
              entry.target.classList.add('hero');
            }})
        });
        observer.observe(document.querySelector('.offerTitle'))
    }
        


  return (
    <div className='offerWrapper mt-36 md:pl-20'>
        <h1 className="offerTitle text-4xl font-moon font-semibold mb-14 text-primary animate-slideLeft delay-75"> What we have to <span className="text-act">Offer</span></h1>
        <div className="offerContainer flex flex-col md:flex-row w-full gap-14 md:gap-0 sm:items-center md:px-14 ">
            <div className="leftPart w-full mt-14 text-center">
              <h1 className="text-4xl font-extrabold font-moon text-primary">MOMO</h1>
              <p className="text-xl font-bold mt-6 text-secondary">By far the tastiest Momo in town</p>
            </div>
            <div className="rightPart w-full text-center ml-auto dropDown">
                <Image src={Image1} alt="" width={400} />
            </div>
        </div>
        <div>

        </div>
        <div className="offerContainer mt-36 flex flex-col md:flex-row-reverse w-full gap-14 md:gap-0 justify-center px-4 md:px-14 ">
            <div className="leftPart w-full flex flex-col  text-center">
              <h1 className="text-4xl font-extrabold mt-24 font-moon text-primary">Sekuwa</h1>
              <p className="text-xl font-bold mt-6 text-secondary">By far the tastiest Momo in town</p>
            </div>
            <div className="rightPart w-full text-center ml-auto dropDown">
                <Image src={Image2} alt="" width={400} />
            </div>
        </div>

        <div className="offerContainer mt-36 flex flex-col md:flex-row w-full gap-14 md:gap-0 justify-center px-4 md:px-14 ">
            <div className="leftPart w-full flex flex-col  text-center">
              <h1 className="text-4xl font-extrabold mt-24 font-moon text-primary">Tandoori</h1>
              <p className="text-xl font-bold mt-6 text-secondary">By far the tastiest Momo in town</p>
            </div>
            <div className="rightPart w-full ml-auto flex justify-center dropDown">
                <Image src={Image3} alt="" width={400} />
            </div>
        </div>

        <h1 className="text-center text-4xl font-moon text-primary mt-20">And many more...</h1>
    </div>
  )
}

export default Offers;