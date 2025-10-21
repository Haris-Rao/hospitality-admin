"use client";
import React from "react";
import { Container } from "react-bootstrap";
import HeadingSection from "../HeadingSection";
import ReactPlayer from "react-player";
import classes from "./HeadingSection.module.css";

function VideoSection() {
  return (
    <div className={classes.videoSectionMain}>
      <Container>
        <div className={classes.videoWrapper}>
          <ReactPlayer
            url="https://youtu.be/IU8aH-yB2eA?si=tVZ06OP5WLqqjZiA"
            controls
            width="100%"
            height="100%"
          />
        </div>
        <div className={classes.headingSection}>
          <HeadingSection
            title="The Seamless Design Solution"
            btnText="See How It Works"
            tag="How Stitchify Works"
            btnVariant="primary"
            description="Stitchify streamlines your design process by merging files into a unified workspace, enabling real-time collaboration, reducing errors, and saving time."
          />
        </div>
        {/* use react player */}
      </Container>
    </div>
  );
}

export default VideoSection;
