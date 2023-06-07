import {Banner, Specality, Offers, Deliveries, Carousel, Reviews, Strength, Reservation} from "../components";

import Image01 from "../public/assets/images/carousel/img1.jpg";
import Image02 from "../public/assets/images/carousel/img2.jpg";
import Image03 from "../public/assets/images/carousel/img3.jpg";
import Image04 from "../public/assets/images/carousel/img4.jpg";
import Image05 from "../public/assets/images/carousel/img5.jpg";
import Image06 from "../public/assets/images/carousel/img6.jpg";
import Image07 from "../public/assets/images/carousel/img7.jpg";
import Image08 from "../public/assets/images/carousel/img8.jpg";
import Image09 from "../public/assets/images/carousel/img9.jpg";
import Image10 from "../public/assets/images/carousel/img10.jpg";
import Image11 from "../public/assets/images/carousel/img11.jpg";
import Image12 from "../public/assets/images/carousel/img12.jpg";
import Image13 from "../public/assets/images/carousel/img13.jpg";


export default function Home() {

  const slides = [{ url: Image01 }, { url: Image02 }, { url: Image03 }, { url: Image04 },{ url: Image05 },{ url: Image06 },{ url: Image07 },{ url: Image08 },{ url: Image09 },{ url: Image10 },{ url: Image11 },{ url: Image12 },{ url: Image13 },];

  return (
    <div className="homeWrapper">

      <Banner />
    <Offers />
      <Specality/>
      <Deliveries />
      <Carousel images={slides} />
      <div className="flex items-center justify-center overflow-hidden">
      <Reviews />
      </div>
      <Strength />
      <Reservation />
    </div>
  );
}
