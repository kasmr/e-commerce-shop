import { Grid } from "@material-ui/core";
import React from "react";
import Product from "./Product/Product";
import Napkins70 from "../../assets/napkins70.jpeg";
import Napkins100 from "../../assets/napkins100.jpeg";
import Papper from "../../assets/papper.jpeg";
import Towel from "../../assets/towel.jpeg";

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
    name: "Napkins 100",
    description: "for y face",
    price: "1.3$",
    image: Napkins100,
  },
  {
    id: 4,
    name: "Towel",
    description: "for y face",
    price: "4$",
    image: Towel,
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
