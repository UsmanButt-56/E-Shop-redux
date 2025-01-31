import React, { useEffect } from "react";
import { Categories, mockdata } from "../../assets/categoriesdata";
//import { Categories } from "../../assets/categoriesdata";
import framed from "../../assets/frame.jpg";
import InfoSection from "../InfoSection/InfoSection";
import CategorySection from "../CategorySection/CategorySection";
import { setProducts } from "../../redux/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
//import ShopCard from "../ShopCard/ShopCard";
import { addtocart } from "../../redux/cartSlice";
function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(setProducts(mockdata));
  }, [dispatch]);

  const handleCart = (product) =>
  {
    dispatch(addtocart(product));
    alert("Data Added");
  }
  return (
    <>
      <div className="w-11/12 mx-auto lg:py-4 mt-4 md:mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-[30%_70%]">
          <div className="lg:me-4">
            <div className="bg-red-600 py-3 px-2 text-white font-bold">
              <h2>SHOP BY CATEGORIES</h2>
            </div>
            <div className="bg-gray-300">
              <ul className="ms-2">
                {Categories.map((category, index) => (
                  <li
                    className="flex items-center gap-3 py-2 text-lg cursor-pointer"
                    key={index}
                  >
                    <div className="w-3 h-3 border-2 border-red-500 rounded-md"></div>
                    {category}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-span-1 relative ">
            <div className="w-84 h-64 md:h-96">
              <img src={framed} alt="" className="w-full h-full" />
            </div>

            <div className="absolute top-14 md:top-20 left-5 md:left-10 flex flex-col gap-2 sm:gap-4">
              <p> Usman | e-Shop </p>
              <h1 className="font-bold text-lg md:text-3xl">
                Welcome to E-Shop
              </h1>
              <h1 className="font-medium text-md md:text-xl">
                Million+ Products
              </h1>
              <div className="bg-red-600 w-26 md:w-40 h-8 md:h-12 flex items-center">
                <button className="w-full text-white font-bold">
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <InfoSection />
      <CategorySection />
      <div className="w-11/12 mx-auto">
        <div className="flex justify-center pb-3">
          <h2 className="text-3xl font-bold">Top Products</h2>
        </div>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
            {products.products?.slice(0, 5).map((product, index) => (
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
                  <div className="absolute top-6 right-0 flex justify-center items-center  transition-all duration-600 ease-in-out overflow-hidden group" onClick={()=>handleCart(product)}>
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
      <div className="w-11/12 mx-auto py-3">
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
        
    </>
  );
}

export default Home;
