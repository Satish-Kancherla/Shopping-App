import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Product from "./Pages/Product";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar";
import { BrowserRouter,Route,Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />}/>
          <Route path="/mens" element={<ShopCategory category="Men"/>}/>
          <Route path="/womens" element={<ShopCategory category="WomanWear"/>}/>
          <Route path="/computers" element={<ShopCategory category="Computer"/>}/>
          <Route path="/mobiles" element={<ShopCategory category="Mobile"/>}/>
          <Route path="/watches" element={<ShopCategory category="Watch"/>}/>
          <Route path="/product/:id" element={<Product />}>
            {/* <Route path=":productId" element={<Product/>}/> */}
          </Route>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/login" element={<LoginSignup />}/>
        </Routes>
        </BrowserRouter>
        <Footer />
    </div>
  );
}

export default App;
