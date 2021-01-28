import {
  Card,
  Typography,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  LinearProgress,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import React from "react";

//Styles
import useStyles from "./styles";

const Product = ({ product, onAddToCart }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={product.media.source}
        title={product.name}
        height="0"
      />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h5" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h5" gutterBottom>
            {product.sku} ₽/шт.
          </Typography>
        </div>
        <Typography
          dangerouslySetInnerHTML={{ __html: product.description }}
          variant="body2"
          color="textSecondary"
        />
        Наличие
        <LinearProgress
          variant="buffer"
          value={Number(product.extrafields[0].name)}
          color={product.extrafields[1].name}
          valueBuffer={100}
        />
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        Добавить в корзину
        <IconButton
          aria-label="Add to cart"
          onClick={() => onAddToCart(product.id, product.quantity)}
        >
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
