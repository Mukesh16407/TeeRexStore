import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Cart } from "./pages/Cart/Cart";
import { Product } from "./pages/Products/Product";



function App() {
  return (
    <div >
      <Navbar/>
      <Routes>
        <Route path="/" element={<Product/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </div>
  );
}

export default App;
