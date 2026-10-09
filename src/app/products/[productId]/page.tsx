import ProductDetailCard from "@/components/ProductDetailCard";
import { IProduct } from "@/types/type";

const ProductDetailPage = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params;

  const res = await fetch(
    `https://api.api-store.workers.dev/api/bazardor/products/${productId}`,
  );

  const data: IProduct = await res.json();

  const productDetails = [...data.markets].sort((a, b) => {
    const avgA = (a.min + a.max) / 2;
    const avgB = (b.min + b.max) / 2;
    return avgA - avgB;
  });
  //   console.log(data);

  const toBanglaNumber = (value: number) =>
    String(value).replace(/\d/g, (digit) => "০১২৩৪৫৬৭৮৯"[Number(digit)]);

  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center shadow  bg-[#FFFF] rounded-xl p-4  my-10">
        <div className="md:flex items-center gap-3 py-7">
          <div>
            <p className=" text-6xl p-4 rounded-xl bg-[#F0F5F0]">
              {data.image}
            </p>
          </div>
          <div>
            <h2 className="font-bold text-[30px]">{data.nameBn}</h2>
            <p className="text-[14px] text-[#1d271fa9] ">
              প্রতি কেজি {data.categoryNameBn}
            </p>
            <p>
              গতকালের তুলনায় আজ দাম{" "}
              <span className="font-semibold">বেড়েছে</span>{" "}
              {toBanglaNumber(data.yesterday - data.today)} টাকা
            </p>
          </div>
        </div>
        <div className="p-4 rounded-xl bg-[#F0F5F0] text-center">
          <div>
            <p>আজকের দাম</p>
            <h3 className="text-3xl  font-bold">
              {toBanglaNumber(data.today)}
            </h3>
            <p>{data.unit === "kg" ? "কেজি" : data.unit} / টাকা</p>
            <p
              className={
                data.change.dir === "flat"
                  ? "rounded-xl bg-gray-100 px-2 text-black"
                  : data.change.dir === "up"
                    ? "rounded-xl bg-red-100 px-2 text-red-700"
                    : "rounded-xl bg-green-100 px-2 text-green-700"
              }
            >
              {data.change.dir === "flat"
                ? "—"
                : data.change.dir === "up"
                  ? "▲"
                  : "▼"}{" "}
              {toBanglaNumber(Math.abs(data.change.pct))}%
            </p>
          </div>
        </div>
      </div>

      <div className="shadow bg-white rounded-xl p-4">
        <h2 className="font-semibold text-[18px]">দামের সারসংক্ষেপ</h2>
        <div className="grid grid-cols-3 gap-3 my-6">
          {/* সর্বনিম্ন দাম */}
          <div className="bg-[#F0F5F0] rounded-xl p-4 text-center">
            <p>সর্বনিম্ন দাম</p>
            <h2 className="text-[#1A9951] font-bold text-[24px] ">
              {toBanglaNumber(Math.min(...productDetails.map((p) => p.min)))}{" "}
              <span className="text-[15px]">টাকা</span>{" "}
            </h2>
            <p>সবচেয়ে কম দামের বাজার</p>
          </div>

          {/* সর্বাধিক দাম */}
          <div className="bg-[#F0F5F0] rounded-xl p-4 text-center">
            <p>সর্বনিম্ন দাম</p>
            <h2 className="text-red-500 font-bold text-[24px] ">
              {toBanglaNumber(Math.max(...productDetails.map((p) => p.max)))}{" "}
              <span className="text-[15px]">টাকা</span>{" "}
            </h2>
            <p>সবচেয়ে বেশি দামের বাজার</p>
          </div>
          {/* গড়  দাম */}
          <div className="bg-[#F0F5F0] rounded-xl p-4 text-center">
            <p>গড় দাম</p>
            <h2 className="text-blue-700 font-bold text-[24px] ">
              {toBanglaNumber(
                Math.round(
                  productDetails.reduce(
                    (sum, p) => sum + (p.min + p.max) / 2,
                    0,
                  ) / productDetails.length,
                ),
              )}{" "}
              <span className="text-[15px]">টাকা</span>{" "}
            </h2>
            <p>প্রতি কেজি-এর হিসাবে</p>
          </div>
        </div>

        <h3 className="font-semibold text-[18px]">বাজারভিত্তিক আজকের দাম</h3>

        <div>
          <div className="border-y border-base-300 grid grid-cols-5 px-4 items-center gap-3 py-3 text-sm">
            <span>বাজার</span>
            <span>বিভাগ</span>
            <span className="text-right">সর্বনিম্ন</span>
            <span className="text-right">সর্বাধিক</span>
            <span className="text-right">গড়</span>
          </div>

          {productDetails.map((product, i) => (
            <ProductDetailCard key={i} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
