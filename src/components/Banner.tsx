import Image from "next/image";
import React from "react";

const Banner = () => {
  const date = new Date().toLocaleDateString("bn-bd", {
    dateStyle: "full",
  });
  return (
    <div className="bg-[#FFFFFF] rounded-xl min-h-70 py-1 px-4 mt-8 shadow">
      <div className="flex items-center justify-between">
        {/* text */}
        <div className="space-y-4">
          <p className="text-[#05893E]  bg-[#05893e36] max-w-45 rounded-2xl px-2 py-1">
            {date}
          </p>
          <h2 className="text-4xl font-bold text-black ">
            আজকের বাজারের দাম এক নজরে
          </h2>

          <p className="text-[#1d271f9d] ">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
            বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
          </p>

          <button className="btn bg-[#05893E] text-white font-semibold text-[14px]">
            সব পণ্য দেখুন
          </button>
        </div>
        {/* banner image */}
        <div>
          <Image
            src="/bazar-hero.png"
            width={315}
            height={263}
            alt="bazar hero image"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
