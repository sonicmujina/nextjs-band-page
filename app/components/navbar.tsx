import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => { 
    return ( 
        <> 
	<div className="w-full h-20 bg-black sticky top-0" style={{ backgroundColor: "black"}}>
	<div className="sticky top-0" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "black", padding: "10px 20px"}}>
		<img src="/assets/fplogo2NEW.png" alt="Logo" width={100} height={100} />
		<h1 style={{ fontSize: "85px", color: "#8D021F" }}>FISHPOX</h1>
		<img src="/assets/fplogo2.png" alt="Logo2" width={110} height={110}/>

	</div>
  <div className="container mx-auto px-4 h-full flex justify-center items-center" style={{ backgroundColor: "black"}}>
		<ul className="flex gap-x-6 text-white">
      <li>
        <Link href="pages/About">
          <p>about</p>
        </Link>
      </li>
      <li>
        <Link href="pages/Live">
          <p>live</p>
        </Link>
      </li>
      <li>
        <Link href="pages/merch">	
          <p>goods</p>
        </Link>
      </li>
      <li>
        <Link href="pages/contacts">
          <p>contacts</p>
        </Link>
      </li>
      <li>
        <Link href="pages/bandcamp">
          <p>bandcamp</p>
        </Link>
      </li> 
    </ul>
  </div>
</div>
</>
    )
};


export default Navbar;
