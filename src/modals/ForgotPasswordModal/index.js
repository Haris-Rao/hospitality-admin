import { Button } from "@/components/Core/Button";
import { Input } from "@/components/Core/Input";
import { useState } from "react";
import { toast } from "react-toastify";
import ModalSkeleton from "../ModalSkeleton";
import classes from "./forgotPasswordModal.module.css";
import { validateEmail } from "constant/regex";

function ForgotPasswordModal({ show, setShow, onclick, isLoading }) {
  const [email, setEmail] = useState("");
  async function onSubmit() {
    if (email === "") {
      return toast.error("Email is required");
    }
    if (!validateEmail(email)) {
      return toast.error("Please enter correct email");
    }
    onclick(email);
  }

  return (
    <ModalSkeleton
      show={show}
      setShow={setShow}
      header={`Forgot Password`}
      headerClass={classes.mainHeading}
    >
      <div className={classes.container}>
        <Input
          setter={setEmail}
          value={email}
          placeholder={"Enter email here"}
          label={"Email"}
        />
        <Button
          label={isLoading ? "Loading..." : "Submit"}
          onClick={onSubmit}
          className={classes.btn}
          disabled={isLoading}
        />
      </div>
    </ModalSkeleton>
  );
}

export default ForgotPasswordModal;
