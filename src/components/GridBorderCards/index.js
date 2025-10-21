import { FiClock, FiEye, FiUsers, FiZap } from "react-icons/fi";
import classes from "./GridBorderCards.module.css";
import parse from "html-react-parser";

function GridBorderCards({ features = _defaultFeatures, variant = "md" }) {
  return (
    <div className={classes.wrapperGrid}>
      <div className={classes.featuresGrid} data-variant={variant}>
        <FeatureCard key={features[0].id} feature={features[0]} index={0} />
        <FeatureCard key={features[1].id} feature={features[1]} index={1} />
        <div className={classes.fullWidth}></div>
        <FeatureCard key={features[2].id} feature={features[2]} index={2} />
        <FeatureCard key={features[3].id} feature={features[3]} index={3} />
      </div>
    </div>
  );
}

export default GridBorderCards;

const FeatureCard = ({ feature, index }) => {
  const IconComponent = feature.icon;
  return (
    <div
      key={feature.id}
      className={[
        classes.featureCard,
        index % 2 === 0 && classes.featureCard__even,
      ].join(" ")}
    >
      <div className={classes.featureHeader}>
        {IconComponent && (
          <div className={classes.featureIcon}>
            <IconComponent />
          </div>
        )}
        {feature.title && (
          <h3 className={classes.featureTitle}>{feature.title}</h3>
        )}
      </div>
      <div className={classes.featureContent}>
        {parse(feature.description || "")}
      </div>
    </div>
  );
};
const _defaultFeatures = [
  {
    id: 1,
    title: "Unified View",
    description: ` <p>
        "Merge multiple asset drawings into a single, seamless view—no more
        juggling between PDFs or fragmented sheets. Keep everything in one place
        for easier collaboration and faster decision",
      </p>  `,
    icon: FiEye,
  },
  {
    id: 2,
    title: "Real-Time Collaboration",
    description: ` <p>
        "Allow your team to work together in real-time. Review and share drawings
        instantly, ensuring that everyone is on the same page, no matter where
        they are.",
      </p>  `,
    icon: FiUsers,
  },
  {
    id: 3,
    title: "Smart Merging",
    description: ` <p>
        "Our smart merging algorithm automatically combines your asset files into
        one clean drawing, eliminating the need for manual adjustments and
        improving accuracy.",
      </p>  `,
    icon: FiZap,
  },
  {
    id: 4,
    title: "Time Efficiency",
    description: ` <p>
        "Save valuable time and reduce errors with an intuitive, streamlined
        workflow. Focus more on designing and less on managing fragmented
        assets.",
      </p>  `,
    icon: FiClock,
  },
];
