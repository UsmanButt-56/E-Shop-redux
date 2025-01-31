import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navbar() {
  const item = useSelector((state) => state.cart.carts);
  console.log(item.length);
  return (
    <div className="w-full bg-white shadow-md">
      <div className="w-11/12 mx-auto h-[80px] flex items-center">
        <div className="flex justify-between items-center w-full h-full gap-6">
          <div>
            <Link to="/">
              <h2 className="text-md md:text-2xl lg:text-3xl font-bold">
                e-Shop
              </h2>
            </Link>
          </div>
          <div className="flex-1 relative">
            <form action="" className="w-full">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full border-2 border-gray-300 rounded-md px-4 py-2"
              />
            </form>
            <div className="absolute top-4 right-3">
              <FaSearch />
            </div>
          </div>
          <div className="flex gap-1 md:gap-3 items-center">
            <Link to="/cart">
              <div className="relative">
                <div>
                  <FaShoppingCart size={26} className="" />
                </div>
                <div className="absolute -top-1 -right-2 w-4 h-4 rounded-full bg-green-600 flex text-center items-center justify-center text-xs text-white">
                    {item.length}
                </div>
              </div>
            </Link>
            <div className="hidden md:flex">
              <h2 className="text-md md:text-2xl font-bold">
                Login | Register
              </h2>
            </div>
            <div className="flex md:hidden">
              <FaUser className="" size={22} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-11/12 mx-auto justify-center items-center gap-9 py-3 font-bold text-xl hidden md:flex">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/shop" className="hover:underline">
          Shop
        </Link>
        <Link to="/" className="hover:underline">
          Contact
        </Link>
        <Link to="/" className="hover:underline">
          About
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
