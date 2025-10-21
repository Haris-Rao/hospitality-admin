import React from "react";
import classes from "./ProfileComponent.module.css";
import { cn } from "@/helper/HelperFunction";
import { imageUrl } from "@/config/apiUrl";
import { user_image } from "@/constant/imagePath";

export default function ProfileDetailsComponent({
  image,
  name,
  email,
  variant,
}) {
  return (
    <div
      className={cn(
        classes.image_name,
        variant === "circular" && classes.circular
      )}
    >
      {image instanceof File ? (
        <img src={user_image} alt={name} />
      ) : (
        <img src={imageUrl(image)} alt={name} />
      )}
      <div>
        <h4>{name}</h4>
        {email && <p>{email}</p>}
      </div>
    </div>
  );
}
