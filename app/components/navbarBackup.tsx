import React from "react";
import Link from "next/link";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/navbar";
import FishPoxLogo from "/public/assets/FishPoxLogo.svg";
import InstagramLogo from "/public/assets/InstagramIcon.svg";
import YoutubeLogo from "/public/assets/YoutubeIcon.svg";
import Image from "next/image";


const MyNavbar = () => {
  return (
    <>
      <Navbar position='static' height="10vh" className="navbar">

        <NavbarBrand className="-ml-6">
          <Link color="foreground" href="/">
            <div className="flex items-center">
              <Image
                src={FishPoxLogo}
                alt="FishPox logo"
                width={80}
              />
              <p className="font-bold text-4xl ml-4"> FishPox </p>
            </div>
          </Link>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex space-x-4" justify="end" >
          <NavbarItem>
            <Link className="text-white" href="/about">
              About
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="text-white" href="/contact">
              Contact
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="https://www.instagram.com/fishpoxband?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
            {/* Add Instagram icon here */}
              <Image
                    src={InstagramLogo}
                    alt="Instagram logo"
                    width={45}
                  />
            </Link>
          </NavbarItem>
          <NavbarItem className="ml-[-15px]"> 
            <Link color="foreground" href="https://www.youtube.com/@Fishpox">
            {/* Add Youtube icon here */}
              <Image
                      src={YoutubeLogo}
                      alt="Youtube logo"
                      width={60}
                      className="ml-[-10px]"
                    />
            </Link>

          </NavbarItem>
        </NavbarContent>
      </Navbar>

    </>
  )
};

export default MyNavbar;
