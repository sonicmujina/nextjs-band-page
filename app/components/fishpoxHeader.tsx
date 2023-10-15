import React from 'react';
// import Image from 'next/image';

const FishPoxHeader = () => { 
    return ( 
       <>
        <div className="sticky top-0" style={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "black" }}>
            <h1 style={{ fontSize: "85px", color: "#8D021F" }}>FISHPOX</h1>
            <img src="/assets/fplogo.png" alt="Logo" width={150} height={150} />
        </div>
       </>
    )
}; 

export default FishPoxHeader; 