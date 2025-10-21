import { imageUrl } from "@/config/apiUrl";
import { cn, handleSignOut } from "@/helper/HelperFunction";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BiChevronDown, BiUser } from "react-icons/bi";
import { MdLogout, MdOutlineDashboard } from "react-icons/md";
import { useDispatch } from "react-redux";
import PopperComponent from "../PopperComponent";
import classes from "./UserPopover.module.css";

export default function UserPopover({ user }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const handleLogout = () => {
    handleSignOut(dispatch, router);
  };

  return (
    <PopperComponent
      sideOffset={10}
      popperInsideElement={
        <div className={classes.list}>
          <Link className={classes.link} href="/dashboard">
            <MdOutlineDashboard />
            Dashboard
          </Link>
          <Link className={classes.link} href="/profile-setting">
            <BiUser /> Profile Setting
          </Link>
          <span
            className={cn(classes.link, classes.logout)}
            onClick={() => handleLogout()}
          >
            <MdLogout color={"var(--danger-color)"} /> Logout
          </span>
        </div>
      }
    >
      <div className={classes.userPopover}>
        <div className={classes.userPhoto}>
          <Image
            src={user?.photo ? imageUrl(user?.photo) : "/images/profile.png"}
            alt="profile"
            width={40}
            height={40}
          />
        </div>
        <div className={classes.userInfo}>
          <p className={cn(classes.userName)}>{user?.name || "John Doe"}</p>
          <p className={cn(classes.userEmail)}>
            {user?.email || "johndoe@gmail.com"}
          </p>
        </div>
        <div>
          <BiChevronDown color={"var(--primary-text-color)"} />
        </div>
      </div>
    </PopperComponent>
  );
}
