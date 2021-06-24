import React from "react";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles({
  container: {
    position: "absolute",
    left: "52%",
    top: "57%",
    transform: "translate(-50%, -50%)",
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
});

export default function Confirmation({
  gbPrice,
  finalPrice,
  subscriptionValues,
}) {
  let { duration, gbAmount, upFrontPayment } = subscriptionValues;
  const style = useStyles();
  return (
    <div className={style.container}>
      <Card className={style.root} variant="outlined">
        <CardContent>
          <h2>Confirmation</h2>
          <Typography className={style.font} variant="body2" component="p">
            Subscription duration: {duration} Months.
          </Typography>
          <Typography className={style.font} variant="body2" component="p">
            Cluster storage: {gbAmount} Gb
          </Typography>
          <Typography className={style.font} variant="body2" component="p">
            Price per gb: {gbPrice}$
          </Typography>
          {upFrontPayment === true ? (
            <Typography className={style.font} variant="body2" component="p">
              Discount: 10%
            </Typography>
          ) : (
            <div></div>
          )}
          <br />
          <hr />
          <h3>Total: {finalPrice}$.</h3>
        </CardContent>
        <CardActions></CardActions>
      </Card>
    </div>
  );
}
