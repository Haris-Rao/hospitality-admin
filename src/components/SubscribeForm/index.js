"use client";
import { useState } from "react";
import { Button } from "../Core/Button";
import { Input } from "../Core/Input";
import classes from "./SubscribeForm.module.css";
import { BaseURL } from "@/config/apiUrl";
import { RenderToast, validateEmail } from "@/helper/HelperFunction";
import { Post } from "@/axios/AxiosFunctions";
import { BsSendFill } from "react-icons/bs";
import { LuMailPlus } from "react-icons/lu";

export default function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (!validateEmail(email)) {
      RenderToast({
        type: "error",
        message: "Enter Valid Email",
      });
      return;
    }
    const apiURL = BaseURL(`newsletters`);
    setIsLoading("subscribe");
    const response = await Post(apiURL, { email: email });
    if (response) {
      RenderToast({
        type: "success",
        message: "Subscribed Successfully",
      });
      setEmail("");
    }
    setIsLoading(false);
  };

  return (
    <div className={classes.subscribeForm}>
      <Input
        placeholder="Enter your email address"
        value={email}
        setter={setEmail}
        inputStyle={{
          border: "none",
          backgroundColor: "transparent",
        }}
        leftIcon={<LuMailPlus />}
      />
      <span className={classes.sendBtn}>
        <BsSendFill />
      </span>
    </div>
  );
}
