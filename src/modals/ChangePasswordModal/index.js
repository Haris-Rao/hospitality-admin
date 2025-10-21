import { Button } from "@/components/Core/Button";
import { Input } from "@/components/Core/Input";
import { useState } from "react";
import { toast } from "react-toastify";
import ModalSkeleton from "../ModalSkeleton";
import classes from "./ChangePasswordModal.module.css";
import { formRegEx, formRegExReplacer } from "constant/regex";
import { RxCross2 } from "react-icons/rx";
import { IoMdCheckmark } from "react-icons/io";
import Box from "components/Box";
import HeadingComponent from "components/HeadingComponent";

export default function ChangePasswordModal({
  show,
  setShow,
  onclick,
  loader,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSave = () => {
    let params = {
      currentPassword,
      newPassword: password,
      confirmPassword,
    };

    for (let key in params) {
      if (!params[key]) {
        return toast.error(
          `Please fill the ${key
            .replace(formRegEx, formRegExReplacer)
            .toLowerCase()} field!`
        );
      }
    }
    if (currentPassword === password) {
      return toast.error("You entered an old password");
    }
    if (password < 8) {
      toast.error("Password must contain more than 8 characters");
      return;
    }
    if (password !== confirmPassword) {
      return toast.error("Password and confirm password should be same!");
    }
    onclick(params);
  };
  return (
    <ModalSkeleton
      show={show}
      setShow={setShow}
      header={<HeadingComponent heading={"Change Password"} />}
      headerClass={classes.header}
      className={classes.headerBox}
      noPadding={true}
      showCloseIcon={true}
    >
      <Box>
        <Input
          label={"Current Password"}
          type={"password"}
          value={currentPassword}
          setter={setCurrentPassword}
          placeholder={"Enter Current Password"}
          headerStyles={{ padding: "0px !important" }}
        />
        <Input
          type={"password"}
          label={"New Password"}
          value={password}
          setter={setPassword}
          placeholder={"Enter New Password"}
        />
        <Input
          type={"password"}
          label={"Confirm New Password"}
          value={confirmPassword}
          setter={setConfirmPassword}
          placeholder={"Confirm New Password"}
        />
        <div className={classes.button}>
          <Button
            label="Cancel"
            variant={"grey-disable"}
            rightIcon={<RxCross2 />}
          />
          <Button
            label={loader ? "Updating..." : "Update"}
            onClick={handleSave}
            disabled={loader}
            rightIcon={<IoMdCheckmark />}
            variant={"secondary"}
          />
        </div>
      </Box>
    </ModalSkeleton>
  );
}
