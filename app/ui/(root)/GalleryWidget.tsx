"use client";

import { useRef } from "react";
import Image from "next/image";
// @ts-expect-error splidejs package is missing its TypeScript types. The package and code works fine, just the types are missing, so its safe to ignore
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { RightArrowIcon } from "./icons/RightArrowIcon";

const GalleryWidget = () => {
  const splideRef = useRef(null);

  const goPrev = () => {
    // @ts-expect-error Reason defined above
    splideRef.current?.splide?.go("<");
  };

  const goNext = () => {
    // @ts-expect-error Reason defined above
    splideRef.current?.splide?.go(">");
  };

  const nextPrevButtonClasses = `cursor-pointer relative rounded-full bg-linear-to-br from-[#303439] to-[#161718] h-9 w-9 flex items-center 
            justify-center shadow-[0px_0px_20px_15px_rgba(28,36,48,0.5)] hover:brightness-80 active:from-[#869fc2] active:to-[#333943] transition-all duration-300 ease-in-out`;

  return (
    <div>
      <div className="flex justify-between items-center">
        <h5 className="bg-button-bg text-white py-4 px-8 rounded-2xl">Gallery</h5>

        <div className="flex items-center gap-8">
          <button
            className="text-white text-[0.7rem] py-3.5 px-6 rounded-full inset-shadow-[1px_1px_5px_0px_rgba(255,255,255,0.3)] 
            shadow-[5px_5px_5px_0px_rgba(0,0,0,0.5)]"
          >
            + ADD IMAGE
          </button>

          <div onClick={goPrev} className={nextPrevButtonClasses + " -mr-2"}>
            <RightArrowIcon className="p-0.5 text-[#71787b] active:text-white" />
          </div>

          <div onClick={goNext} className={nextPrevButtonClasses}>
            <RightArrowIcon className="p-0.5 text-[#71787b] active:text-white rotate-180" />
          </div>
        </div>
      </div>

      <Splide
        ref={splideRef}
        options={{
          perPage: 3,
          height: "10rem",
          gap: "1.2rem",
          arrows: false,
          pagination: false,
          type: "loop",
        }}
        hasTrack={false}
      >
        <SplideTrack className="pt-4 pb-2 px-24">
          {Array.from({ length: 4 }).map((_, index) => (
            <SplideSlide key={index} className="relative rounded-2xl pt-4">
              <div className="relative w-full h-full overflow-visible rounded-2xl">
                <Image
                  fill
                  src="/images/placeholder_img.jpg"
                  alt={`Placeholder image ${index}`}
                  className="rounded-2xl object-cover grayscale transition-all duration-500 ease-in-out
                    hover:grayscale-0 hover:-translate-y-2 hover:-rotate-2 hover:scale-105 hover:shadow-[5px_5px_7px_3px_rgba(0,0,0,0.5)]"
                />
              </div>
            </SplideSlide>
          ))}
        </SplideTrack>
      </Splide>
    </div>
  );
};

export default GalleryWidget;
