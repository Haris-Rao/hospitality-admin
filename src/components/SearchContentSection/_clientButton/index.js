"use client";
import { Button } from "@/components/Core/Button";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import classes from "../SearchContentSection.module.css";
function ClientButton() {
  const router = useRouter();
  const { isLogin } = useSelector((state) => state.authReducer);
  return (
    <Button
      variant="primary"
      className={classes.searchButton}
      onClick={() => {
        if (isLogin) {
          router.push("/posts");
        } else {
          router.push("/login");
        }
      }}
    >
      Start Searching Now!
    </Button>
  );
}

export default ClientButton;
