import { useEffect, useState } from "react";
import classes from "./NewsTicker.module.css"; // Assuming you have a CSS file for styling

export const NewsTicker = ({ slides = [""] }) => {
  const [key, setKey] = useState(0);
  const [text, setText] = useState(slides[0]);
  useEffect(() => {
    const handleAnimationIteration = () => {
      const nextKey = key + 1 >= slides.length ? 0 : key + 1;
      setKey(nextKey);
      setText(slides[nextKey]);
    };

    const marqueeElement = document.querySelector(`.${classes.marquee}`);
    marqueeElement.addEventListener(
      "animationiteration",
      handleAnimationIteration
    );

    // Clean up the event listener
    return () => {
      marqueeElement.removeEventListener(
        "animationiteration",
        handleAnimationIteration
      );
    };
  }, [key, slides]);

  return (
    <div className={classes.marqueeContainer}>
      <div className={classes.marquee}>{text?.text} </div>
    </div>
  );
};
