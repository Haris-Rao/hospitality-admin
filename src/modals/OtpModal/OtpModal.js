import { Button } from "@/components/Core/Button";
import { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import { toast } from "react-toastify";
import ModalSkeleton from "../ModalSkeleton";
import classes from "./OtpModal.module.css";
import { validateEmail } from "constant/regex";
const OtpModal = ({
  show,
  setShow,
  email,
  handleOtpFunc,
  isOtpSend,
  resendOtp,
  resendOtpLoader,
}) => {
  const [otp, setOtp] = useState("");
  const [seconds, setSeconds] = useState(120);

  const handleSubmit = async () => {
    const params = {
      code: otp,
      email,
    };
    if (!validateEmail(params?.email)) {
      return toast.error("Please enter correct email");
    }
    for (let key in params) {
      if (!params[key]) {
        return toast.error(`Please insert the OTP code`);
      }
    }
    if (String(params?.otpCode)?.length < 6) {
      return toast.error(`Otp code is incomplete!`);
    }
    await handleOtpFunc(params);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds - 1 > 0 ? seconds - 1 : "00");
    }, 1000);
    return () => clearInterval(interval);
  }, [seconds]);
  return (
    <>
      <ModalSkeleton
        show={show}
        setShow={setShow}
        header={"OTP Verification"}
        headerClass={classes.heading}
      >
        <div className={classes.OtpInput_main}>
          <p>Enter the One Time Password sent to</p>
          <p>{email}</p>
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
                    const res = await resendOtp(email);
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
          <Button
            disabled={isOtpSend || resendOtpLoader}
            onClick={handleSubmit}
            label={isOtpSend ? "Verifying..." : "Verify"}
            className={classes.verify_btn}
          />
        </div>
      </ModalSkeleton>
    </>
  );
};

export default OtpModal;
