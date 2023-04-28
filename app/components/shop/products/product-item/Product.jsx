import Image from "next/image";
import Link from "next/link";
import React from "react";

const Product = () => {
  return (
    <div className="flex gap-5">
      <div className="image flex x-col justify-start">
        <Link href={"/"}>
          <Image
            src={"/images/img1.jpg"}
            className="rounded"
            width={400}
            height={200}
          />
        </Link>
      </div>
      <div className="info flex justify-center flex-col">
        <div className="cat">
          <Link href={"/"} className="text-orange-600 hover:text-orange-800">
            Business, Travel
          </Link>
          -
          <Link href={"/"} className="text-gray-800 hover:text-gray-600">
            July 3, 2022
          </Link>
        </div>
        <div className="title">
          <Link href={"/"}>
            <span className="text-xl font-bold text-gray-800 hover:text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
              sed, magnam fuga illum aut nobis saepe totam asperiores eos rem
              modi commodi consequatur quo optio similique corrupti ipsa ipsum
              facilis?
            </span>
          </Link>
        </div>
        <p className="text-gray-500 py-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, hic
          natus. Autem nihil perferendis praesentium inventore amet atque
          eligendi laboriosam aspernatur rerum, assumenda minima dolor ea,
          iusto, aperiam quibusdam dolorem.
        </p>
      </div>
    </div>
  );
};

export default Product;
