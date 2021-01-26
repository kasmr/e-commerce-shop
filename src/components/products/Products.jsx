import { Grid } from "@material-ui/core";
import React from "react";
import Product from "./Product/Product";
import Napkins70 from "../../assets/napkins70.jpg";
import Napkins400 from "../../assets/napkins400.jpg";
import Papper from "../../assets/papper.jpg";
import Towel from "../../assets/towel.jpg";
import Towel2 from "../../assets/towel2.jpg";

const products = [
  {
    id: 1,
    name: "Toilet papper",
    description: "for y butt",
    price: "5$",
    image: Papper,
  },
  {
    id: 2,
    name: "Napkins 70",
    description: "for y face",
    price: "1$",
    image: Napkins70,
  },
  {
    id: 3,
    name: "Napkins 400",
    description: "for y face",
    price: "1.3$",
    image: Napkins400,
  },
  {
    id: 4,
    name: "Towel",
    description: "for y face",
    price: "4$",
    image: Towel,
  },
  {
    id: 4,
    name: "Towel2",
    description: "for y face",
    price: "4$",
    image: Towel2,
  },
];

const Products = () => {
  return (
    <main>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
