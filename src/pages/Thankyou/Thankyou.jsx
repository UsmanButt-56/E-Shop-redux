import React from "react";
//import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function Thankyou({order}) {
  
  // const cart = useSelector((state) => state.cart.carts);
  // console.log("Thankyou cart", cart);

  // const totalprice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  // console.log("Total Price:", totalprice);
  
  const navigate = useNavigate();
  const continu = () =>
  {
    navigate('/');
  }
  const track = () =>
  {
    navigate('/track' ,{state : { order }});
  }
  // console.log("Show total in thankyou,", total);
  return (
    <div className="w-11/12 mx-auto py-3">
      <div className="text-3xl font-bold pb-3">
        <h3>Thank you for your order!</h3>
      </div>
      <div className="text-gray-800">
        <p>
          Your order has been placed successfully. You will receive an email
          confirmation shortly.
        </p>
      </div>
      <div className="w-full bg-gray-200 rounded-md border-white flex flex-col px-2 py-3">
        <div className="flex flex-col space-y-2">
          <h5 className="font-semibold">Order Summary</h5>
          <p className="font-normal">Order Number : {order.orderNumber} </p>
          <h5 className="font-semibold">Shipping Information</h5>
          {/* <p className="font-normal">{address}, {city}, {zipcode}</p> */}
          <p className="font-normal">{order.shippingInformation.address}</p>
          <p className="font-normal">{order.shippingInformation.city}</p>
          <h5 className="font-semibold">Items Order</h5>
          {order.products.map((item) => (
            <div className="flex justify-between">
              <div>
                <p className="font-normal">{item.title} (x{item.quantity})</p>
              </div>
              <div>
                <p className="font-normal">${item.price * item.quantity}</p>
              </div>
            </div>
          ))} 

          <div className="flex justify-between">
            <div>
              <p className="font-semibold">Total price:</p>
            </div>
            <div>
              <p className="font-semibold">{order.Totalprice}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-3 text-white mt-6">
        <div className="bg-green-600 w-32 h-10" onClick={() => track()}>
          <button className="w-full h-full">Track Order</button>
        </div>
        <div className="bg-red-600 w-44 h-10" onClick={ () => continu()}>
          <button className="w-full h-full">Continue Shopping</button>
        </div>
      </div>
    </div>
  );
}

export default Thankyou;