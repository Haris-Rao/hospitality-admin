import React from "react";
import classes from "./TestimonialsSection.module.css";
import HeadingSection from "../HeadingSection";
import { Container } from "react-bootstrap";
import { Button } from "../Core/Button";
import Carousel from "../Core/Carousel";
import { StarRating } from "../Core/StarRating";
import Image from "next/image";

export default function TestimonialsSection() {
  return (
    <Container className={classes.testimonialsSection}>
      <div className={classes.headerWrapper}>
        <div className={classes.headingWrapper}>
          <HeadingSection
            title="What Our Clients Say"
            description="Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs."
          />
        </div>
        <Button label="View All Testimonials" variant="secondary" size="lg" />
      </div>
      <div className={classes.testimonialsWrapper}>
        <Carousel
          slides={testimonialsDummy?.map((item) => (
            <div key={item._id} className={classes.testimonialItem}>
              <StarRating
                rating={item?.rating}
                starDimension="24px"
                starSpacing="10px"
              />
              <div className={classes.testimonialContent}>
                <h3>{item?.title}</h3>
                <p>{item?.text}</p>
              </div>
              <div className={classes.testimonialFooter}>
                <div className={classes.testimonialuserImg}>
                  <Image src={item?.image} alt={item?.name} fill />
                </div>
                <div className={classes.testimonialuserInfo}>
                  <h3>{item?.name}</h3>
                  <p>{item?.location}</p>
                </div>
              </div>
            </div>
          ))}
          showNavigation={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            878: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1312: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        />
      </div>
    </Container>
  );
}

const testimonialsDummy = Array(10)
  .fill(0)
  .map((_, index) => ({
    _id: index + 1,
    name: ["Wade Warren", "John Mans", "Emelie Thomson"][index % 3],
    image: [
      "/images/testimonial-1.png",
      "/images/testimonial-2.png",
      "/images/testimonial-3.png",
    ][index % 3],
    title: "Exceptional Service!",
    text: "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
    rating: 5,
    location: ["USA, California", "USA, Nevada", "USA, California"][index % 3],
  }));
