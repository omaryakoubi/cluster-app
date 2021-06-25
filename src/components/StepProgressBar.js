import Step from "@material-ui/core/Step";
import Button from "@material-ui/core/Button";
import Stepper from "@material-ui/core/Stepper";
import { makeStyles } from "@material-ui/core/styles";
import StepButton from "@material-ui/core/StepButton";
import axios from "axios";
import { useEffect, useState } from "react";

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
  subscriptionValues,
}) {
  const [isFormCompleted, setIsFormCompleted] = useState(false);

  const handleFormConfirmation = () => {
    if (step === 1) {
      if (
        creditCardNumber.toString().length === 16 &&
        userFullName.length !== 0 &&
        creditCardExpiryDate.toString().length === 6 &&
        creditCardSecurityCode.toString().length === 3
      ) {
        setIsFormCompleted(!isFormCompleted);
      } else {
        setIsFormCompleted(true);
      }
    } else {
      setIsFormCompleted(false);
    }
  };

  useEffect(() => {
    handleFormConfirmation();
    // eslint-disable-next-line
  }, [step, subscriptionValues]);

  const styles = useStyles();

  const stepTitles = ["Choose your plan", "Payment", "Confirmation"];

  const {
    creditCardNumber,
    userFullName,
    creditCardExpiryDate,
    creditCardSecurityCode,
  } = subscriptionValues;

  const postData = async () => {
    try {
      await axios.post("https://httpbin.org/post", subscriptionValues);
      nextStep();
    } catch (error) {
      console.log(error);
    }
  };

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
        {step === 0 || step === 3 ? null : (
          <Button variant="outlined" onClick={prevStep} className={styles.btn}>
            Back
          </Button>
        )}

        {/* {
          ? (disabled = false)
          : (disabled = true)} */}

        {step < 2 ? (
          <Button
            variant="contained"
            disabled={isFormCompleted}
            color="primary"
            onClick={nextStep}
            className={styles.btn}
          >
            Next
          </Button>
        ) : step === 2 ? (
          <Button
            disabled={!checkedBox}
            variant="contained"
            color="primary"
            onClick={postData}
            className={styles.btn}
          >
            Submit
          </Button>
        ) : null}
      </div>
    </div>
  );
}
