import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import ShopCard from "./pages/ShopCard/ShopCard";
import Footer from "./Components/Footer/Footer";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import Thankyou from "./pages/Thankyou/Thankyou";
import Track from "./pages/Track/Track";
import { useState } from "react";

function App() {
  const [order , setOrder] = useState(null);
  console.log("Order in A:" ,order);
  //console.log("Order t,", order.Totalprice);
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/shop" element={<ShopCard />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/checkout" element={<Checkout setOrder={setOrder}/>}></Route> 
          {/* <Route path="/checkout" element={<Checkout setOrder={setOrder} />} /> */}
          <Route path="/thankyou" element={<Thankyou order={order} />}></Route> 
          <Route path="/track" element={<Track />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;