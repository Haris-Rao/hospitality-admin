import { usePathname, useRouter } from "next/navigation";
import {
  IoCaretBackOutline,
  IoGridOutline,
  IoNotificationsOutline,
} from "react-icons/io5";
import { useSelector } from "react-redux";
import Classes from "./AfterLoginHeader.module.css";
import { Button } from "../Core/Button";
import ThemeSwitcher from "../ThemeSwitcher";
import ProfileDetailsComponent from "../ProfileComponent";

export const AfterLoginHeader = ({ header, drawerBtn }) => {
  const { user } = useSelector((state) => state?.authReducer);
  const { unreadNotification } = useSelector((state) => state.commonReducer);
  const path = usePathname();
  const splitPath = path.split("/");
  const router = useRouter();

  return (
    <div className={Classes.loginHeader}>
      <div className={Classes.navbarContainer}>
        {drawerBtn && drawerBtn}
        <div className={Classes.mainHeader}>
          {false && (
            <div className={Classes.backBtn} onClick={() => router.back()}>
              <IoCaretBackOutline />
            </div>
          )}
          {header && <h1 className={Classes.heading}>{header}</h1>}
        </div>

        <ThemeSwitcher />
        <div
          className={Classes.notification_header}
          onClick={() => router.push("/notifications")}
        >
          {unreadNotification > 0 && (
            <p>{unreadNotification > 9 ? "9+" : unreadNotification}</p>
          )}
          <Button
            size="sm"
            variant="bordered"
            className={Classes.notificationBtn}
          >
            <IoNotificationsOutline size={24} color="var(--icon-color)" />
          </Button>
        </div>
        <ProfileDetailsComponent user={user} />
      </div>
    </div>
  );
};
