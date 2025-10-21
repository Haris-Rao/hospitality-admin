import { Container } from "react-bootstrap";
import { FiClock, FiEye, FiUsers, FiZap } from "react-icons/fi";
import GridBorderCards from "../GridBorderCards";
import HeadingSection from "../HeadingSection";
import classes from "./TeamFeatureSection.module.css";

function TeamFeaturesSection() {
  const features = [
    {
      id: 1,
      title: "Unified View",
      description:
        "Merge multiple asset drawings into a single, seamless view—no more juggling between PDFs or fragmented sheets. Keep everything in one place for easier collaboration and faster decision",
      icon: FiEye,
    },
    {
      id: 2,
      title: "Real-Time Collaboration",
      description:
        "Allow your team to work together in real-time. Review and share drawings instantly, ensuring that everyone is on the same page, no matter where they are.",
      icon: FiUsers,
    },
    {
      id: 3,
      title: "Smart Merging",
      description:
        "Our smart merging algorithm automatically combines your asset files into one clean drawing, eliminating the need for manual adjustments and improving accuracy.",
      icon: FiZap,
    },
    {
      id: 4,
      title: "Time Efficiency",
      description:
        "Save valuable time and reduce errors with an intuitive, streamlined workflow. Focus more on designing and less on managing fragmented assets.",
      icon: FiClock,
    },
  ];

  return (
    <Container>
      <section className={classes.teamFeaturesSection}>
        <HeadingSection
          title="Powerful Features Designed For Your Team"
          description="Stitchify comes packed with innovative features that make your design and construction workflow seamless. Explore some of our most popular tools below."
        />
        <GridBorderCards features={features} />
      </section>
    </Container>
  );
}

export default TeamFeaturesSection;
