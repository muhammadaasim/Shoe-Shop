// import React from 'react'
// import {Link} from 'react-router-dom';
// const Navbar = () => {
//     return (
//         <div>
//         <ul>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/about">About</Link></li>
//         <li><Link to="/products">Products</Link></li>
//         </ul>            
//         </div>
//     )
// }

// export default Navbar
import React, { Component } from 'react';
import Cart from './imgs/cart.svg'
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  AppBar,Toolbar, Typography, List, ListItem,
  withStyles, Grid, SwipeableDrawer
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
const styleSheet = {
  list : {
    width : 200,
    color : "white",
  },
AppBar:{

},
  padding : {
    paddingRight : 30,
    cursor : "pointer",
  },
Links:{
color : "white",
textDecoration:"none",
},
  sideBarIcon : {
    padding : 0,
    color : "white",
    cursor : "pointer",
  },
  Menu:{
    marginRight:40,
  },
}

class ResAppBar extends Component{
  constructor(props){
    super(props);
    this.state = {drawerActivate:false, drawer:false};
    this.createDrawer = this.createDrawer.bind(this);
    this.destroyDrawer = this.destroyDrawer.bind(this);
  }

  componentWillMount(){
    if(window.innerWidth <= 600){
      this.setState({drawerActivate:true});
    }

    window.addEventListener('resize',()=>{
      if(window.innerWidth <= 600){
        this.setState({drawerActivate:true});
      }
      else{
        this.setState({drawerActivate:false})
      }
    });
  }

  //Small Screens
  createDrawer(){
    return (
      <div>
        <AppBar>
          <Toolbar>
            <Grid container direction = "row" justify = "space-between" alignItems="center" >
              <MenuIcon
                className = {this.props.classes.sideBarIcon}
                onClick={()=>{this.setState({drawer:true})}} />
              <Typography color="inherit" variant = "headline" style={{fontSize:23}}>S-SHOP</Typography>
              <Typography color="inherit" variant = "headline">          <Link to="/cart"><img src={Cart} alt="Cart" style={{height:20,width:20,marginLeft:10,marginTop:5}}/></Link><span className="cart">0</span></Typography>
            </Grid>
          </Toolbar>
        </AppBar>

        <SwipeableDrawer
         open={this.state.drawer}
         onClose={()=>{this.setState({drawer:false})}}
         onOpen={()=>{this.setState({drawer:true})}}>

           <div
             tabIndex={0}
             role="button"
             onClick={()=>{this.setState({drawer:false})}}
             onKeyDown={()=>{this.setState({drawer:false})}}>
            <List className = {this.props.classes.list}>
               <ListItem key = {1} button divider > <Link to="/" style={{textDecoration:'none'}}>HOME</Link> </ListItem>
               <ListItem key = {2} button divider> <Link to="/products" style={{textDecoration:'none'}}>PRODUCTS</Link> </ListItem>
               <ListItem key = {3} button divider> <Link to="/about" style={{textDecoration:'none'}}>ABOUT</Link> </ListItem>
             </List>
         </div>
       </SwipeableDrawer>

      </div>
    );
  }

  //Larger Screens
  destroyDrawer(){
    const {classes} = this.props;
    return (
      <AppBar>
        <Toolbar className={this.props.classes.Menu}>            
          <Typography style={{flexGrow:1,marginLeft:30,fontSize:25,}} color="inherit" >S-SHOP</Typography>
          <Typography variant = "subheading" className = {classes.padding} color="inherit" ><Link to="/" className={this.props.classes.Links}>HOME</Link></Typography>
          <Typography variant = "subheading" className = {classes.padding} color="inherit" ><Link to="/products" className={this.props.classes.Links}>PRODUCTS</Link></Typography>
          <Typography variant = "subheading" className = {classes.padding} color="inherit" ><Link to="/about" className={this.props.classes.Links}>ABOUT</Link></Typography>
          <Link to="/cart"><img src={Cart} alt="Cart" style={{height:20,width:20,marginLeft:10,marginTop:5}}/><span className="cart">0</span></Link>
        </Toolbar>
      </AppBar>
    )
  }

  render(){
    return(
      <div>
        {this.state.drawerActivate ? this.createDrawer() : this.destroyDrawer()}
      </div>
    );
  }
}

ResAppBar.propTypes = {
  classes : PropTypes.object.isRequired
};



export default withStyles(styleSheet)(ResAppBar);