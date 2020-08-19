import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  AppBar, Toolbar, Typography, List, ListItem,
  withStyles, Grid, SwipeableDrawer, IconButton, Badge
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
const styleSheet = {
  list: {
    width: 200,
    color: "white",
  },
  AppBar: {

  },
  padding: {
    paddingRight: 30,
    cursor: "pointer",
  },
  Links: {
    color: "white",
    textDecoration: "none",
  },
  sideBarIcon: {
    padding: 0,
    color: "white",
    cursor: "pointer",
  },
  Menu: {
    marginRight: 40,
  },

}
const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);


class ResAppBar extends Component {

  constructor(props) {
    super(props);
    this.state = { drawerActivate: false, drawer: false };
    this.createDrawer = this.createDrawer.bind(this);
    this.destroyDrawer = this.destroyDrawer.bind(this);
  }

  componentWillMount() {
    if (window.innerWidth <= 600) {
      this.setState({ drawerActivate: true });
    }

    window.addEventListener('resize', () => {
      if (window.innerWidth <= 600) {
        this.setState({ drawerActivate: true });
      }
      else {
        this.setState({ drawerActivate: false })
      }
    });
  }

  //Small Screens
  createDrawer() {
    return (
      <div>
        <AppBar>
          <Toolbar>
            <Grid container direction="row" justify="space-between" alignItems="center" >
              <MenuIcon
                className={this.props.classes.sideBarIcon}
                onClick={() => { this.setState({ drawer: true }) }} />
              <Typography color="inherit" variant="headline" style={{ fontSize: 23 }}>S-SHOP</Typography>
              <Typography color="inherit" variant="headline">
                <Link to="/cart">
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={0} color="secondary">
                      <ShoppingCartIcon style={{ color: "white" }} />
                    </StyledBadge>
                  </IconButton>
                </Link></Typography>
            </Grid>
          </Toolbar>
        </AppBar>

        <SwipeableDrawer
          open={this.state.drawer}
          onClose={() => { this.setState({ drawer: false }) }}
          onOpen={() => { this.setState({ drawer: true }) }}>

          <div
            tabIndex={0}
            role="button"
            onClick={() => { this.setState({ drawer: false }) }}
            onKeyDown={() => { this.setState({ drawer: false }) }}>
            <List className={this.props.classes.list}>
              <ListItem key={2} button divider> <Link to="/" style={{ textDecoration: 'none' }}>PRODUCTS</Link> </ListItem>
              <ListItem key={3} button divider> <Link to="/about" style={{ textDecoration: 'none' }}>ABOUT</Link> </ListItem>
            </List>
          </div>
        </SwipeableDrawer>

      </div>
    );
  }

  //Larger Screens
  destroyDrawer() {
    const { classes } = this.props;
    return (
      <AppBar>
        <Toolbar className={this.props.classes.Menu}>
          <Typography style={{ flexGrow: 1, marginLeft: 30, fontSize: 25, }} color="inherit" >S-SHOP</Typography>
          <Typography variant="subheading" className={classes.padding} color="inherit" ><Link to="/" className={this.props.classes.Links}>PRODUCTS</Link></Typography>
          <Typography variant="subheading" className={classes.padding} color="inherit" ><Link to="/about" className={this.props.classes.Links}>ABOUT</Link></Typography>
          <Link to="/cart">              <IconButton aria-label="cart">
            <StyledBadge badgeContent={0} color="secondary">
              <ShoppingCartIcon style={{ color: "white" }} />
            </StyledBadge>
          </IconButton></Link>
        </Toolbar>
      </AppBar>
    )
  }

  render() {
    return (
      <div>
        {this.state.drawerActivate ? this.createDrawer() : this.destroyDrawer()}
      </div>
    );
  }
}

ResAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};



export default withStyles(styleSheet)(ResAppBar);