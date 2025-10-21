import Image from "next/image";
import classes from "./UserComponent.module.css";
import { imageUrl } from "@/config/apiUrl";
import { capitalizeFirstLetter } from "@/helper/HelperFunction";

export default function UserComponent({ user, platform }) {
  return (
    <div className={classes.userComponent}>
      <div className={classes.userImage}>
        <Image
          src={platform === "google" ? user?.image : imageUrl(user?.image)}
          alt={user?.name}
          layout="fill"
        />
      </div>
      <div className={classes.userDetails}>
        <p className={classes.name}>{capitalizeFirstLetter(user?.name)}</p>
        <p className={classes.email}>{user?.email}</p>
      </div>
    </div>
  );
}
