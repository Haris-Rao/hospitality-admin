"use client";
import { useMediaQuery } from "@/customHooks/useMediaQuery";
import { cn } from "@/helper/HelperFunction";
import parse from "html-react-parser";
import { useTheme } from "next-themes";
import Image from "next/image";
import { Container } from "react-bootstrap";
import { StarRating } from "../Core/StarRating";
import classes from "./HomeHeroSection.module.css";

function HomeHeroSection({
  title = "<h1>Seamless <strong>Hotel Service</strong> at Your Fingertips</h1>",
  description = "Experience effortless communication between guests and hotel services with our intuitive mobile app. One tap, instant access",
  rating = {
    title: "4.5 rating out of 5",
    description: "Rated 5 stars for seamless service and convenience",
  },
  happyUsers = {
    title: "95% Users",
    description: "Loved by 95% of users for seamless service and convenience.",
    images: [
      "/images/user-3.png",
      "/images/happy-user-2.png",
      "/images/happy-user-3.png",
    ],
  },
  lovedBy = {
    title: "95% Users",
    description: "Loved by 95% of users for seamless service and convenience.",
  },
  downloads = {
    title: "Over 1000+",
    description: "Over 1,000 downloads and counting.",
  },
  imageDark = "/images/home-hero-light.png",
  imageLight = "/images/home-hero-light.png",
}) {
  const { theme } = useTheme();
  const isMobile = useMediaQuery("(max-width: 1050px)");

  return (
    <div className={classes.homeHeroSection}>
      <Container>
        <div className={classes.headerWrapper}>
          {parse(title)}
          <p>{description}</p>
        </div>

        <div className={classes.imageWrapper}>
          <Image
            src={theme === "light" ? imageLight : imageDark}
            alt="Hero Image"
            fill
          />

          {!isMobile && (
            <>
              <div className={cn(classes.cardWrapper, classes.card1)}>
                <h4>{rating?.title}</h4>
                <StarRating rating={5} starDimension="24px" starSpacing="6px" />
                <p>{rating?.description}</p>
              </div>
              <div className={cn(classes.cardWrapper, classes.card2)}>
                <h4>{happyUsers?.title}</h4>
                <div className={classes.happyImagesWrapper}>
                  {happyUsers?.images?.map((image, index) => (
                    <div key={index} className={classes.happyImage}>
                      <Image src={image} alt="Happy User" fill />
                    </div>
                  ))}
                </div>
                <p>{happyUsers?.description}</p>
              </div>
              <div className={cn(classes.cardWrapper, classes.card3)}>
                <h4>{lovedBy?.title}</h4>
                <p>{lovedBy?.description}</p>
              </div>
              <div className={cn(classes.cardWrapper, classes.card4)}>
                <h4>{downloads?.title}</h4>
                <p>{downloads?.description}</p>
              </div>
            </>
          )}
        </div>
        {isMobile && (
          <div className={classes.mobileCardsWrapper}>
            <div className={cn(classes.cardWrapper, classes.card1)}>
              <h4>{rating?.title}</h4>
              <StarRating rating={5} starDimension="24px" starSpacing="6px" />
              <p>{rating?.description}</p>
            </div>
            <div className={cn(classes.cardWrapper, classes.card2)}>
              <h4>{happyUsers?.title}</h4>
              <div className={classes.happyImagesWrapper}>
                {happyUsers?.images?.map((image, index) => (
                  <div key={index} className={classes.happyImage}>
                    <Image src={image} alt="Happy User" fill />
                  </div>
                ))}
              </div>
              <p>{happyUsers?.description}</p>
            </div>
            <div className={cn(classes.cardWrapper, classes.card3)}>
              <h4>{lovedBy?.title}</h4>
              <p>{lovedBy?.description}</p>
            </div>
            <div className={cn(classes.cardWrapper, classes.card4)}>
              <h4>{downloads?.title}</h4>
              <p>{downloads?.description}</p>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}

export default HomeHeroSection;
