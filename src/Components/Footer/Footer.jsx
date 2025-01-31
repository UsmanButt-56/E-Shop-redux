import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
function Footer() {
  return (
    <footer className="bg-gray-700 text-white py-8 mt-4">
      <div className="w-11/12 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="">
            <h3 className="text-md font-bold">e-Shop</h3>
            <p>
              Your one-stop shop for all your needs. Shop with us and experience
              the best online shopping experience.
            </p>
          </div>
          <div className="flex flex-col md:items-center">
            <h4 className="text-lg font-semibold py-1">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:underline">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Follow Us</h4>
            <div className="flex space-x-4 mt-4">
              <a href="" className="hover:text-gray-400">
                <FaFacebook size={22} />
              </a>
              <a href="" className="hover:text-gray-400">
                <FaTwitter size={22} />
              </a>
              <a href="" className="hover:text-gray-400">
                <FaInstagram size={22} />
              </a>
              <a href="" className="hover:text-gray-400">
                <FaLinkedin size={22} />
              </a>
            </div>
            <form className="flex justify-center items-center mt-4">
              <input
                type="email"
                placeholder="Enter Email"
                className="w-full p-2 bg-gray-800 rounded-l-lg border border-gray-600"
              />
              <button className="bg-red-600 text-white px-4 py-2 rounded-r-lg border-gray-600">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="w-11/12 mx-auto border-t border-gray-500 mt-5 py-5">
        <div className="text-center sm:flex sm:justify-between">
          <div>
            <p>&copy; 2024 e-shop All rights reserved.</p>
          </div>
          <div className="flex flex-col justify-center items-center sm:flex space-x-4">
            <a href="" className="hover:underline">Privacy Policy</a>
            <a href="" className="hover:underline">Terms & Conditions</a>
          </div>
        </div>
      </div>
      {/*  */}
    </footer>
  );
}

export default Footer;