import React from "react";
import classes from "./HomeFeaturesSection.module.css";
import HeadingComponent from "../Core/HeadingComponent";
import FeatureCard from "../FeatureCard";
import { Container } from "react-bootstrap";

export default function HomeFeaturesSection({
  title = "Key Features",
  features = [
    {
      title: "Seamless Service Access",
      description:
        "Easily connect with hotel services in just one click, from reception to room service. Enjoy immediate access without any delays.",
      image: "/images/service.png",
    },
    {
      title: "Customizable Experience",
      description:
        "Tailor the platform to suit your hotel's unique services and needs. Provide guests with a personalized and memorable experience.",
      image: "/images/customize.png",
    },
    {
      title: "Real-Time Notifications",
      description:
        "Stay updated with instant notifications about guest requests and service status. Never miss a detail, and always stay ahead.",
      image: "/images/realtime.png",
    },
    {
      title: "User-Friendly Interface",
      description:
        "Navigate with ease through a simple and intuitive interface. Both guests and staff can use the system effortlessly.",
      image: "/images/mobile.png",
    },
    {
      title: "Secure Communication",
      description:
        "Enjoy encrypted and secure communication between guests and hotel staff. Protect sensitive information and ensure privacy.",
      image: "/images/verify.png",
    },
    {
      title: "Multi-Device Access",
      description:
        "Access the platform from any device, whether on mobile or desktop. Stay connected with guests and services, anytime, anywhere.",
      image: "/images/monitor.png",
    },
  ],
}) {
  return (
    <Container>
      <HeadingComponent heading={title} />
      <div className={classes.featuresCardWrapper}>
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            data={feature}
            backgroundColor="var(--background-section)"
          />
        ))}
      </div>
    </Container>
  );
}
