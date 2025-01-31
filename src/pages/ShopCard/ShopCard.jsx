import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from "../../redux/productSlice";
import { mockdata } from '../../assets/categoriesdata';
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
function ShopCard() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(setProducts(mockdata));
  }, [dispatch]);
  return (
    <div className="w-11/12 mx-auto">
    <div className="flex justify-center py-3">
      <h2 className="text-3xl font-bold">Shop</h2>
    </div>
    <div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
        {products.products?.slice(0, 15).map((product, index) => (
          <div key={index} className="border-2 border-gray-500 px-2 py-2 cursor-pointer transform transition-all hover:scale-105">
            <div className="max-w-[160px] h-[160px]">
              <img src={product.image} alt="" className="w-full h-full object-cover" />
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
              <div className="absolute top-6 right-0 flex justify-center items-center  transition-all duration-600 ease-in-out overflow-hidden group">
                <span className="bg-red-600 rounded-full w-10 h-10 flex text-center justify-center items-center text-white font-bold text-xl group-hover:hidden ">
                  +
                </span>
                <span className="hidden group-hover:flex rounded-full bg-red-600 w-28 h-10 transform transition-all duration-600 ease-in-out px-1 text-center justify-center items-center text-white font-semibold">
                  Add to cart
                </span>
              </div>
            </div>
          </div>
        ))}
    </div>
    </div>
    </div>
  )
}

export default ShopCard;