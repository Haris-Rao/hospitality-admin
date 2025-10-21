import { Patch, Post } from "@/axios/AxiosFunctions.js";
import { BaseURL } from "@/config/apiUrl";
import { apiHeader, RenderToast } from "@/helper/HelperFunction";
import { saveLoginUserData } from "@/store/auth/authSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import classes from "./Login.module.css";
import LoginForm from "./_loginForm";
import EmailVerification from "./_EmailVerify";
import ConfirmPassword from "./_ConfirmPassword";
import ForgetPassword from "./_ForgetPassword";
import EmailComponent from "./_Email";

const LOADING = {
  LOGIN: "loginLoader",
  VERIFY: "verifyLoader",
  EMAIL: "emailLoader",
  OTP: "otpLoader",
  CONFIRM_PASSWORD: "confirmPassLoader",
  RESEND_OTP: "resendOtpLoader",
};

const Login = () => {
  const [code, setCode] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [forgotPassEmail, setForgotPassEmail] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const headers = apiHeader();
  const [tabs, setTabs] = useState("login");

  const handleLogin = async (body) => {
    let params = { ...body };

    const url = BaseURL("auth/admin-login");
    setLoading(LOADING.LOGIN);
    const response = await Post(url, params, apiHeader());
    if (response !== undefined) {
      RenderToast({ type: "success", message: "Login Successful" });
      if (response?.data?.emailVerified === false) {
        setTabs("emailVerification");
      } else {
        dispatch(saveLoginUserData(response?.data));
        navigate("/");
      }
    }
    setLoading(false);
  };

  const handleEmailVerification = async (body) => {
    let params = { ...body };
    
    const url = BaseURL("auth/validate-otp");
    setLoading(LOADING.VERIFY);
    const response = await Post(url, params, apiHeader());
    if (response !== undefined) {
      RenderToast({
        type: "success",
        message: "Email verified successfully!",
      });
      dispatch(saveLoginUserData(response?.data));
      navigate("/");
    }
    setLoading(false);
  };

  const handleForgotPassword = async () => {
    const url = BaseURL(`auth/forgotPassword`);
    setLoading(LOADING.EMAIL);
    const response = await Post(url, { email }, headers);
    if (response !== undefined) {
      RenderToast({
        type: "success",
        message:
          "OTP code has been sent successfully. Please check your email!",
      });
      setForgotPassEmail(email);
      setTabs("forgotPassword");
    }
    setLoading(false);
  };

  const handleResetPassword = async () => {
    const params = {
      code: code,
      email: forgotPassEmail,
    }
    const url = BaseURL(`auth/validate-otp`);
    setLoading(LOADING.OTP);
    const response = await Post(url, params, headers);
    if (response !== undefined) {
      RenderToast({ type: "success", message: "Otp code is valid" });
      setTabs("confirmPassword");
      setCode(params?.code);
    }
    setLoading(false);
  };

  const handleConfirmPassword = async (body) => {
    const params = {
      ...body,
      email: forgotPassEmail,
      code: code,
    }
    const url = BaseURL(`auth/resetPassword`);
    setLoading(LOADING.CONFIRM_PASSWORD);
    const response = await Patch(url, params, headers);
    if (response !== undefined) {
      RenderToast({
        type: "success",
        message: "Password has been changed successfully!",
      });
      setTabs("login");
      setEmail("");
      setPassword("");
      setCode("");
    }
    setLoading(false);
  };

  const handleResendOtp = async () => {
    const url = BaseURL(`auth/resend-otp`);
    setLoading(LOADING.RESEND_OTP);
    const response = await Patch(url, { email }, headers);
    if (response !== undefined) {
      RenderToast({
        type: "success",
        message:
          "OTP code has been sent successfully. Please check your email!",
      });
      return true;
    }
    setLoading(false);
  };
  const handleBackToLogin = () => {
    setTabs("login");
    setEmail("");
    setPassword("");
  };
  return (
    <>
      <div className={classes.mainContainer}>
        {tabs === "login" && (
          <LoginForm
            email={email}
            password={password}
            handleLogin={handleLogin}
            setEmail={setEmail}
            loading={loading === LOADING.LOGIN}
            setPassword={setPassword}
            onForgetPassword={() => {
              setCode("");
              setTabs("email");
            }}
          />
        )}
        {tabs === "emailVerification" && (
          <EmailVerification
            otp={code}
            email={email}
            setOtp={setCode}
            onClick={handleEmailVerification}
            loading={loading === LOADING.VERIFY}
            backToLogin={handleBackToLogin}
          />
        )}
        {tabs === "email" && (
          <EmailComponent
            email={email}
            setEmail={setEmail}
            handleEmail={handleForgotPassword}
            backToLogin={handleBackToLogin}
            loading={loading === LOADING.EMAIL}
          />
        )}
        {tabs === "forgotPassword" && (
          <ForgetPassword
            otp={code}
            setOtp={setCode}
            onClick={handleResetPassword}
            loading={loading === LOADING.OTP}
            backToLogin={handleBackToLogin}
            resendOtp={handleResendOtp}
            resendOtpLoader={loading === LOADING.RESEND_OTP}
          />
        )}

        {tabs === "confirmPassword" && (
          <ConfirmPassword
            password={password}
            setPassword={setPassword}
            onClick={handleConfirmPassword}
            loading={loading === LOADING.CONFIRM_PASSWORD}
          />
        )}
      </div>
    </>
  );
};

export default Login;
