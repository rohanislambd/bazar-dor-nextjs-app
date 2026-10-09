import Image from "next/image";

const Header = () => {
     const date = new Date().toLocaleDateString("bn-Bd", {
    dateStyle: "full",
  });
  return (
    <header className="container mx-auto mt-5">
      <div className=" flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <div className="flex justify-center items-center bg-[#05893E] w-10 h-10 rounded-xl">
            <Image src="/logo-icon.png" alt="logo" width={18} height={28} />
          </div>

          <div>
            <h1 className="font-bold text-xl">বাজার দর</h1>
              <p>{date}</p>
          </div>
        </div>

        <div className="flex gap-2">
          <button className="btn font-semibold">সাইন ইন</button>
          <button className="btn bg-[#05893E] text-white font-semibold shadow-2xl">
            সাইন আপ
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
