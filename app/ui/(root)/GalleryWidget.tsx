import Image from "next/image"

const GalleryCard = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h5 className="font-medium bg-button-bg text-white py-4 px-8 rounded-2xl">
          Gallery
        </h5>

        <div className="flex items-center gap-8">
          <button className="font-medium bg-[#4a4f56] text-white text-[0.7rem] py-3.5 px-6 rounded-full inset-shadow-[1px_1px_5px_0px_rgba(255,255,255,0.3)] shadow-[10px_10px_10px_0px_rgba(0,0,0,0.5)]">
            + ADD IMAGE
          </button>

          <div className="-mr-4 relative rounded-full bg-linear-to-br from-[#303439] to-[#161718] h-9 w-9 flex items-center justify-center cursor-pointer shadow-[0px_0px_15px_10px_rgba(28,36,48,0.5)]">
            <Image
              fill
              src="/arrow_icon.svg"
              alt="Left arrow icon"
              className="p-2.5 rotate-180"
            />
          </div>
          
          <div className="relative rounded-full bg-linear-to-br from-[#303439] to-[#161718] h-9 w-9 flex items-center justify-center cursor-pointer shadow-[0px_0px_15px_10px_rgba(28,36,48,0.5)]">
            <Image
              fill
              src="/arrow_icon.svg"
              alt="Left arrow icon"
              className="p-2.5"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default GalleryCard