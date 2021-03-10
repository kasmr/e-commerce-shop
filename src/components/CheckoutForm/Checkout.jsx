import { Paper, Stepper, Typography, Step, StepLabel } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import AdressForm from "./Forms/AdressForm";
import PaymentForm from "./Forms/PaymentForm";
import useStyles from "./styles";
import { commerce } from "../../lib/commerce";

const steps = ["Адрес доставки", "Детали заказа"];

const Checkout = ({ cart }) => {
  const classes = useStyles();

  const [activeStep, setActiveStep] = useState(0);
  const [checkoutToken, setCheckoutToken] = useState(0);

  useEffect(() => {
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id, {
          type: "cart",
        });

        console.log(token);

        setCheckoutToken(token);
      } catch (error) {
        console.error(error);
      }
    };

    generateToken();
  }, [cart]);

  const nextStep = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const backStep = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const next = (data) => {
    nextStep();
  };

  const Confirmation = () => <div>Confirmation</div>;

  const Form = () =>
    activeStep === 0 ? (
      <AdressForm next={next} />
    ) : (
      <PaymentForm checkoutToken={checkoutToken} />
    );

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
