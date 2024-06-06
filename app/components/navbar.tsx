import React from "react";
// import Link from "next/link";
import FishPoxLogo from "/public/assets/FishPoxLogo.svg";
import InstagramLogo from "/public/assets/InstagramIcon.svg";
import YoutubeLogo from "/public/assets/YoutubeIcon.svg";
import Image from "next/image";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/" className="navbar-link">
          <div className="flex items-center -ml-5">
            <Image src={FishPoxLogo} alt="FishPox logo" width={80} />
            <p className="font-bold text-4xl ml-4">FishPox</p>
          </div>
        </a>
      </div>
      <div className="navbar-content">
        <a href="/about" className="navbar-item">About</a>
        <a href="/contact" className="navbar-item">Contact</a>
        <a href="https://www.instagram.com/fishpoxband?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="navbar-item">
          <Image src={InstagramLogo} alt="Instagram logo" width={45} />
        </a>
        <a href="https://www.youtube.com/@Fishpox" className="navbar-item">
          <Image src={YoutubeLogo} alt="Youtube logo" width={60} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

