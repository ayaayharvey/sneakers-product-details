import React from "react";
import { shopIcon } from "../resources/icons";

const Product = () => {
  return (
    <div className="grid grid-cols-2 px-40 py-20">
      <div>image</div>
      <div>
        <h3 className="text-primary-dark font-bold">Sneaker Company</h3>
        <h2 className="text-dark mt-5 text-5xl font-bold">
          Fall Limited Edition Sneakers
        </h2>
        <p className="text-gray-500 leading-relaxed mt-5">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <div className="flex items-center mt-5">
          <span className="text-dark text-xl font-bold">$125.00</span>
          <span className="bg-primary-light text-sm font-bold ml-3 px-1.5 py-0.5 rounded-md text-primary-dark">
            50%
          </span>
        </div>
        <span className="text-gray-300 line-through font-bold">$250.00</span>
        <div className="mt-5 flex">
          <div className="bg-gray-100 rounded-md py-2">
            <span className="text-primary-dark font-bold text-xl px-3">-</span>
            <span className="text-dark font-bold px-4">0</span>
            <span className="text-primary-dark font-bold text-xl px-3">+</span>
          </div>
          <button className="bg-primary-dark text-white font-bold text-sm ml-3 px-14 rounded-md flex items-center">
            <span className="h-4 w-4 mr-3">{shopIcon}</span> Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
