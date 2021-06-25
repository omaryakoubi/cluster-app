import { useState } from "react";
import StepProgressBar from "./components/StepProgressBar";
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

  const [checkedBox, setCheckedBox] = useState(false);

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
    if (step >= 0 && step < 3) {
      setStep((step += 1));
    }
  };

  const prevStep = () => {
    if (step > 0) setStep((step -= 1));
  };

  const handleCheckBox = () => {
    setCheckedBox(!checkedBox);
  };

  return (
    <div className="App">
      <StepProgressBar
        step={step}
        prevStep={prevStep}
        nextStep={nextStep}
        subscriptionValues={subscriptionValues}
        checkedBox={checkedBox}
        handleCheckBox={handleCheckBox}
      />
      <div className="subscriptionForm">
        <SubscriptionForm
          step={step}
          handleChange={handleChange}
          subscriptionValues={subscriptionValues}
          checkedBox={checkedBox}
          handleCheckBox={handleCheckBox}
        />
      </div>
    </div>
  );
}

export default App;
