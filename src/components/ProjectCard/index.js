import React from "react";
import classes from "./ProjectCard.module.css";
import { SlOptions } from "react-icons/sl";
import { formatDate } from "@/helper/HelperFunction";
import Image from "next/image";
const ProjectCard = ({ data = _data }) => {
  return (
    <div className={classes.card}>
      <div className={classes.image}>
        <Image src={data.image} alt={data.title} fill />
      </div>
      <div className={classes.content}>
        <div className={classes.header}>
          <h3>{data.title}</h3>
          <SlOptions />
        </div>
        <div className={classes.body}>
          <p>{formatDate(data.createdAt)}</p>
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
const _data = {
  image: "/images/projectImage.png",
  title: "Project 1",
  createdAt: "2021-01-01",
};
