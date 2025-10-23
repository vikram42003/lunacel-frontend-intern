import WidgetContainer from "../ui/(root)/WidgetContainer";
import GalleryCard from "../ui/(root)/GalleryWidget";
import LeftComponent from "../ui/(root)/LeftComponent";
import ProfileWidget from "../ui/(root)/ProfileWidget";

export default function Home() {
  return (
    <section className="layout-container flex gap-12">
      {/* Adding a dummy component to the left part that we need to keep empty, because something may 
      need to go there in the future. Also it keeps the layouts simpler. */}
      {/* Also, its slightly bigger than the widgets. In the figma design I saw that the left part (836px) is slightly wider than right part (720px)*/}
      <LeftComponent className={"flex-13/24"} />

      <div className="flex-11/24 flex flex-col gap-8">
        {/* Made WidgetContainer a reusable component since it has common styles*/}
        <WidgetContainer className="flex-1/2">
          <ProfileWidget />
        </WidgetContainer>

        <WidgetContainer className="flex-1/2">
          <GalleryCard />
        </WidgetContainer>
      </div>
    </section>
  );
}

// import React, { useRef } from "react";
// import Image from "next/image";
// import { Splide, SplideSlide } from "@splidejs/react-splide";
// import "@splidejs/react-splide/css";

// const GalleryCard = () => {
//   const splideRef = useRef(null);

//   const goPrev = () => {
//     splideRef.current?.splide?.go("<");
//   };

//   const goNext = () => {
//     splideRef.current?.splide?.go(">");
//   };

//   return (
//     <div>
//       <div className="flex justify-between items-center mb-4">
//         <h5 className="bg-button-bg text-white py-4 px-8 rounded-2xl">Gallery</h5>

//         <div className="flex items-center gap-8">
//           <button className="text-white text-[0.7rem] py-3.5 px-6 rounded-full inset-shadow-[1px_1px_5px_0px_rgba(255,255,255,0.3)] shadow-[5px_5px_5px_0px_rgba(0,0,0,0.5)]">
//             + ADD IMAGE
//           </button>

//           {/* Left arrow */}
//           <div
//             onClick={goPrev}
//             className="cursor-pointer -mr-4 relative rounded-full bg-linear-to-br from-[#303439] to-[#161718] h-9 w-9 flex items-center justify-center shadow-[0px_0px_20px_15px_rgba(28,36,48,0.5)]"
//           >
//             <Image
//               fill
//               src="/arrow_icon.svg"
//               alt="Left arrow icon"
//               className="p-2.5 rotate-180"
//             />
//           </div>

//           {/* Right arrow */}
//           <div
//             onClick={goNext}
//             className="cursor-pointer relative rounded-full bg-linear-to-br from-[#303439] to-[#161718] h-9 w-9 flex items-center justify-center shadow-[0px_0px_20px_15px_rgba(28,36,48,0.5)]"
//           >
//             <Image
//               fill
//               src="/arrow_icon.svg"
//               alt="Right arrow icon"
//               className="p-2.5"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Carousel */}
//       <Splide
//         ref={splideRef}
//         options={{
//           perPage: 3,
//           gap: "1rem",
//           arrows: false, // Hide default arrows because we have custom buttons
//           pagination: false,
//           type: "loop",
//         }}
//       >
//         {/* Replace these slides with your actual images */}
//         <SplideSlide>
//           <img
//             src="https://via.placeholder.com/300x200?text=Image+1"
//             alt="Image 1"
//             className="rounded-lg"
//           />
//         </SplideSlide>
//         <SplideSlide>
//           <img
//             src="https://via.placeholder.com/300x200?text=Image+2"
//             alt="Image 2"
//             className="rounded-lg"
//           />
//         </SplideSlide>
//         <SplideSlide>
//           <img
//             src="https://via.placeholder.com/300x200?text=Image+3"
//             alt="Image 3"
//             className="rounded-lg"
//           />
//         </SplideSlide>
//         <SplideSlide>
//           <img
//             src="https://via.placeholder.com/300x200?text=Image+4"
//             alt="Image 4"
//             className="rounded-lg"
//           />
//         </SplideSlide>
//       </Splide>
//     </div>
//   );
// };

// export default GalleryCard;

