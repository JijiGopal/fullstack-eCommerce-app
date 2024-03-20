import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Shop } from "./Pages/Shop";
import { ShopCategory } from "./Pages/ShopCategory";
import { Product } from "./Pages/Product";
import { Cart } from "./Pages/Cart";
import { LoginSignUp } from "./Pages/LoginSignUp";
import { Footer } from "./Components/Footer/Footer";
function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop/>}/>
            <Route path="/men" element={<ShopCategory category = "man"/>}/>
            <Route path="/women" element={<ShopCategory category = "woman"/>}/>
            <Route path="/kids" element={<ShopCategory category = "kid" />}/>
            <Route path="/product" element={<Product/>}>
              <Route path=":productId" element={<Product/>} /> 
            </Route>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/login" element={<LoginSignUp/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App