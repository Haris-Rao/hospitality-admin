import { Button } from "@/components/Core/Button";
import { Input } from "@/components/Core/Input";
import { logo } from "@/constant/imagePath";
import { RenderToast } from "@/helper/HelperFunction";
import { validateEmail } from "constant/regex";
import { useState } from "react";
import classes from "../Login.module.css";

const LoginForm = ({
  email,
  password,
  setEmail,
  setPassword,
  handleLogin,
  onForgetPassword,
  loading = false,
}) => {
  const handleValidation = () => {
    const params = {
      email,
      password,
    };
    for (let key in params) {
      if (!params[key]) {
        return RenderToast({
          type: "error",
          message: `Please fill the ${key} field!`,
        });
      }
    }
    if (!validateEmail(email)) {
      return RenderToast({
        type: "error",
        message: "Please enter a valid email!",
      });
    }
    if (params["password"]?.length < 8) {
      return RenderToast({
        type: "error",
        message: "Password must contain min 8 characters",
      });
    }
    handleLogin(params);
  };

  return (
    <>
      <div className={classes.formContainer}>
        <img src={logo} alt="logo" className={classes.logoImg} />
        <div className={classes.loginHeadingContainer}>
          <h6 className={classes.loginHeading}>Log in to Admin</h6>
          <p>Enter your credentials to Log in</p>
        </div>
        <form className={classes.loginForm}>
          <Input
            placeholder="Name@example.com"
            type="email"
            value={email}
            setter={setEmail}
            label={"Email Address"}
            onEnter={handleValidation}
          />
          <Input
            placeholder="Enter Password"
            value={password}
            setter={setPassword}
            type="password"
            label={"Password"}
            onEnter={handleValidation}
          />
        </form>
        <Button
          className={classes.loginBtn}
          label={loading ? "Please Wait..." : "Login"}
          disabled={loading}
          onClick={handleValidation}
        />
        <p className={classes.forgetPass}>
          <span onClick={onForgetPassword}>Forgot Password?</span>
        </p>
      </div>
    </>
  );
};

export default LoginForm;
