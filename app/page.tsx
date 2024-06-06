import Image from "next/image";
import fishPoxPoster from "/public/assets/Fishpox.png";
import placeHolderImage from "/public/assets/2024oweekgignight.png";
export default function Home() {
  return (
    <>
      <h2 className="my-8 text-white" style={{ fontSize: "20px" }}>
        Information
      </h2>

      <div className="flex flex-col">
        <div className="flex info-box">
          <Image
            src={placeHolderImage}
            alt="place holder"
            width={500}
            height={500}
            className="w-1/2"
          />
          <div className="ml-4 leading-[2] info-box-description">
            <p> 7/02/2024 (WEDNESDAY) Arc UNSW O-Week Gig Night </p>
            <p className="mt-4">
              Hosted by the UNSW student organisation Arc UNSW, Darling Street,
              FishPox and Hunting Thompson will play at the Roundhouse from
              4-8pm on February 7th (Wednesday). Heed from traffic control band
              will be filling in as our drummer on the night 👀.
            </p>

            <p className="mt-4"> Start 16:00 </p>
          </div>
        </div>
        <hr className="padded-hr" />
        <div className="flex info-box">
          <Image
            src={fishPoxPoster}
            alt="fishpox photo"
            width={500}
            height={500}
            className="w-1/2"
          />
          <div className="flex flex-col items-start">
            <div className="ml-4 leading-[2] info-box-description">
              <p> 14/6/2023 (Wednesday) Gigs In The Garden 🐠 </p>
              <p className="mt-4">
                FishPox&rsquo;s first live performance at UNSW&rsquo;s{" "}
                <i>Gigs In The Garden </i>
                live performance, &rdquo;Open Mic Night&rdquo; by several bands,
                at the Roundhouse in Kensington will be held on June 14th
                (Wednesday).
              </p>

              <p className="mt-4">Start 17:00/17:30</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
