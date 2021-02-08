import { Paper, Stepper, Typography, Step, StepLabel } from "@material-ui/core";
import React, { useState } from "react";
import AdressForm from "./Forms/AdressForm";
import PaymentForm from "./Forms/PaymentForm";
import useStyles from "./styles";

const steps = ["Адрес доставки", "Детали оплаты"];

const Checkout = () => {
  const classes = useStyles();

  const [activeStep, setActiveStep] = useState(0);

  const Confirmation = () => <div>Confirmation</div>;

  const Form = () => (activeStep === 0 ? <AdressForm /> : <PaymentForm />);

  return (
    <>
      <div className={classes.toolbar} />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h4" align="center">
            Заказать
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? <Confirmation /> : <Form />}
        </Paper>
      </main>
    </>
  );
};

export default Checkout;
