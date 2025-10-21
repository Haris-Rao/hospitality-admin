import { Button } from "@/components/Core/Button";
import { Input } from "@/components/Core/Input";
import { logo } from "@/constant/imagePath";
import { RenderToast } from "@/helper/HelperFunction";
import { validateEmail } from "constant/regex";
import { useState } from "react";
import classes from "../Login.module.css";

const EmailComponent = ({
  email,
  setEmail,
  handleEmail,
  backToLogin,
  loading = false,
}) => {
  const handleValidation = () => {
    const params = {
      email,
    };

    if (!validateEmail(email)) {
      return RenderToast({
        type: "error",
        message: "Please enter a valid email!",
      });
    }

    handleEmail(params);
  };

  return (
    <>
      <div className={classes.formContainer}>
        <img src={logo} alt="logo" className={classes.logoImg} />
        <div className={classes.loginHeadingContainer}>
          <h6 className={classes.loginHeading}>Forget Password ?</h6>
          <p>Enter your email address to reset your password</p>
        </div>
        <form className={classes.loginForm}>
          <Input
            placeholder="Email"
            type="email"
            value={email}
            setter={setEmail}
            label={"Email"}
          />
        </form>
        <Button
          className={classes.loginBtn}
          label={loading ? "wait..." : "Continue"}
          disabled={loading}
          onClick={handleValidation}
        />
        <p className={classes.forgetPass}>
          <span onClick={backToLogin}>Back to login?</span>
        </p>
      </div>
    </>
  );
};

export default EmailComponent;
