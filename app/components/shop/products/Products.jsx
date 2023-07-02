import React from 'react'
import Product from './product-item/Product';
import NewProduct from './product-item/NewProduct';

const Products = () => {
  return (
    <section className="pt-20">
      <h1 className="font-bold text-3xl py-10">Related Products</h1>
      <div className="flex flex-col gap-10">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <NewProduct />
      </div>
    </section>
  );
}

export default Products