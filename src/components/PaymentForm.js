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
  inputLabel: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    fontSize: "11px",
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
        <label className={styles.inputLabel}>
          Card number should be 16 digits
        </label>
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
        <label className={styles.inputLabel}>
          Expiration date should be 6 digits
        </label>
        <TextField
          id="outlined-input"
          name="expiryDate"
          label="Expiration Date"
          type="number"
          variant="outlined"
          onChange={handleChange("creditCardExpiryDate")}
        />
        <label className={styles.inputLabel}>CVC should be 3 digits</label>

        <TextField
          id="outlined-input"
          label="CVC"
          name="creditCardSecurityCode"
          type="number"
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
