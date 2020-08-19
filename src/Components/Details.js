import React from 'react';
import { useParams } from 'react-router-dom';
import './css/theme.css';
import Shoes from '../Context/ShoesData.json';
import { Button,Typography,Grid} from '@material-ui/core';
const Details = () => {
  let { id } = useParams();
  const Shoe = Shoes[id];
  if (!Shoe) {
    return <h2>Product Not Found!</h2>
  }
  return (
    <div className="app">
      <Typography variant="h4" color="primary" style={{marginLeft:20}}>Shoes Details</Typography>
      {
        <div className="product-card">
        <Grid container spacing={1}>
        
        <Grid item sm>
          <img src={Shoe.img} alt={Shoe.name} className="detail-img"/>
        </Grid>
        <Grid item xs>
          <div className="detail-card">
          <Typography variant="h3" color="primary">Shoe Name : </Typography>
          <Typography variant="h4" style={{marginBottom:60}}>{Shoe.name}</Typography>
          <Typography variant="h3" color="primary">Price : </Typography>
          <Typography variant="h4" style={{color:"#f44336",}}>{Shoe.price}</Typography>
          <Button variant="contained" color="primary" disabled>
            Add to Cart
          </Button>
          </div>
          </Grid>
          </Grid>
        </div>
       
      }
    </div>
  )
}

export default Details