import Step from "@material-ui/core/Step";
import Button from "@material-ui/core/Button";
import Stepper from "@material-ui/core/Stepper";
import { makeStyles } from "@material-ui/core/styles";
import StepButton from "@material-ui/core/StepButton";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },

  btnsContainer: {
    display: "flex",
    justifyContent: "space-between",
  },

  btn: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
    padding: "10px 10px",
    width: "100px",
  },

  completed: {
    display: "inline-block",
  },
});

export default function StepProgressBar({
  step,
  prevStep,
  nextStep,
  checkedBox,
  handleCheckBox,
}) {
  const stepTitles = ["Choose your plan", "Payment", "Confirmation"];
  const styles = useStyles();
  return (
    <div>
      <Stepper alternativeLabel nonLinear activeStep={step}>
        {stepTitles.map((label) => {
          const stepProps = {};
          const buttonProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepButton {...buttonProps}>{label}</StepButton>
            </Step>
          );
        })}
      </Stepper>
      <div className={styles.btnsContainer}>
        {step === 0 ? (
          null
        ) : (
          <Button
            variant="outlined"
            color="black"
            onClick={prevStep}
            className={styles.btn}
          >
            Back
          </Button>
        )}

        {step < 2 ? (
          <Button
            variant="contained"
            color="primary"
            onClick={nextStep}
            className={styles.btn}
          >
            Next
          </Button>
        ) : (
          <Button
            disabled={!checkedBox}
            variant="contained"
            color="primary"
            //func to post the data goes here
            //   onClick={nextStep}
            className={styles.btn}
          >
            Submit
          </Button>
        )}
      </div>
    </div>
  );
}
