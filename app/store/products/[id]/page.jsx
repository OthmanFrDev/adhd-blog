import NewProduct from "@/app/components/shop/products/product-item/NewProduct";
import ProductDetails from "../../../components/shop/products/product-details/ProductDetails";
import React from "react";

const page = () => {
  return (
    <div className="max-w-7xl mx-auto p-8">
      <ProductDetails />
      {/* <div className="bg-gray-300 mb-16">
        <div className="container mx-auto">
          <h2 className="h2 mb-6 text-center xl:text-left">Related Products</h2>
        </div>
      </div> */}
    </div>
  );
};

export default page;
