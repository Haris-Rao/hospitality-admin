import React from "react";
import classes from "./SimplifySection.module.css";
import { Container } from "react-bootstrap";
import Image from "next/image";

export default function SimplifySection({
  title = "How We Simplify Your Hotel Experience",
  cards = [
    {
      title: "Instant Service Access",
      description:
        "Effortlessly connect with hotel services with a single tap, from reception to room service.",
      image: "/images/simplify-1.png",
    },
    {
      title: "Instant One-on-One Chats",
      description:
        "Get quick, personalized assistance by chatting directly with hotel staff anytime.",
      image: "/images/simplify-2.png",
    },
    {
      title: "Real-Time Updates",
      description:
        "Stay ahead of the game with real-time updates on all requests, bookings, and guest services. Our platform ensures you never miss a beat.",
      image: "/images/simplify-3.png",
    },
    {
      title: "User Profile",
      description:
        "User Profile enables users to view and edit their personal information, account settings, and preferences.",
      image: "/images/simplify-4.png",
    },
  ],
}) {
  return (
    <div className={classes.simplifySection}>
      <Container>
        <div className={classes.sectionWrapper}>
          <h2>{title}</h2>
          <div className={classes.topGridWrapper}>
            {cards?.slice(0, 2)?.map((card, index) => (
              <div key={index} className={classes.cardWrapper}>
                <h4>{card?.title}</h4>
                <p>{card?.description}</p>
                <div className={classes.imageWrapper}>
                  <Image src={card?.image} alt={card?.title} fill />
                </div>
              </div>
            ))}
          </div>
          <div className={classes.bottomGridWrapper}>
            {cards?.slice(2, 4)?.map((card, index) => (
              <div key={index} className={classes.cardWrapper}>
                <h4>{card?.title}</h4>
                <p>{card?.description}</p>
                <div className={classes.imageWrapper}>
                  <Image src={card?.image} alt={card?.title} fill />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
