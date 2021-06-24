import React, { useState } from "react";
import StepProgress from "./components/StepProgressBar";
import SubscriptionForm from "./components/SubscriptionForm";

import "./App.css";

function App() {
  let [step, setStep] = useState(0);
  const [subscriptionValues, setSubscriptionValues] = useState({
    duration: 12,
    gbAmount: 5,
    upFrontPayment: false,
    userFullName: "",
    userEmail: "",
    creditCardNumber: "",
    creditCardExpiryDate: "",
    creditCardSecurityCode: "",
  });

  const handleChange = (select) => (e) => {
    if (e.target.name === "upFrontPayment") {
      setSubscriptionValues({
        ...subscriptionValues,
        ...{ [select]: JSON.parse(e.target.value) },
      });
    } else if (e.target.name === "fullName" || e.target.name === "userEmail") {
      setSubscriptionValues({
        ...subscriptionValues,
        ...{ [select]: e.target.value },
      });
    } else {
      setSubscriptionValues({
        ...subscriptionValues,
        ...{ [select]: parseInt(e.target.value) },
      });
    }
  };

  const nextStep = () => {
    if (step === 1) {
      console.log("inside 1");
      if (
        subscriptionValues.userFullName.length > 0 &&
        subscriptionValues.creditCardNumber.length === 16 &&
        // creditCardExpiryDate.length === 4 &&
        subscriptionValues.creditCardSecurityCode >= 3 &&
        subscriptionValues.userEmail.includes("@")
      ) {
        setStep((step += 1));
      } else {
        // toast.success("test", { position: "top-center" });
        setStep((step += 1));
        console.log("elese block");
      }
    } else {
      setStep((step += 1));
    }
  };

  const prevStep = () => {
    if (step > 0) setStep((step -= 1));
  };

  return (
    <div className="App">
      <StepProgress
        step={step}
        prevStep={prevStep}
        nextStep={nextStep}
        subscriptionValues={subscriptionValues}
      />
      <SubscriptionForm
        step={step}
        handleChange={handleChange}
        subscriptionValues={subscriptionValues}
      />
    </div>
  );
}

export default App;
