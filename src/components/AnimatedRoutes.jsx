// AnimatedRoutes.jsx
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Product from "./Pages/ProductPage";
import SortBy from "./Pages/SortBy";
import Jeans from "./Pages/Jeans";
import Shirts from "./Pages/Shirts";
import Sneakers from "./Pages/Sneakers";
import TShirts from "./Pages/TShirts";
import Promotions from "./Pages/Promotions";
import ProductDetail from "./ProductDetail";
import Cart from "./Cart";
import Faq from "./Pages/Faq";
import Footer from "./Footer";
import Privacy from "./Pages/Privacy";
import Terms from "./Pages/Terms";
import Chat from "./Pages/Chat";
import ProductPage from "./Pages/ProductPage";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        {/* trial */}
        {/* <Route path="/details/:id" element={<ProductPage/>}/> */}
        <Route path="/sortby" element={<SortBy />} />
        <Route path="/jeans" element={<Jeans />} />
        <Route path="/shirts" element={<Shirts />} />
        <Route path="/tshirts" element={<TShirts />} />
        <Route path="/sneakers" element={<Sneakers />} />
        <Route path="/promotions" element={<Promotions />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/faq" element={<Faq/>}/>
        <Route path="/privacy" element={<Privacy/>}/>
        <Route path="/terms" element={<Terms/>}/>
        <Route path="/chat" element={<Chat/>}/>
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
