import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import ShopCard from "./pages/ShopCard/ShopCard";
import Footer from "./Components/Footer/Footer";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";

//import InfoSection from "./pages/InfoSection/InfoSection";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/shop" element={<ShopCard />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;