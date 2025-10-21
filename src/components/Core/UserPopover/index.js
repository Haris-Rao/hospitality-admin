import { imageUrl } from "@/config/apiUrl";
import { BiChevronDown, BiUser } from "react-icons/bi";
import { MdLogout, MdOutlineDashboard } from "react-icons/md";
import { useDispatch } from "react-redux";
import PopperComponent from "../PopperComponent";
import classes from "./UserPopover.module.css";
import { Link, useNavigate } from "react-router-dom";
import { signOutRequest } from "@/store/auth/authSlice";
import { cn } from "@/helper/HelperFunction";

export default function UserPopover({ user }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(signOutRequest());
    navigate("/");
  };

  return (
    <PopperComponent
      sideOffset={10}
      popperInsideElement={
        <div className={classes.list}>
          <Link className={classes.link} to="/dashboard">
            <MdOutlineDashboard />
            Dashboard
          </Link>
          <Link className={classes.link} to="/profile-setting">
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
          <img
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
