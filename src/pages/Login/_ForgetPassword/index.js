import { Button } from "@/components/Core/Button";
import { logo } from "@/constant/imagePath";
import { RenderToast } from "@/helper/HelperFunction";
import OtpInput from "react-otp-input";
import classes from "../Login.module.css";
import { useEffect, useState } from "react";

const ForgetPassword = ({
  otp,
  setOtp,
  onClick,
  loading,
  backToLogin,
  resendOtp,
  resendOtpLoader,
}) => {
  const [seconds, setSeconds] = useState(120);
  const handleValidate = async (e) => {
    const params = {
      otp,
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

    onClick(params);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds - 1 > 0 ? seconds - 1 : "00");
    }, 1000);
    return () => clearInterval(interval);
  }, [seconds]);
  return (
    <>
      <div className={classes.formContainer}>
        <img src={logo} alt="logo" className={classes.logoImg} />
        <div className={classes.loginHeadingContainer}>
          <h6 className={classes.loginHeading}>Forget Password?</h6>
          <p>
            Email has been sent to your registered email address with a
            verification code.
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
            <p className={classes.resendContainer}>
              {seconds !== "00" && (
                <>
                  Your OTP code will expire in{" "}
                  <span className={classes.timer}>
                    {` ${String(Math.floor(seconds / 60)).padStart(
                      2,
                      "0"
                    )}:${String(seconds % 60).padStart(2, "0")}`}
                  </span>
                </>
              )}
              {seconds == "00" && (
                <>
                  Your OTP code has expired.
                  <span
                    onClick={async () => {
                      if (resendOtpLoader) return;
                      const res = await resendOtp();
                      if (res) {
                        setSeconds(120);
                      }
                    }}
                    className={classes.resend}
                  >
                    Resend OTP
                  </span>
                </>
              )}
            </p>
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

export default ForgetPassword;
