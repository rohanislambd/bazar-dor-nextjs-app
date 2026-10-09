import Image from "next/image";
import Navlinks from "./Navlinks";
import Link from "next/link";

const Header = () => {
     const date = new Date().toLocaleDateString("bn-Bd", {
    dateStyle: "full",
  });
  return (
    <header className="py-5 bg-[#f8f8f8]">
      <div className="border-b border-base-300 pb-3">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
            <div className="flex gap-2 items-center">
          <div className="flex justify-center items-center bg-[#05893E] w-10 h-10 rounded-xl">
            <Image src="/logo-icon.png" alt="logo" width={18} height={28} />
          </div>

          <div>
            <h1 className="font-bold text-xl">বাজার দর</h1>
              <p>{date}</p>
          </div>
        </div>
        </Link>

        <div className="flex gap-2">
          <button className="btn font-semibold">সাইন ইন</button>
          <button className="btn bg-[#05893E] text-white font-semibold shadow-2xl">
            সাইন আপ
          </button>
        </div>
      </div>
      </div>
      <Navlinks/>
    </header>
  );
};

export default Header;
