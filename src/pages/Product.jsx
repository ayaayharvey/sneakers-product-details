import React, { useState } from "react";
import { shopIcon } from "../resources/icons";
import product_1 from "../resources/images/image-product-1.jpg";
import product_thumbnail_1 from "../resources/images/image-product-1-thumbnail.jpg";
import product_2 from "../resources/images/image-product-2.jpg";
import product_thumbnail_2 from "../resources/images/image-product-2-thumbnail.jpg";
import product_3 from "../resources/images/image-product-3.jpg";
import product_thumbnail_3 from "../resources/images/image-product-3-thumbnail.jpg";
import product_4 from "../resources/images/image-product-4.jpg";
import product_thumbnail_4 from "../resources/images/image-product-4-thumbnail.jpg";

const Product = () => {
  const [activeProduct, setActiveProduct] = useState(1);
  const product_images = [
    {
      id: 1,
      image: product_1,
      thumbnail: product_thumbnail_1,
    },
    {
      id: 2,
      image: product_2,
      thumbnail: product_thumbnail_2,
    },
    {
      id: 3,
      image: product_3,
      thumbnail: product_thumbnail_3,
    },
    {
      id: 4,
      image: product_4,
      thumbnail: product_thumbnail_4,
    },
  ];
  return (
    <div className="flex items-center px-40 py-10">
      <div className="px-10">
        <div>
          {product_images.map((prod, i) => (
            <img
              key={i}
              className="w-100 rounded-lg"
              src={null ? product_1 : activeProduct === prod.id && prod.image} //this line is for sample use
              alt=""
            />
          ))}
        </div>
        <div className="grid grid-cols-4 gap-4 mt-4">
          {product_images.map((prod, i) => (
            <div
              key={i}
              className={`border-2 border-transparent rounded-lg ${
                activeProduct === prod.id && "border-primary-dark"
              }`}
            >
              <img
                className={`h-30 rounded-lg cursor-pointer ${
                  activeProduct === prod.id && "opacity-30 "
                }`}
                src={prod.thumbnail}
                alt=""
                onClick={() => setActiveProduct(prod.id)}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="px-10">
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
        <span className="text-gray-300 line-through font-bold mt-1">
          $250.00
        </span>
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
