import React from 'react'
import {BrowserRouter as Router,Routes,Link,Route} from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Products from './Components/Products';
import Item from './Components/Item';
import Cart from './Components/Cart'
import Navbar from './Components/Navbar'
import Error404 from './Components/Error404'
const RouteConfig = () => {
    return (
        <div>
            <Router>
            <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/products" element={<Products/>}/>
                    <Route path="item/:id" element={<Item/>}/>
                    <Route path="/Cart" element={<Cart/>}/>
                    <Route path="/*" element={<Error404/>}/>
                </Routes>
            </Router>
        </div>
    )
}
export default RouteConfig
