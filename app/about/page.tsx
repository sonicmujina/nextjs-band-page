import React from "react";
import Image from "next/image";
import fishpoxGroup from "/public/assets/FishPoxGroupPhoto.jpeg";
import fishing from "/public/assets/fishingClose.png";

const AboutPage = () => {
  return (
    <>
      <h2 className="my-8 text-white" style={{ fontSize: "20px" }}>
        About
      </h2>

      <div className="flex flex-col mt-6">
        <div className="flex">
          <Image src={fishpoxGroup} alt="fishbone" className="w-1/2" />
          <div className="flex flex-col items-center">
            <Image src={fishing} alt="fishing" className=" align-top" />

            <p className="ml-4 leading-[2] rounded-md border border-black p-4 ">
              FishPox is an Indie Rock band hailing from Sydney, formed during
              their university days. Crafting noise that fuels their inspiration
              within the unpredictable tapestry of the human experience.
            </p>
          </div>
        </div>
        <div>
          <div className="mt-8 ">
            <p>(Left → Right)</p>
            <ul>
              <li> Guitar: James Lee </li>
              <li className="mt-4"> Bass: Rick Su </li>
              <li className="mt-4"> Drums: Daryl Chong </li>
              <li className="mt-4"> Vocal/Guitar: Alvin Yao </li>
            </ul>
          </div>
          <div className="mt-14">
            <ul className="font-bold">
              <li>
                {" "}
                2022: At university Alvin and James met in class and became
                friends through sharing similar music interests such as Nirvana
                and Sonic Youth.{" "}
              </li>
              <li className="mt-6">
                {" "}
                2023: After attending an open mic night at the UNSW Roundhouse,
                Alvin and James were motivated to form a band, inspired by the
                Traffic Control band&apos;s show-stopping performance.
              </li>
              <li className="mt-6 ml-14">
                {" "}
                In March, through the rock music society at the uni, Daryl Chong
                and Rick Su joined and FishPox was formed.
              </li>
              <li className="mt-6 ml-14">
                {" "}
                On June 14th of the same year, FishPox played their first live
                show at the UNSW Roundhouse Open Mic Night where the band&apos;s
                first original &quot;Things That I Can&apos;t&quot; was
                featured.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
