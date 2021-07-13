import { useState } from "react";
import StepProgressBar from "./components/StepProgressBar";
import SubscriptionForm from "./components/SubscriptionForm";
import "./App.css";

function App() {
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

  const handleCheckBox = () => {
    setCheckedBox(!checkedBox);
  };

  return (
    <div className="App">
      <StepProgressBar
        subscriptionValues={subscriptionValues}
        checkedBox={checkedBox}
        handleCheckBox={handleCheckBox}
      />
      <div className="subscriptionForm">
        <SubscriptionForm
          handleChange={handleChange}
          subscriptionValues={subscriptionValues}
        />
      </div>
    </div>
  );
}

export default App;
