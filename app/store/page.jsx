import React from "react";
import NewProduct from "../components/shop/products/product-item/NewProduct";

const page = () => {
  return (
    <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
        <NewProduct />
        <NewProduct />
        <NewProduct />
        <NewProduct />
        <NewProduct />
        <NewProduct />
        <NewProduct />
        <NewProduct />
        <NewProduct />
        <NewProduct />
        <NewProduct />
    </div>
  );
};

export default page;
