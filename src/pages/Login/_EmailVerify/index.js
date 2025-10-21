import { Button } from "@/components/Core/Button";
import { logo } from "@/constant/imagePath";
import { RenderToast } from "@/helper/HelperFunction";
import OtpInput from "react-otp-input";
import classes from "../Login.module.css";

const EmailVerification = ({
  otp,
  setOtp,
  onClick,
  loading,
  backToLogin,
  email,
}) => {
  const handleValidate = async (e) => {
    const params = {
      code: otp,
    };
    for (let key in params) {
      if (!params[key]) {
        return RenderToast({
          type: "error",
          message: `Please fill the ${key} field!`,
        });
      }
    }
    if (String(params?.otp)?.length < 6) {
      return RenderToast({
        type: "error",
        message: `Otp code is incomplete!`,
      });
    }

    onClick();
  };

  return (
    <>
      <div className={classes.formContainer}>
        <img src={logo} alt="logo" className={classes.logoImg} />
        <div className={classes.loginHeadingContainer}>
          <h6 className={classes.loginHeading}>Verify your identity</h6>
          <p>
            To protect your account, we'll send a text message with a 6-digit
            code to the {email}.
          </p>
        </div>
        <form className={classes.loginForm}>
          <div>
            <OtpInput
              value={otp}
              onChange={setOtp}
              inputStyle={classes.OtpInput_style}
              numInputs={6}
              isInputNum={true}
              shouldAutoFocus={true}
              renderInput={(props) => <input {...props} />}
            />
          </div>
        </form>
        <Button
          className={classes.loginBtn}
          label={loading ? "wait..." : "Verify OTP"}
          onClick={handleValidate}
          disabled={loading}
        />
        <p className={classes.forgetPass}>
          <span onClick={backToLogin}>Back To Login?</span>
        </p>
      </div>
    </>
  );
};

export default EmailVerification;
