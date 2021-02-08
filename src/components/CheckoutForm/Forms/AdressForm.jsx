import { Grid, InputLabel, Typography } from "@material-ui/core";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import CustomTextField from "./CustomTextField";

const AdressForm = () => {
  const methods = useForm();

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Адресс доставки
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit="">
          <Grid container spacing={3}>
            <CustomTextField required name="Имя" label="Имя" />
            <CustomTextField required name="Фамилия" label="Фамилия" />
            <CustomTextField required name="Город" label="Город" />
            <CustomTextField required name="Адрес" label="Адрес" />
            <CustomTextField required name="Телефон" label="Телефон" />
            <CustomTextField
              required
              name="Способ оплаты"
              label="Способо оплаты"
            />
            <Grid item xs={12} sm={6}></Grid>
          </Grid>
        </form>
      </FormProvider>
    </>
  );
};

export default AdressForm;
