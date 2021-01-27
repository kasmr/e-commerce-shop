import {
  AppBar,
  Badge,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import React from "react";

import logo from "../../assets/logo.png";

import useStyles from "./styles";

const Navbar = ({ totalItems }) => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography variant="h5" className={classes.title} color="inherit">
            <img
              src={logo}
              alt="Commerce.js"
              height="40px"
              className={classes.image}
            />
          </Typography>
          <div className={classes.grow}>
            <div className={classes.button}>
              <IconButton aria-label="Show cart items" color="inherit">
                <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
