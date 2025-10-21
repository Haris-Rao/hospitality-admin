"use client";

import { useRouter } from "next/navigation";
import AccordionComponent from "../Accordion";
import { Button } from "../Core/Button";
import { FancyHeadingWithDescription as H } from "../FancyHeading";
import classes from "./FAQSection.module.css";

export default function FAQSection({ heading, description, data }) {
  const router = useRouter();
  return (
    <div className={classes.faqSection}>
      <H
        center={true}
        as="h2"
        className={classes.sectionHeading}
        description={description}
      >
        {heading && heading}
      </H>
      <div className={classes.faqSection__wrapper}>
        <AccordionComponent data={data?.slice(0, 6)} />
      </div>
      <div className={classes.faqSection__button}>
        <Button
          label="View All Questions"
          onClick={() => router.push("/faqs")}
        />
      </div>
    </div>
  );
}
