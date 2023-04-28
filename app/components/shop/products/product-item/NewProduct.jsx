import Image from "next/image";

const { default: Link } = require("next/link");

const NewProduct = () => {
  return (
    <div className="flex gap-5">
      <Link href={"/store/products/1"}>
        <Image
          className="rounded"
          src={"/images/planner.jpg"}
          width={350}
          height={250}
        />
        <div className="p-4 text-black/[0.9]">
          <h2 className="text-lg font-medium">Product Name</h2>
          <div className="flex items-center text-black/[0.5]">
            <p className="mr-2 text-lg font-semibold">$20.00</p>
            <p className="text-base font-meduim line-through">$25.00</p>
            <p className="ml-auto text-base font-medium text-green-500">
              20% off
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default NewProduct;
