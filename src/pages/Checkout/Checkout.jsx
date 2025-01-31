import React, { useState } from "react";
import Input from "../../Components/Input/Input";
import { IoIosArrowDown } from "react-icons/io";
//import belt from '../../assets/belt.jpg';
import { useSelector } from "react-redux";
function Checkout() {
  const [isBillingOpen, setIsBillingOpen] = useState(false);
  const handleOpen = () => {
    setIsBillingOpen(!isBillingOpen);
  };
  const [isShippingOpen, setIsShippingOpen] = useState(false);
  const handleShipping = () => {
    setIsShippingOpen(!isShippingOpen);
  };
  const [isPayment, setPayment] = useState(false);
  const Payment = () => {
    setPayment(!isPayment);
  };

  const cart = useSelector((state) => state.cart.carts);
  console.log("The cart is",cart);
  const totalprice = useSelector((state) => state.cart.totalprice);
  return (
    <div className="w-11/12 mx-auto py-5">
      <div>
        <h3 className="font-bold text-3xl">CHECKOUT</h3>
        <div className="grid grid-cols-1 md:grid-cols-[70%_30%] gap-3">
          <div className="flex flex-col gap-4">
            <div className="border border-gray-500 px-2 py-2">
              <div>
                <div className="flex justify-between py-1">
                  <div>
                    <h5 className="text-md font-bold">Billing Information</h5>
                  </div>
                  <div
                    className={`text-xl font-bold ${
                      isBillingOpen ? "rotate-180" : ""
                    }`}
                    onClick={() => handleOpen()}
                  >
                    <IoIosArrowDown />
                  </div>
                </div>
                {isBillingOpen && (
                  <form action="">
                    <div>
                      <Input name="Name" type="text" placeholder="Enter Name" />
                    </div>
                    <div>
                      <Input
                        name="Email"
                        type="email"
                        placeholder="Enter Email"
                      />
                    </div>
                    <div>
                      <Input
                        name="Phone"
                        type="number"
                        placeholder="Enter Phone #"
                      />
                    </div>
                  </form>
                )}
              </div>
            </div>
            <div className="border border-gray-500 px-2 py-2">
              <div>
                <div className="flex justify-between py-1">
                  <div>
                    <h5 className="text-md font-bold">Shipping Information</h5>
                  </div>
                  <div
                    className={`text-xl font-bold ${
                      isShippingOpen ? "rotate-180" : ""
                    }`}
                    onClick={() => handleShipping()}
                  >
                    <IoIosArrowDown />
                  </div>
                </div>
                {isShippingOpen && (
                  <form action="">
                    <div>
                      <Input
                        name="Address"
                        type="text"
                        placeholder="Enter Address"
                      />
                    </div>
                    <div>
                      <Input
                        name="City"
                        type="email"
                        placeholder="Enter california"
                      />
                    </div>
                    <div>
                      <Input
                        name="Zip Code"
                        type="number"
                        placeholder="Enter Zip Code"
                      />
                    </div>
                  </form>
                )}
              </div>
            </div>
            {/* payment Method */}
            <div className="border border-gray-500 px-2 py-2">
              <div>
                <div className="flex justify-between py-1">
                  <div>
                    <h5 className="text-md font-bold">Payment Method</h5>
                  </div>
                  <div
                    className={`text-xl font-bold ${
                      isPayment ? "rotate-180" : ""
                    }`}
                    onClick={() => Payment()}
                  >
                    <IoIosArrowDown />
                  </div>
                </div>
                {isPayment && (
                  <form action="">
                    <div className="flex flex-col">
                      <label>
                        <input type="radio" name="option" value="option1" />{" "}
                        Cash on Delievery
                      </label>
                      <label className="">
                        <input type="radio" name="option" value="option2" />{" "}
                        Debit Card
                      </label>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>

          <div className=" border-gray-300 px-4 py-2 min-h-0 shadow-md">
            <div className="">
              <h3 className="text-xl font-semibold">Order Summary</h3>
            </div>
            {
              cart.map((item)=>(
                <div className="flex justify-between border-b border-gray-500 py-1">
              <div className="flex">
                <div className="w-16 h-16">
                  <img src={item.image} alt="" className="w-full h-full"/>
                </div>
                <div className="flex flex-col justify-center">
                  <div>
                    <h3>{item.name}</h3>
                  </div>
                  <div>
                    <p>${item.price} * {item.quantity}</p>
                  </div>
                </div>
              </div>
              <div>${item.price}</div>
            </div>
              ))
            }
            

            <div className="flex justify-between py-2">
              <div>Total Price:</div>
              <div className="font-bold">${totalprice}</div>
            </div>
            <div className="bg-red-600 text-white w-full h-[40px] flex justify-center">
              <button>Place Order</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;