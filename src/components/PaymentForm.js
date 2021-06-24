import Confirmation from "./Confirmation";
import Cards from "react-credit-cards";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import "react-credit-cards/es/styles-compiled.css";

const useStyles = makeStyles({
  container: {
    margin: "5% auto ",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    height: "100%",
  },
  cardContainer: {
    width: "42%",
  },
  form: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
});

export default function PaymentForm({
  subscriptionValues,
  handleChange,
  gbPrice,
  finalPrice,
}) {
  const styles = useStyles();
  const {
    userFullName,
    creditCardNumber,
    creditCardExpiryDate,
    creditCardSecurityCode,
  } = subscriptionValues;

  return (
    <div className={styles.container} id="paymentForm">
      <div className={styles.cardContainer}>
        <Cards
          cvc={creditCardSecurityCode}
          expiry={creditCardExpiryDate}
          name={userFullName}
          number={creditCardNumber}
        />
      </div>
      <br />
      <div className={styles.form}>
        <TextField
          id="outlined-input"
          label="Card Number"
          name="cardNumber"
          type="number"
          variant="outlined"
          inputProps={{
            maxLength: 10,
          }}
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
          label="Expiration Date"
          type="number"
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
      </div>
      <Confirmation
        gbPrice={gbPrice}
        finalPrice={finalPrice}
        handleChange={handleChange}
        subscriptionValues={subscriptionValues}
      />
    </div>
  );
}
