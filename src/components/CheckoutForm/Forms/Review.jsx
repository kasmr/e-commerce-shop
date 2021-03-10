import { Typography, List, ListItem, ListItemText } from "@material-ui/core";
import React from "react";

const Review = ({ checkoutToken }) => {
  return (
    <>
      <Typography variant="h6" gutterBottom style={{ marginLeft: "1rem" }}>
        Сумма заказа
      </Typography>
      <List disablePadding>
        {checkoutToken.live.line_items.map((product) => (
          <ListItem style={{ alignItems: "baseline" }}>
            <ListItemText
              primary={product.name}
              secondary={`Количество: ${product.quantity}`}
            />
            {/* <img src={product.media.source} /> */}
            <Typography
              variant="body2"
              style={{
                fontSize: "1.2rem",
                fontWeight: 700,
                marginLeft: "2rem",
              }}
            >
              {product.line_total.formatted_with_symbol}
            </Typography>
          </ListItem>
        ))}
        <ListItem>
          <ListItemText primary="Итого:" />
          <Typography
            variant="subtitle1"
            style={{ fontSize: "1.2rem", fontWeight: 700 }}
          >
            {checkoutToken.live.subtotal.formatted_with_symbol}
          </Typography>
        </ListItem>
      </List>
    </>
  );
};

export default Review;
