import React from 'react';
import { useParams } from 'react-router-dom';
import './css/theme.css';
import Shoes from '../Context/ShoesData.json';
import { Button,Typography } from '@material-ui/core';
const Details = () => {
  let { id } = useParams();
  const Shoe = Shoes[id];
  if (!Shoe) {
    return <h2>Product Not Found!</h2>
  }
  return (
    <div className="app">
      {
        <div className="product-card">
          <Typography>{Shoe.name}</Typography>
          <img src={Shoe.img} alt={Shoe.name} className="detail-img" />
          <Typography>{Shoe.price}</Typography>
          <Button variant="contained" color="primary" disbled>
            Add to Cart
          </Button>
        </div>

      }
    </div>
  )
}

export default Details