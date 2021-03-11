import { Button, Grid, InputLabel, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import CustomTextField from "./CustomTextField";

const AdressForm = ({ checkoutToken, next }) => {
  const methods = useForm();

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Адресс доставки
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit((data) => next({ data }))}>
          <Grid container spacing={3}>
            <CustomTextField required name="firstName" label="Имя" />
            <CustomTextField required name="lastName" label="Фамилия" />
            <CustomTextField required name="city" label="Город" />
            <CustomTextField required name="adress" label="Адрес" />
            <CustomTextField required name="phone" label="Телефон" />
            <CustomTextField required name="payment" label="Способо оплаты" />
            <Grid item xs={12} sm={6}></Grid>
          </Grid>
          <br />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button variant="outlined" component={Link} to="/cart">
              Назад к корзине
            </Button>
            <Button variant="contained" type="submit" color="primary">
              Далее
            </Button>
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default AdressForm;
