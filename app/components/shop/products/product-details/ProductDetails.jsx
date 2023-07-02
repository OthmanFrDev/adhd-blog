"use client";
import Image from "next/image";
import React, { useState } from "react";

const ProductDetails = () => {
  const [images, setImages] = useState({
    img1: "/images/img1.jpg",
    img2: "/images/img1.jpg",
    img3: "/images/img1.jpg",
    img4: "/images/planner.jpg",
    img5: "/images/background.jpg",
    img6: "/images/img1.jpg",
    img7: "/images/img1.jpg",
  });
  const [activeImg, setActiveImg] = useState(images.img1);
  return (
    <div className="flex flex-col justify-between lg:flex-row gap-16 lg:items-center">
      <div className="flex flex-col gap-6 lg:w-2/4">
        <Image
          src={activeImg}
          alt=""
          width={800}
          height={400}
          className="aspect-square object-cover rounded-xl"
        />
        <div className="flex flex-row justify-between h-24">
          <img
            src={images.img1}
            alt=""
            className="w-24 h-24 rounded-md cursor-pointer"
            onClick={() => setActiveImg(images.img1)}
          />
          <img
            src={images.img5}
            alt=""
            className="w-24 h-24 rounded-md cursor-pointer"
            onClick={() => setActiveImg(images.img5)}
          />
          <img
            src={images.img4}
            alt=""
            className="w-24 h-24 rounded-md cursor-pointer"
            onClick={() => setActiveImg(images.img4)}
          />
          <img
            src={images.img3}
            alt=""
            className="w-24 h-24 rounded-md cursor-pointer"
            onClick={() => setActiveImg(images.img3)}
          />
          <img
            src={images.img2}
            alt=""
            className="w-24 h-24 rounded-md cursor-pointer"
            onClick={() => setActiveImg(images.img2)}
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 lg:w-2/4">
        <div>
          <span className="text-violet-600 font-semibold">Special Product</span>
          <h1 className="text-3xl font-bold">next Product 3</h1>
        </div>
        <p className="text-gray-700 text-justify">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
          blanditiis amet libero neque sed maxime adipisci officiis nobis,
          inventore enim fuga autem delectus quaerat totam modi vitae, quibusdam
          pariatur repellendus? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Cumque dolorum, culpa velit sunt iure quibusdam a
          architecto in sit placeat. Fuga, error? Eius sint saepe ratione iure
          obcaecati non dolor. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Eaque quod similique ab error cupiditate hic
          distinctio id obcaecati, fugit facere aliquid? Dolorem maiores minima
          facilis labore quibusdam, accusantium maxime ad. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Laudantium ducimus ut veritatis
          odio velit animi nisi facere et recusandae esse? Provident et ipsum
          esse quisquam dolor minima, temporibus quod expedita! Lorem ipsum
          dolor sit, amet consectetur adipisicing elit. Ab quam rerum eius nam
          nihil quidem reprehenderit in fugit dolorum non autem dignissimos
          provident voluptatibus ipsum, laudantium tenetur? Ipsam, blanditiis
          facere.
        </p>
        <h6 className="text-2xl font-semibold">$ 199.00</h6>
        <div className="flex flex-row items-center gap-12">
          <div className="flex flex-row items-center">
            <button className="bg-gray-100 py-2 px-4 rounded-lg text-violet-800 text-3xl">
              -
            </button>
            <span className="py-4 px-6 rounded-lg">1</span>
            <button className="bg-gray-100 py-2 px-4 rounded-lg text-violet-400 text-3xl">
              +
            </button>
          </div>
          <button className="bg-violet-800 text-white font-semibold py-3 lg:px-16 md:px-16 px-6 rounded-xl h-full whitespace-nowrap">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
