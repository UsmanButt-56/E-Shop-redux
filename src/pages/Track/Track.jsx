import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function Track() {
    const cart = useSelector((state) => state.cart.carts);
    console.log("TRack", cart);
    const navigate = useNavigate();
    const continu = () =>
    {
      navigate('/');
    }
    const location = useLocation();
    const order = location.state?.order;
  return (
    <div className="w-11/12 mx-auto py-3">
      <div className="text-3xl font-bold pb-3">
        <h3>Track Your Order</h3>
      </div>
      <div className="w-full bg-gray-200 rounded-md border-white flex flex-col px-2 py-3">
        <div className="flex flex-col space-y-2">
          {/* <h5 className="font-semibold">Order Summary</h5> */}
          <p className="font-semibold">Order Number : {order.orderNumber} </p>
          <p className="font-semibold">Order Status</p>
          {/* <h5 className="font-semibold">Shipping Information</h5>
          <p className="font-normal">main street</p>
          <p className="font-normal">california , 4545</p> */}
          <h5 className="font-semibold">Items Order</h5>
          {/* {cart.map((carr) => (
            <div className="flex justify-between">
              <div>
                <p className="font-normal">{carr.title} (x{carr.quantity})</p>
              </div>
              <div>
                <p className="font-normal">${carr.totalprice}</p>
              </div>
            </div>
          ))} */}
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
          <h5 className="font-semibold">Estimated Delievery Date</h5>
          <h5 className="font-semibold">Shipping Information</h5>
          <p className="font-normal">{order.shippingInformation.address}</p>
          <p className="font-normal">{order.shippingInformation.city}</p>

          {/* <div className="flex justify-between">
            <div>
              <p className="font-semibold">Total price:</p>
            </div>
            <div>
              <p className="font-normal">${totalprice}</p>
            </div>
          </div> */}
        </div>
      </div>
      <div className="flex gap-3 text-white mt-6">
        <div className="bg-blue-600 w-32 h-10">
          <button className="w-full h-full">Contact Support</button>
        </div>
        <div className="bg-red-600 w-44 h-10" onClick={ () => continu()}>
          <button className="w-full h-full">Continue Shopping</button>
        </div>
      </div>
    </div>
  )
}

export default Track;