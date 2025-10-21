import { FiEye, FiFileText, FiLink, FiTrendingUp } from "react-icons/fi";
import classes from "./FeatureSection.module.css";
import Image from "next/image";
import { TbDeviceTvFilled } from "react-icons/tb";
import { FaFile } from "react-icons/fa6";
import { FaMousePointer } from "react-icons/fa";

function FeaturesSection({ features = [] }) {
  // Default features if none provided
  const defaultFeatures = [
    {
      id: 1,
      title: "Easy Integration",
      description: "Works seamlessly with your existing tools and workflows.",
      icon: TbDeviceTvFilled,
    },
    {
      id: 2,
      title: "Smart File Merging",
      description:
        "Automatically combines files into one, reducing manual work.",
      icon: FaFile,
    },
    {
      id: 3,
      title: "Unified View",
      description: "All assets in one continuous workspace, no more toggling.",
      icon: FaMousePointer,
    },
    {
      id: 4,
      title: "Seamless Integration",
      description:
        "Connect effortlessly with your existing tools and workflows.",
      icon: TbDeviceTvFilled,
    },
  ];

  const featuresToRender = features.length > 0 ? features : defaultFeatures;

  return (
    <div className={classes.featuresSection}>
      {/* Left side - Features list */}
      <div className={classes.left}>
        {featuresToRender.map((feature) => {
          const IconComponent = feature.icon;
          return (
            <div key={feature.id} className={classes.featureItem}>
              <div className={classes.featureIcon}>
                <IconComponent />
              </div>
              <div className={classes.featureContent}>
                <h3 className={classes.featureTitle}>{feature.title}</h3>
                <p className={classes.featureDescription}>
                  {feature.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className={classes.right}>
        <div className={classes.imageWrapper}>
          <Image src={"/images/features.png"} alt="Hero Image" layout="fill" />
        </div>
      </div>
    </div>
  );
}

export default FeaturesSection;
