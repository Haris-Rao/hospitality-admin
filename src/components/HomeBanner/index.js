import { Container } from "react-bootstrap";
import classes from "./HomeBanner.module.css";
import parse from "html-react-parser";
import Image from "next/image";
import { cn } from "@/helper/HelperFunction";

export default function HomeBanner({
  heading,
  description,
  lightImage = "/images/banner_light.png",
  darkImage = "/images/banner_dark.png",
}) {
  return (
    <section className={classes.bannerContainer} id="home">
      <div className={classes.bannerBackground}>
        <Container className={classes.container}>
          <div className={classes.content}>
            <div className={classes.__heading_description}>
              <h1>
                {heading
                  ? parse(`${heading}`)
                  : parse(
                      "Simplify <strong>Content Creation</strong> and Scheduling"
                    )}
              </h1>
              <p>
                {description
                  ? parse(`${description}`)
                  : "Create, manage, and schedule your posts effortlessly with Posting Notes. Keep your content organized in drafts, schedule it for later, and publish when you're ready."}
              </p>
            </div>
          </div>
          {lightImage && (
            <div className={cn(classes.image__wrapper, classes.lightImage)}>
              <Image src={lightImage} alt="Banner Background" layout="fill" />
            </div>
          )}
          {darkImage && (
            <div className={cn(classes.image__wrapper, classes.darkImage)}>
              <Image src={darkImage} alt="Banner Background" layout="fill" />
            </div>
          )}
        </Container>
        <div className={classes.gridWrapper}></div>
      </div>
    </section>
  );
}
