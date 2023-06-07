import React from "react";
import Image from "next/image";

import Rick from "../public/assets/images/customer/Rick.png";
import Bishes from "../public/assets/images/customer/Bishes.png";
import Diana from "../public/assets/images/customer/Diana.png";
import Illya from "../public/assets/images/customer/Illya.png";
import Nadya from "../public/assets/images/customer/Nadya.png";
import Victor from "../public/assets/images/customer/Victor.png";

const Reviews = () => {
  return (
    <div className="customerCommentContainer bg-neutral bg-blend-color-burn mt-36">
      <div className="CustomerComment ">
        <h1 className="font-black text-4xl mt-14  md:text-6xl tracking-widest text-center font-moon text-secondary">
          Testomonials
        </h1>
        <div className="commentBox relative my-20 ">
          <div className="testomonial text-primary mt-16 animate-marquee flex w-full  gap-16 items-center justify-around">
            <div className="customerBox flex gap-4 shadow-xl p-2 rounded-3xl">
              <div className="customerID">
                <Image src={Rick} alt="" className="w-16 rounded-full"></Image>
              </div>

              <div className="Customercomment flex -mt-2 flex-col w-64">
                <h1 className="customerName font-bold text-xl tracking-widest">
                  Rick Cosmoas
                </h1>
                <p className="text   mt-2">
                  Stopped by for a light meal and bottle of wine. First time for
                  Nepal food. Wow good. Great view and nice service. To be
                  continued on our next visit.
                </p>
              </div>
            </div>

            <div className="customerBox flex gap-4 shadow-xl p-2 rounded-3xl">
              <div className="customerID">
                <Image
                  src={Bishes}
                  alt=""
                  className="w-16 rounded-full"
                ></Image>
              </div>

              <div className="Customercomment flex -mt-2 flex-col w-64">
                <h1 className="customerName font-bold text-xl tracking-widest">
                  Bishes Yetrea
                </h1>
                <p className="text  mt-2">
                  Stunning atmosphere with delicious food. Service was friendly
                  and helpful. Nice to meet friends and family to enjoy the
                  time.
                </p>
              </div>
            </div>

            <div className="customerBox flex gap-4 shadow-xl p-2 rounded-3xl">
              <div className="customerID">
                <Image src={Diana} alt="" className="w-16 rounded-full"></Image>
              </div>

              <div className="Customercomment flex -mt-2 flex-col w-64">
                <h1 className="customerName font-bold text-xl tracking-widest">
                  Diana Marcos
                </h1>
                <p className="text  mt-2">
                  One of my go-to places when I crave for Nepali food! They have
                  good momos and Thukpa. The staff is also very friendly!😊
                </p>
              </div>
            </div>

            <div className="customerBox flex gap-4 shadow-xl p-2 rounded-3xl">
              <div className="customerID">
                <Image
                  src={Victor}
                  alt=""
                  className="w-16 rounded-full"
                ></Image>
              </div>

              <div className="Customercomment flex -mt-2 flex-col w-64">
                <h1 className="customerName font-bold text-xl tracking-widest">
                  Victor Godinot
                </h1>
                <p className="text  mt-2">
                  Best Paneer Masala I&apos;ve ever eaten…! Even the cheese Nan
                  to dip in was as good as heaven. Cosy location + cool view +
                  nice waiters = such a nice place for dinner with good friends.
                  I&apos;ll come back 4
                </p>
              </div>
            </div>

            <div className="customerBox flex gap-4 shadow-xl p-2 rounded-3xl">
              <div className="customerID">
                <Image src={Illya} alt="" className="w-16 rounded-full"></Image>
              </div>

              <div className="Customercomment flex -mt-2 flex-col w-64">
                <h1 className="customerName font-bold text-xl tracking-widest">
                  Illya Brs
                </h1>
                <p className="text  mt-2">
                  Ok , u have to wait a bit for the meat , but trust , the meat
                  is amazing ! U would not regret it
                </p>
              </div>
            </div>

            <div className="customerBox flex gap-4 shadow-xl p-2 rounded-3xl">
              <div className="customerID">
                <Image src={Nadya} alt="" className="w-16 rounded-full"></Image>
              </div>

              <div className="Customercomment flex -mt-2 flex-col w-64">
                <h1 className="customerName font-bold text-xl tracking-widest">
                  Nadya H.
                </h1>
                <p className="text  mt-2">
                  Great restaurant with indoor and outdoor seating. Delicious
                  food and nice view. We had the chicken biryani and the chili
                  chicken momos which were both tasty and flavorful. Service was
                  good as well. Excellent choice for great food and good value.
                  Would have gone back if we were in town longer.⭐️⭐️⭐️⭐️⭐️
                </p>
              </div>
            </div>
          </div>

          <div className="testomonial absolute text-primary   top-0 animate-marquee2 flex w-full  gap-16 items-center justify-around">
            <div className="customerBox flex ml-32 gap-4 shadow-xl p-2 rounded-3xl">
              <div className="customerID">
                <Image src={Rick} alt="" className="w-16 rounded-full"></Image>
              </div>

              <div className="Customercomment flex -mt-2 flex-col w-64">
                <h1 className="customerName font-bold text-xl tracking-widest">
                  Rick Cosmoas
                </h1>
                <p className="text  mt-2">
                  Stopped by for a light meal and bottle of wine. First time for
                  Nepal food. Wow good. Great view and nice service. To be
                  continued on our next visit.
                </p>
              </div>
            </div>

            <div className="customerBox flex gap-4 shadow-xl p-2 rounded-3xl">
              <div className="customerID">
                <Image
                  src={Bishes}
                  alt=""
                  className="w-16 rounded-full"
                ></Image>
              </div>

              <div className="Customercomment flex -mt-2 flex-col w-64">
                <h1 className="customerName font-bold text-xl tracking-widest">
                  Bishes Yetrea
                </h1>
                <p className="text  mt-2">
                  Stunning atmosphere with delicious food. Service was friendly
                  and helpful. Nice to meet friends and family to enjoy the
                  time.
                </p>
              </div>
            </div>

            <div className="customerBox flex gap-4 shadow-xl p-2 rounded-3xl">
              <div className="customerID">
                <Image src={Diana} alt="" className="w-16 rounded-full"></Image>
              </div>

              <div className="Customercomment flex -mt-2 flex-col w-64">
                <h1 className="customerName font-bold text-xl tracking-widest">
                  Diana Marcos
                </h1>
                <p className="text  mt-2">
                  One of my go-to places when I crave for Nepali food! They have
                  good momos and Thukpa. The staff is also very friendly!😊
                </p>
              </div>
            </div>

            <div className="customerBox flex gap-4 shadow-xl p-2 rounded-3xl">
              <div className="customerID">
                <Image
                  src={Victor}
                  alt=""
                  className="w-16 rounded-full"
                ></Image>
              </div>

              <div className="Customercomment flex -mt-2 flex-col w-64">
                <h1 className="customerName font-bold text-xl tracking-widest">
                  Victor Godinot
                </h1>
                <p className="text  mt-2">
                  Best Paneer Masala I&apos;ve ever eaten…! Even the cheese Nan
                  to dip in was as good as heaven. Cosy location + cool view +
                  nice waiters = such a nice place for dinner with good friends.
                  I&apos;ll come back 4
                </p>
              </div>
            </div>

            <div className="customerBox flex gap-4 shadow-xl p-2 rounded-3xl">
              <div className="customerID">
                <Image src={Illya} alt="" className="w-16 rounded-full"></Image>
              </div>

              <div className="Customercomment flex -mt-2 flex-col w-64">
                <h1 className="customerName font-bold text-xl tracking-widest">
                  Illya Brs
                </h1>
                <p className="text  mt-2">
                  Ok , u have to wait a bit for the meat , but trust , the meat
                  is amazing ! U would not regret it
                </p>
              </div>
            </div>
            <div className="customerBox flex gap-4 shadow-xl p-2 rounded-3xl">
              <div className="customerID">
                <Image src={Nadya} alt="" className="w-16 rounded-full"></Image>
              </div>

              <div className="Customercomment flex -mt-2 flex-col w-64">
                <h1 className="customerName font-bold text-xl tracking-widest">
                  Nadya H.
                </h1>
                <p className="text  mt-2">
                  Great restaurant with indoor and outdoor seating. Delicious
                  food and nice view. We had the chicken biryani and the chili
                  chicken momos which were both tasty and flavorful. Service was
                  good as well. Excellent choice for great food and good value.
                  Would have gone back if we were in town longer.⭐️⭐️⭐️⭐️⭐️
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
