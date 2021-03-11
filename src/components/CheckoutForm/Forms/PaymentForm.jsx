import { Button, Divider, Typography } from "@material-ui/core";
import React from "react";
import Review from "./Review";

const PaymentForm = ({
  checkoutToken,
  backStep,
  shippingData,
  onHandleCheckout,
  nextStep,
}) => {
  const { firstName, lastName, city, adress, phone, payment } = shippingData;

  const handleSubmit = (event) => {
    event.preventDeafault();
    const orderData = {
      line_items: checkoutToken.live.line_items,
      customer: {
        firstname: firstName,
        lastname: lastName,
        city,
        adress,
        phone,
        payment,
      },
    };

    onHandleCheckout(checkoutToken.id, orderData);

    nextStep();
  };

  return (
    <>
      <Review checkoutToken={checkoutToken} />
      <Divider />
      <form onSubmit={(e) => handleSubmit(e)}>
        <Button variant="outlined" onClick={backStep}>
          Назад
        </Button>
        <Button color="primary" type="submit" variant="contained">
          Заказать
        </Button>
      </form>
    </>
  );
};

export default PaymentForm;
