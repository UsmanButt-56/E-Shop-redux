import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { FaHeadset } from "react-icons/fa";
import { FaMoneyBillWave } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaTag } from "react-icons/fa";
//import framed from "../../assets/frame.jpg";
function InfoSection() {
  const InfoItems = [
    {
      id: 1,
      icon: <FaShippingFast className="text-3xl text-red-600" />,
      title: "Free Shipping",
      description: "Get your orders delivered with no cost",
    },
    {
      id: 2,
      icon: <FaHeadset className="text-3xl text-red-600" />,
      title: "Support 24/7",
      description: "We are here to assist you anytime",
    },
    {
      id: 3,
      icon: <FaMoneyBillWave className="text-3xl text-red-600" />,
      title: "100% Money Back",
      description: "Full refund if you are not satisfied",
    },
    {
      id: 4,
      icon: <FaLock className="text-3xl text-red-600" />,
      title: "Payment Secure",
      description: "Your payment information is safe with us",
    },
    {
      id: 5,
      icon: <FaTag className="text-3xl text-red-600" />,
      title: "Discount",
      description: "Enjoy the best prices on our products",
    },
  ];
  return (
    <div className="w-11/12 mx-auto bg-white py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {InfoItems.map((info, index) => (
          <div
            className="border shadow-xl items-center text-center flex flex-col gap-2 py-3 px-1 hover:scale-105 transform transition-transform duration-300 cursor-pointer"
            key={index}
          >
            <div className="">
              {info.icon}
            </div>
            <div className="font-bold text-lg">
              <h3>{info.title}</h3>
            </div>
            <div className="font-normal text-md">
              <p>{info.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InfoSection;