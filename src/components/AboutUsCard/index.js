import Image from "next/image";
import HeadingSection from "../HeadingSection";
import classes from "./AboutUsCard.module.css";

function AboutUsCard({ variant = "left", data = obj }) {
  return (
    <div
      className={[
        classes.featuresSection,
        variant == "left"
          ? classes.featuresSectionleft
          : classes.featuresSectionright,
      ].join(" ")}
    >
      {/* Left side - Features list */}
      <div className={classes.left}>
        <HeadingSection title={data.title} description={data.description} />
      </div>

      <div className={classes.right}>
        <div className={classes.imageWrapper}>
          <Image src={data.image} alt="Hero Image" layout="fill" />
        </div>
      </div>
    </div>
  );
}

export default AboutUsCard;
const obj = {
  title: "About Us",
  description:
    "We are a team of developers who are passionate about creating software that helps people work together more efficiently.",
  image: "/images/features.png",
};
