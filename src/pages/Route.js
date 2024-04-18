 import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from '../App';
import Home from '../pages/home';
import Header from "./header";
import Search from "./search";

const Router = () =>{
return(
    <BrowserRouter>
      <Header />
      <Routes>
          <Route path="" element={<Home />} />
          <Route path="/search" element={<Search />} />
          
      </Routes>
    </BrowserRouter>
)
}

export default Router;