"use client";
import React, { useState } from "react";
import classes from "./PricingSection.module.css";
import { Container } from "react-bootstrap";
import HeadingSection from "../HeadingSection";
import TabsComponent from "../Core/TabsComponent";
import PriceCard from "../PriceCard";

export default function PricingSection() {
  const [tab, setTab] = useState({ value: "monthly", label: "Monthly" });
  return (
    <Container>
      <div className={classes.priceCardContainer}>
        <div className={classes.priceCardContainerHeading}>
          <HeadingSection
            title="Try for free and upgrade to the plan that suits you."
            btnVariant="dark"
            tag={"Try for free"}
            description="Explore our flexible pricing options and find the one that best suits your cryptocurrency management needs."
          />
          <TabsComponent
            size="lg"
            value={tab}
            data={[
              { label: "Monthly", value: "monthly" },
              { label: "Yearly", value: "yearly" },
            ]}
            onClick={setTab}
          />
        </div>
        <PriceCard />
        <PriceCard />
      </div>
    </Container>
  );
}
