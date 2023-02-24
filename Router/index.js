import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddToCart from "../AddToCart/AddToCart";
import CartPage from "../AddToCart/CartPage";
import Loginpage from "../AddToCart/Loginpage";
import BlockCart from "../BlockCart/BlockCart";
import BlockHome from "../BlockCart/BlockHome";
import Mountingmethods from "../LifeCycleMethods/Mounting/Mountingmethods";


class AppRouter extends Component {
    render() {
        return (
            <Routes>
                <Route exact path="/" element={<Loginpage />}></Route>
                <Route exact path="/addtocart" element={<AddToCart />}></Route>
                <Route exact path="/addtocart/cartpage" element={<CartPage />}></Route>
                <Route exact path='/blockhome' element={<BlockHome />}></Route>
                <Route exact path='/blockhome/blockcart' element={<BlockCart />}></Route>
                <Route exact path='/lifecyclemethods/mounting' element={<Mountingmethods />}></Route>
            </Routes>
        );
    }
}

export default AppRouter;

// export default AppRouter