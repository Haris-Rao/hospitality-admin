import { Button } from "@/components/Core/Button";
import { Input } from "@/components/Core/Input";
import { logo } from "@/constant/imagePath";
import { RenderToast } from "@/helper/HelperFunction";
import { useState } from "react";
import classes from "../Login.module.css";

const ConfirmPassword = ({ password, setPassword, onClick, loading }) => {
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleValidate = async (e) => {
    const params = {
      password,
      confirmPassword,
    };
    for (let key in params) {
      if (!params[key]) {
        return RenderToast({
          type: "error",
          message: `Please fill the ${key} field!`,
        });
      }
    }

    if (params["password"]?.length < 8) {
      return RenderToast({
        type: "error",
        message: "Password must contain min 8 characters",
      });
    }
    if (params["password"] !== params["confirmPassword"]) {
      return RenderToast({
        type: "error",
        message: "Password and Confirm Password do not match!",
      });
    }
    onClick(params);
  };

  return (
    <>
      <div className={classes.formContainer}>
        <img src={logo} alt="logo" className={classes.logoImg} />
        <div className={classes.loginHeadingContainer}>
          <h6 className={classes.loginHeading}>Create New Password</h6>
          <p>Enter your registered email for OTP verification.</p>
        </div>
        <form className={classes.loginForm}>
          <Input
            placeholder="Enter Password"
            type="password"
            value={password}
            setter={setPassword}
            label={"Enter New Password"}
          />
          <Input
            placeholder="Enter Password"
            value={confirmPassword}
            setter={setConfirmPassword}
            type="password"
            label={"Confirm Password"}
          />
        </form>
        <Button
          className={classes.loginBtn}
          label={loading ? "wait..." : "Save Password"}
          onClick={handleValidate}
          disabled={loading}
        />
      </div>
    </>
  );
};

export default ConfirmPassword;
