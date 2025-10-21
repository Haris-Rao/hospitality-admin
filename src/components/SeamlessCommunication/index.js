"use client";
import React from "react";
import classes from "./SeamlessCommunication.module.css";
import { Container } from "react-bootstrap";
import parse from "html-react-parser";
import ImageTextBlock from "../ImageTextBlock";
import Box from "../Core/Box";

export default function SeamlessCommunication({
  title = "<h2><strong>Seamless</strong> Communication</h2>",
  sectionTitle = "One Click, Instant Access to All Your Hotel Services in an Instant",
  sectionDescription = "With just a single click, guests can effortlessly access a wide range of hotel services. Whether connecting to the reception, ordering food, or requesting amenities, our platform ensures a smooth and efficient experience. Say goodbye to long waits and hello to instant service at your fingertips. Our intuitive design guarantees that all your needs are met with just one tap. Enjoy seamless interaction with our hotel services and enhance your stay like never before.",
  sectionImage = "/images/telephone.png",
}) {
  return (
    <Container>
      <Box className={classes.mainWrapper}>
        {parse(title)}
        <ImageTextBlock
          data={{
            title: sectionTitle,
            description: sectionDescription,
            image: sectionImage,
          }}
          onclick={() => {}}
        />
      </Box>
    </Container>
  );
}
