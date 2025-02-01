import React,{useState} from "react";
import empty from '../../assets/empty.jpg';
import { useSelector } from "react-redux";
import { FaTrash } from "react-icons/fa";
import Modal from "../Modal/Modal";
import { useDispatch } from "react-redux";
import { Decrease, Increase, removeitem } from "../../redux/cartSlice";
import { useNavigate} from 'react-router-dom';
function Cart() {
  const cart = useSelector((state) => state.cart.carts);
  console.log(cart);

  const totalprice = useSelector((state) => state.cart.totalprice);
  console.log(totalprice);

  const totalquantity = useSelector((state) => state.cart.totalQuantity);
  console.log(totalquantity);

  const [address , setAddress] = useState('123, abc xyz def');

  const [isModalOpen , setIsModalOpen] = useState(false);
   
  const dispatch = useDispatch();
  const deleteItem = (id) =>
  {
    dispatch(removeitem(id));
    console.log("Item is Deleted");
  }
  const Increment = (id) =>
  {
    dispatch(Increase(id));
  }
  const Decrement = (id) =>
  {
    dispatch(Decrease(id));
  }
  
  const navigate = useNavigate();
  const checkout = () =>
  {
    navigate('/checkout');
  }
  return (
    <div className="w-11/12 mx-auto py-5">
      {cart.length > 0 ? (
        <div>
          <h3 className="font-bold text-3xl">Shopping Cart</h3>
          <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-5 py-3 pt-5">
            <div className="">
              <div className="flex justify-between font-bold text-xs md:text-sm">
                <div>PRODUCT</div>
                <div className="flex space-x-2 md:space-x-9 lg:space-x-10">
                  <div>PRICE</div>
                  <div>QUANTITY</div>
                  <div>SUBTOTAL</div>
                  <div>REMOVE</div>
                </div>
              </div>
              <hr className="text-gray-700" />
              {cart.map((carr) => (
                <div className="flex justify-between font-semibold text-xs md:text-sm items-center border-b border-gray-200 py-3">
                  <div className="w-[40px] h-[40px] cursor-pointer">
                    <img src={carr.image} alt="" className="w-full h-full" />
                    
                  </div>
                  {/* <div>
                    <h3>{carr.title}</h3>
                  </div> */}
                  <div className="flex space-x-6 md:space-x-16 lg:space-x-16 items-center justify-center text-center">
                    <div className="pe-0">${carr.price.toFixed(2)}</div>
                    <div className="flex">
                      <div className="border border-gray-400 px-1 cursor-pointer" onClick={() => Increment(carr.id)}>+</div>
                      <div className="border border-gray-400 px-1 cursor-pointer">{carr.quantity}</div>
                      <div className="border border-gray-400 px-1 cursor-pointer" onClick={() => Decrement(carr.id)}>-</div>
                    </div>
                    <div>${(carr.quantity * carr.price).toFixed(2)}</div>
                    <div className="pe-5 cursor-pointer">
                      <FaTrash className="text-red-700" onClick={() => deleteItem(carr.id)}/>
                    </div>
                  </div>
                </div>
              ))}
              
            </div>
            <div className="border border-gray-300 rounded-md px-4 py-3 shadow-md h-[260px]">
                <h3 className="font-bold text-sm">CART TOTALS</h3>
                <div className="flex justify-between border-b border-gray-200 py-1">
                    <div>
                        <h3>TOTAL ITEMS</h3>
                    </div>
                    <div>
                        <h3>{totalquantity}</h3>
                    </div>
                </div>
                <div className="py-2 border-b border-gray-300">
                    <div className="flex flex-col">
                        <h3>Shipping:</h3>
                        <p>shipping to : {address}</p>
                        <div className="text-start text-blue-600">
                        <button onClick={() => setIsModalOpen(true)}>Change address</button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between py-3">
                    <div>
                        <h3>Total Price</h3>
                    </div>
                    <div>
                        <h3>${totalprice.toFixed(2)}</h3>
                    </div>
                </div>
                <div className="bg-red-600 text-white w-full h-[40px] flex justify-center" onClick={() => checkout()}>
                    <button>Proceed To Checkout</button>
                </div>
            </div>
          </div>
          <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} setAddress={setAddress}></Modal>
        </div>
      ) : (
        <div className="py-10 flex justify-center">
          <div className="w-64 h-64">
            <img src={empty} alt="" className="w-full h-full"/>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;