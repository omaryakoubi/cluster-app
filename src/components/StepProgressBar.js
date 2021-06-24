import Step from "@material-ui/core/Step";
import Button from "@material-ui/core/Button";
import Stepper from "@material-ui/core/Stepper";
import { makeStyles } from "@material-ui/core/styles";
import StepButton from "@material-ui/core/StepButton";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },

  btn: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
    padding: 0,
  },

  completed: {
    display: "inline-block",
  },
});

export default function HorizontalNonLinearAlternativeLabelStepper({
  step,
  prevStep,
  nextStep,
}) {
  let stepTitles = ["Choose your plan", "Payment", "Confirmation"];
  const styles = useStyles();
  console.log("omarrrrrrrrrrrrr", step);
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
      <div>
        <Button disabled={step === 0} onClick={prevStep} className={styles.btn}>
          Back
        </Button>
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
