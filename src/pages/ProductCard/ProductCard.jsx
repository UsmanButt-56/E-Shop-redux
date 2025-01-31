import React from "react";

function ProductCard({ product }) {
  return (
    <>
      <div key={product.id} className="border-2 border-gray-500 px-2 py-2">
        <div className="max-w-[160px] h-[160px]">
          <img
            src={product.image}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col relative">
          <h1 className="text-md font-bold">{product.title}</h1>
          <h1 className="text-md font-semibold text-gray-500">
            ${product.price}
          </h1>
          <div className="flex mt-1">
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaRegStar className="text-yellow-500" />
          </div>
          <div className="absolute top-6 right-0 flex justify-center items-center group transition-all duration-600 ease-in-out overflow-hidden">
            <span className="bg-red-600 rounded-full w-10 h-10 flex text-center justify-center items-center text-white font-bold text-xl group-hover:hidden ">
              +
            </span>
            <span className="hidden group-hover:flex rounded-full bg-red-600 w-28 h-10 transform transition-all duration-600 ease-in-out px-1 text-center justify-center items-center text-white font-semibold">
              Add to cart
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;