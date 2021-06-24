import Cards from "react-credit-cards";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import "react-credit-cards/es/styles-compiled.css";

const useStyles = makeStyles({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

  },

  form: {
    display: "flex",
    flexDirection: "column",
    // alignItems: "space-around",
  },
});

export default function PaymentForm({ subscriptionValues, handleChange }) {
  const {
    userFullName,
    creditCardNumber,
    creditCardExpiryDate,
    creditCardSecurityCode,
  } = subscriptionValues;

  const classes = useStyles();

  return (
    <div className={classes.container} id="paymentForm">
      <Cards
        cvc={creditCardSecurityCode}
        expiry={creditCardExpiryDate}
        name={userFullName}
        number={creditCardNumber}
      />
      <br />
      <form className={classes.form}>
        <TextField
          id="outlined-input"
          label="Card Number"
          name="cardNumber"
          type="number"
          variant="outlined"
          onChange={handleChange("creditCardNumber")}
        />
        <TextField
          id="outlined-input"
          label="Full Name"
          name="fullName"
          type="text"
          variant="outlined"
          onChange={handleChange("userFullName")}
        />
        <TextField
          id="outlined-input"
          name="expiryDate"
          type="date"
          variant="outlined"
          onChange={handleChange("creditCardExpiryDate")}
        />
        <TextField
          id="outlined-input"
          label="CVC"
          name="creditCardSecurityCode"
          type="number"
          maxlength="3"
          variant="outlined"
          onChange={handleChange("creditCardSecurityCode")}
        />
      </form>
    </div>
  );
}
