import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import { DeleteForever } from "@material-ui/icons";
import React from "react";

import useStyles from "./styles";

const CartItem = ({ item, handleUpdateCartQuantity, handleRemoveFromCart }) => {
  const classes = useStyles();

  return (
    <Card>
      <CardMedia
        image={item.media.source}
        alt={item.name}
        className={classes.media}
      />
      <CardContent className={classes.cardContent}>
        <Typography variant="h6">{item.name}</Typography>
        <Typography variant="h5">
          {item.line_total.formatted_with_symbol}
        </Typography>
      </CardContent>
      <CardActions className={classes.cartActions}>
        <div className={classes.buttons}>
          <Button
            type="button"
            size="small"
            onClick={() => handleUpdateCartQuantity(item.id, item.quantity - 1)}
          >
            <Typography variant="h5">-</Typography>
          </Button>
          <Typography className={classes.quantity}>{item.quantity}</Typography>
          <Button
            type="button"
            size="small"
            onClick={() => {
              handleUpdateCartQuantity(item.id, item.quantity + 1);
            }}
          >
            <Typography variant="h5">+</Typography>
          </Button>
        </div>
        <Button
          variant="contained"
          type="button"
          color="secondary"
          onClick={() => handleRemoveFromCart(item.id)}
        >
          <DeleteForever />
        </Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;
