"use client";
import { Container } from "react-bootstrap";
import classes from "./HeroSection.module.css";

function HeroSection({ heading }) {
  return (
    <div className={classes.homeHeroSection}>
      <Container>
        <h1>{heading}</h1>
      </Container>
    </div>
  );
}

export default HeroSection;
