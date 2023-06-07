
import { Navbar, Footer } from "./";
import Head from "next/head";

import {BsFillArrowUpSquareFill} from "react-icons/bs";

export default function Layout ({children}) {
  return (
    <>
      <Head>
        <title>Diyalo Restaurant || Authentic Nepalese Food ||</title>
      </Head>

      <div className="flex flex-col md:bg-second bg-small bg-right-top md:bg-left-top bg-no-repeat bg-cover">
        <div className="navbarContainer">
          <Navbar />
        </div>
        <div className="mainContainer bg-base h-full">{children}</div>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
};


