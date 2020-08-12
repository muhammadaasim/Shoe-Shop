import React from 'react'
import Shoes from '../Context/ShoesData.json';
import { Link } from 'react-router-dom';
import './css/theme.css'
import { Button } from '@material-ui/core';
const Products = () => {

    return (
        <div className="app">
            <h1>Products List</h1>
            <div className="product-container">
                {
                    Object.keys(Shoes).map(KeyName => {
                        const Shoe = Shoes[KeyName];
                        return (
                            <div className="product-card">
                                <Link to={`/details/${KeyName}`}>
                                    <img src={Shoe.img} alt={Shoe.name} className="product-img" />
                                    <h4>{Shoe.name}</h4>
                                    <h3>{Shoe.price}</h3>
                                </Link>
                                <Button variant="contained" color="primary" className="cart-btn" disabled>
                                    Add to Cart
                                </Button>
                            </div>
                        )
                    }
                    )
                }
            </div>
        </div>
    )
}

export default Products;