import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import LogoSm from "../public/assets/images/logo/diyaloLogoSmall2.png";
import LogoLg from "../public/assets/images/logo/diyaloLogo.png";

const Navbar = () => {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(true);
  const [showMobileLinks, setShowMobileLinks] = useState(false)
  return (
    <div className="navbarWrapper  flex text-secondary items-center py-4 px-8 md:px-16 shadow-2xl rounded-b-lg">
      <div className="navbar w-full flex items-center">
        <div className="leftPart flex items-center">
          <div className="logoHolder">
            <Link href={"/"}>
            <Image
              src={LogoSm}
              alt=""
              width={80}
              className="inline-block md:hidden"
              />
              </Link>
              <Link href={"/"}>
            <Image
              src={LogoLg}
              alt=""
              width={200}
              className="md:inline-block hidden"
              />
              </Link>
          </div>
        </div>

        <div className="rightPart hidden md:flex ml-auto">
          <div className="Links text-2xl flex items-center gap-14 font-semibold ">
            <Link
              href={"/"}
              className={router.pathname === "/" ? "activeLink" : ""}
            >
              Home
            </Link>
            <Link
              href={"/services"}
              className={router.pathname === "/services" ? "activeLink" : ""}
            >
              Services
            </Link>
            <Link
              href={"/gallery"}
              className={router.pathname === "/gallery" ? "activeLink" : ""}
            >
              Gallery
            </Link>
            <Link
              href={"/contact"}
              className={router.pathname === "/contact" ? "activeLink" : ""}
            >
              Contact
            </Link>

            <button className="ml-6 px-4 py-2 border bg-priamry text-basse rounded-lg border-action hover:bg-secondary hover:text-action">
              Book Table
            </button>
          </div>
        </div>

        <div className="LinkforMobileView relative flex md:hidden ml-auto">
          {showMenu && (
            <button onClick={()=>{setShowMobileLinks(true); setShowMenu(false)}}>
              <AiOutlineMenu className="text-4xl" />
            </button>
          )}
          {showMenu || (
            <button onClick={()=>{setShowMenu(true); setShowMobileLinks(false);}}>
              <AiOutlineClose className="text-4xl" />
            </button>
          )}

        { showMobileLinks &&
          <div className="mobileLink bg-opacity-60 bg-neutral flex flex-col absolute z-30 rounded-lg px-4 items-center w-64 top-16 -right-8 text-2xl font-semibold gap-8 py-10">
            <button onClick={()=>{setShowMenu(true); setShowMobileLinks(false);}}>

            <Link
              href={"/"}
              className={router.pathname === "/" ? "activeLink" : ""}
              >
              Home
            </Link>
                </button>

                <button onClick={()=>{setShowMenu(true); setShowMobileLinks(false);}}>

            <Link
              href={"/services"}
              className={router.pathname === "/services" ? "activeLink" : ""}
              >
              Services
            </Link>
                </button>

                <button onClick={()=>{setShowMenu(true); setShowMobileLinks(false);}}>

                
            <Link
              href={"/gallery"}
              className={router.pathname === "/gallery" ? "activeLink" : ""}
              >
              Gallery
            </Link>
                </button>

                <button onClick={()=>{setShowMenu(true); setShowMobileLinks(false);}}>

                
            <Link
              href={"/contact"}
              className={router.pathname === "/contact" ? "activeLink" : ""}
              >
              Contact
            </Link>
                </button>

            <button onClick={()=>{setShowMenu(true); setShowMobileLinks(false); router.push("/bookTable")}} className="ml-6 px-4 py-2 border bg-priamry text-basse rounded-lg border-action hover:bg-secondary hover:text-action">
              Book Table
            </button>
          </div>}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
