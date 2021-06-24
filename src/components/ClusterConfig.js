import { InputLabel, Select, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid #D4D8DC",
    borderRadius: "9px",
    height: "400px",
    width: "300px",
    margin: "2% auto auto auto",
    backgroundColor: "#FAFAFA",
  },
  info: {
    color: "black",
    fontSize: "12px",
  },
});

export default function ClusterConfig({
  finalPrice,
  handleChange,
  subscriptionValues,
}) {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <h2>1. Choose your plan</h2>
      <InputLabel id="demo-simple-select-label">Duration</InputLabel>
      <Select
        className="select"
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        defaultValue={subscriptionValues.duration}
        name="duration"
        onChange={handleChange("duration")}
      >
        <MenuItem value="3">3 Months</MenuItem>
        <MenuItem value="6">6 Months</MenuItem>
        <MenuItem value="12">12 Months</MenuItem>
      </Select>{" "}
      <br />
      <InputLabel id="demo-simple-select-label">GB Amount</InputLabel>
      <Select
        className="select"
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        defaultValue={subscriptionValues.gbAmount}
        name="gbAmount"
        onChange={handleChange("gbAmount")}
      >
        <MenuItem value="5">5 GB</MenuItem>
        <MenuItem value="10">10 GB</MenuItem>
        <MenuItem value="50">50 GB</MenuItem>
      </Select>
      <br />
      <InputLabel id="demo-simple-select-label">
        Upfront Payment
        <br />
        <span className={styles.info}>(Upfront payment will give you-10%)</span>
      </InputLabel>
      <Select
        className="select"
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        defaultValue={subscriptionValues.upFrontPayment}
        name="upFrontPayment"
        onChange={handleChange("upFrontPayment")}
      >
        <MenuItem value="true">Yes</MenuItem>
        <MenuItem value="false">No</MenuItem>
      </Select>
      <h1>{finalPrice} $</h1>
    </div>
  );
}
