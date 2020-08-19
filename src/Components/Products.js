import React from 'react'
import Shoes from '../Context/ShoesData.json';
import { Link } from 'react-router-dom';
import './css/theme.css'

import { Button, Typography } from '@material-ui/core';
const Products = () => {
    return (
        <div className="app">
            <Typography variant="h4" style={{ marginLeft: 30 }} color="primary">Products List</Typography>
            <div className="product-container">
                {
                    Object.keys(Shoes).map(KeyName => {
                        const shoe = Shoes[KeyName];
                        return (
                            <div className="product-card">
                                <Link to={`/details/${KeyName}`} style={{ textDecoration: 'none' }}>
                                    <img src={shoe.img} alt={shoe.name} className="product-img" />
                                    <Typography variant="h6" style={{ color: "blue", marginBottom: 10, marginTop: 15 }}>{shoe.name}</Typography>
                                    <Typography variant="h6" style={{ color: "red", marginBottom: 15 }}>{shoe.price}</Typography>
                                </Link>
                                <Button variant="contained" color="primary" className="cart-btn" disable>
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