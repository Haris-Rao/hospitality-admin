import React from "react";
import styles from "./PriceCard.module.css";
import { Button } from "../Core/Button";
import { IoIosCheckmark } from "react-icons/io";
import { cn } from "@/helper/HelperFunction";

// Data object for price card
const priceCardData = {
  title: "Basic Plan",
  price: "$10",
  period: "/month",
  description:
    "Lorem Ipsum passages, and more recently with desktop publishing software like Lorem Ipsum",
  features: [
    "Lorem Ipsum passages, and more recently with desktop publishing software.",
    "Lorem Ipsum passages, and more.",
    "Lorem Ipsum passages, and more.",
    "Lorem Ipsum passages, and more.",
    "Lorem Ipsum passages, and more.",
    "Lorem Ipsum passages, and more.",
  ],
  icon: "T", // You can replace this with an actual icon component
  isPopular: false,
};

function PriceCard({
  data = priceCardData,
  onButtonClick = () => {},
  variant = "primary",
  status = "inactive",
  buttonText = "Book a Demo",
}) {
  const handleButtonClick = () => {
    if (onButtonClick) {
      onButtonClick(data);
    }
  };

  return (
    <div
      className={cn(
        styles.priceCard,
        status === "active" && styles.activePriceCard,
        variant === "secondary" && styles.secondaryPriceCard
      )}
    >
      {/* Header Section */}
      <div className={styles.header}>
        <h3 className={styles.title}>{data.title}</h3>
        {data.isPopular && <span className={styles.popularBadge}>Popular</span>}
      </div>

      {/* Price Section */}
      <div className={styles.priceSection}>
        <div className={styles.priceContainer}>
          <span className={styles.price}>{data.price}</span>
          <span className={styles.period}>{data.period}</span>
        </div>
        <p className={styles.description}>{data.description}</p>
      </div>

      {/* Button Section */}
      <div className={styles.buttonSection}>
        <Button
          variant={status === "active" ? "secondary" : "primary"}
          onClick={handleButtonClick}
        >
          {buttonText}
        </Button>
      </div>

      {/* Features Section */}
      {variant !== "secondary" && (
        <div className={styles.featuresSection}>
          <div className={styles.separator}>
            <span className={styles.separatorText}>WHAT YOU WILL GET</span>
          </div>
          <ul className={styles.featuresList}>
            {data.features.map((feature, index) => (
              <li key={index} className={styles.featureItem}>
                <span className={styles.checkmark}>
                  <IoIosCheckmark size={20} />
                </span>
                <span className={styles.featureText}>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default PriceCard;
