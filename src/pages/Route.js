 import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from '../App';
import Home from '../pages/home';
import Header from "./header";
import Search from "./search";
import CartPage from "./cartPage";

const Router = () =>{
return(
    <BrowserRouter>
      <Header />
      <Routes>
          <Route path="" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/cart" element={<CartPage />} />
          
      </Routes>
    </BrowserRouter>
)
}

export default Router;