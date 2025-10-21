"use client";
import { useState } from "react";
import classes from "./UserDetailsComponent.module.css";
import RenderData from "../RenderData";
import { userDetailsData } from "@/constant/DummyData";
import { capitalizeFirstLetter, formatDate } from "@/helper/HelperFunction";
import Image from "next/image";
import { LuCake, LuMapPin, LuPhone, LuUserRound } from "react-icons/lu";
import Statuses from "../Core/Statuses";
import { imageUrl } from "@/config/apiUrl";
import Skeleton from "../Skeleton";

export default function UserDetailsComponent({ data = {}, loading = false }) {
  if (loading) {
    return customLoader();
  }
  return (
    <div className={classes.userDetails}>
      <div className={classes.main}>
        <div className={classes.userDetails__image}>
          <Image
            src={imageUrl(data?.photo)}
            alt={data?.name}
            className={classes.userDetails__image}
            layout="fill"
          />
        </div>
        <div className={classes.userDetails__details}>
          <p className={classes.name}>{capitalizeFirstLetter(data?.name)}</p>
          <p className={classes.email}>{data?.email}</p>
          <div className={classes.userDetails__meta}>
            <p className={classes.__phone}>
              <LuPhone color="var(--primary-color)" size={20} />
              {data?.phone || "N/A"}
            </p>
          </div>
        </div>
      </div>
      <div className={classes.lastLogin__main}>
        <RenderData label="Joined On">{formatDate(data?.createdAt)}</RenderData>
      </div>
      <div className={classes.role__main}>
        <RenderData label="Role">
          {capitalizeFirstLetter(data?.role)}
        </RenderData>
      </div>
      <div className={classes.status__main}>
        <RenderData label="Status">
          <Statuses status={data?.status} />
        </RenderData>
      </div>
      {/* <div className={classes.invoiceId__main}>
        <RenderData label="Invoice ID">{data?._id}</RenderData>
      </div> */}
    </div>
  );
}

const customLoader = () => {
  return (
    <div className={classes.userDetails}>
      <div className={classes.main}>
        <div className={classes.userDetails__image}>
          <Skeleton height={200} width={200} />
        </div>
        <div className={classes.userDetails__details}>
          <Skeleton
            height={20}
            width={"100%"}
            style={{ marginBottom: "10px" }}
          />
          <Skeleton height={20} width={"100%"} />
          <div className={classes.userDetails__meta}>
            <p className={classes.__phone}>
              <LuPhone color="var(--primary-color)" size={20} />
              <Skeleton height={20} width={100} />
            </p>
          </div>
        </div>
      </div>
      <div className={classes.lastLogin__main}>
        <RenderData label="Joined On">
          <Skeleton height={20} width={100} />
        </RenderData>
      </div>
      <div className={classes.role__main}>
        <RenderData label="Role">
          <Skeleton height={20} width={100} />
        </RenderData>
      </div>
      <div className={classes.status__main}>
        <RenderData label="Status">
          <Skeleton height={20} width={100} />
        </RenderData>
      </div>
    </div>
  );
};
