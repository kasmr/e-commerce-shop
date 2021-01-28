import { Button, Container, Grid, Typography } from "@material-ui/core";
import React from "react";

import useStyles from "./styles";

const Cart = ({ cart }) => {
  const classes = useStyles();

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3">
        Корзина
      </Typography>
      {cart ? (
        <>
          <Grid container spacing={3}>
            {cart.line_items.map((item) => (
              <Grid items xs={12} sm={4} key={item.id}>
                <div>{item.name}</div>
              </Grid>
            ))}
          </Grid>
          <div className={classes.cardDetails}>
            <Typography variant="h4">
              Итого: {cart.subtotal.formatted_with_symbol}
              <div>
                <Button
                  className={classes.emptyButton}
                  size="large"
                  type="button"
                  variant="contained"
                  color="secondary"
                >
                  Пустая корзина
                </Button>
                <Button
                  className={classes.checkoutButton}
                  size="large"
                  type="button"
                  variant="contained"
                  color="primary"
                >
                  checkout
                </Button>
              </div>
            </Typography>
          </div>
        </>
      ) : (
        <Typography variant="subtitle1">
          Ваша корзина пустая, добавьте что-нибудь!
        </Typography>
      )}
    </Container>
  );
};

export default Cart;
