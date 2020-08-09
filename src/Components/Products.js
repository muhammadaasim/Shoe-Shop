import React from 'react'
import Shoes from '../DataSet/Shoes';
import { Link } from 'react-router-dom';
import './css/theme.css'
import {Button} from '@material-ui/core';
const Products = () => {
    return (
        <div className="app">
            <h1>Products</h1>
            <div className="item-container">
                {
                    // Object.keys(Shoes).map(keyName => {
                    //     const Shoe = Shoes[keyName.id];
                    //     return (
                    //         <Link Key={keyName} className="lnk" to={`/product/${keyName}`}>
                    //             <h4>{Shoe.Name}</h4>
                    //             <h5>{Shoe.Price}</h5>
                    //         </Link>)
                    
                    Shoes.map(item => {
                        return (
                            <Link to={`/product/${item.ID}`} className="item-card">
                                <img src={item.IMG} alt={item.NAME} className="item-img" />
                                <h4>{item.NAME}</h4>
                                <h3>{item.PRICE}</h3>
                                <Button variant="contained" color="primary">
                                Add to Cart
                                </Button>
                            </Link>
                        )
                    }
                    )
                }
            </div>
        </div>
    )
}

export default Products;

// shoeData.map(item => (
//     <GridListTile key={item.id} cols={item.cols}>
//         <Link to={`/item/${item.id}`} >
//             <img src={item.img} alt={item.name} className={classes.img} />
//             <SvgWave className={classes.wave} />
//         </Link>