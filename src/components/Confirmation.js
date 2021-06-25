import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: "5% auto",
    width: "25%",
  },
  root: {
    border: "1px solid #D4D8DC",
    backgroundColor: "#FAFAFA",
    height: "100%",
    width: "80%",
  },
  font: {
    fontSize: 17,
  },
  total: {
    fontSize: 25,
  },
  termsAndConditions: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    fontSize: "11px",
  },
});

export default function Confirmation({
  step,
  gbPrice,
  finalPrice,
  subscriptionValues,
  checkedBox,
  handleCheckBox,
}) {
  const styles = useStyles();
  const { duration, gbAmount, upFrontPayment } = subscriptionValues;

  return (
    <div className={styles.container}>
      <Card className={styles.root} variant="outlined">
        <CardContent>
          <h2>Confirmation</h2>
          <Typography className={styles.font} variant="body2" component="p">
            Subscription duration: {duration} Months.
          </Typography>
          <Typography className={styles.font} variant="body2" component="p">
            Cluster storage: {gbAmount} Gb
          </Typography>
          <Typography className={styles.font} variant="body2" component="p">
            Price per gb: {gbPrice}$
          </Typography>
          {upFrontPayment === true ? (
            <Typography className={styles.font} variant="body2" component="p">
              Discount: 10%
            </Typography>
          ) : null}
          <br />
          <hr />
          <h3>Total: {finalPrice}$.</h3>
        </CardContent>
      </Card>
      {step === 2 ? (
        <div className={styles.termsAndConditions}>
          <Checkbox
            checked={checkedBox}
            onClick={handleCheckBox}
            color="primary"
          />
          <p>Accept terms & conditions to purchase</p>
        </div>
      ) : null}
    </div>
  );
}
