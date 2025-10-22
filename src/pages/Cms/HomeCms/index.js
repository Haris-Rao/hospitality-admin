import React, { useState } from "react";
import classes from "./HomeCms.module.css";
import UploadImageBox from "@/components/Core/UploadImageBox";
import { Input } from "@/components/Core/Input";
import { TextArea } from "@/components/Core/TextArea";
import CmsSeparator from "@/components/CmsSeparator";
import { Button } from "@/components/Core/Button";

export default function HomeCms() {
  const [secOne, setSecOne] = useState({
    image: null,
    heading: "",
    description: "",
    cards: ["", "", "", ""],
  });
  const [secTwo, setSecTwo] = useState({
    image: null,
    heading: "",
    description: "",
    cards: ["", "", "", ""],
  });
  return (
    <>
      <CmsSeparator first>Section#1</CmsSeparator>
      <div className={classes.section}>
        <div>
          <UploadImageBox
            label="Image"
            state={secOne?.image}
            setter={(value) => setSecOne({ ...secOne, image: value })}
          />
        </div>
        <Input
          label="Heading"
          placeholder="Enter heading"
          state={secOne?.heading}
          setter={(value) => setSecOne({ ...secOne, heading: value })}
        />
        <TextArea
          label="Description"
          placeholder="Enter description"
          state={secOne?.description}
          setter={(value) => setSecOne({ ...secOne, description: value })}
        />
        <div className={classes.fourGrid}>
          {secOne?.cards.map((card, index) => (
            <div key={index}>
              <TextArea
                label={`Card ${index + 1}`}
                placeholder={`Enter`}
                state={card}
                setter={(value) => (prev) => {
                  const updatedCards = [...prev.cards];
                  updatedCards[index] = value;
                  return { ...prev, cards: updatedCards };
                }}
              />
            </div>
          ))}
        </div>
      </div>
      <CmsSeparator>Section#2</CmsSeparator>
      <div className={classes.section}>
        <div>
          <UploadImageBox
            label="Image"
            state={secTwo?.image}
            setter={(value) => setSecTwo({ ...secTwo, image: value })}
          />
        </div>
        <Input
          label="Heading"
          placeholder="Enter heading"
          state={secTwo?.heading}
          setter={(value) => setSecTwo({ ...secTwo, heading: value })}
        />
        <TextArea
          label="Description"
          placeholder="Enter description"
          state={secTwo?.description}
          setter={(value) => setSecTwo({ ...secTwo, description: value })}
        />
        <div className={classes.fourGrid}>
          {secTwo?.cards.map((card, index) => (
            <div key={index}>
              <TextArea
                label={`Card ${index + 1}`}
                placeholder={`Enter`}
                state={card}
                setter={(value) => (prev) => {
                  const updatedCards = [...prev.cards];
                  updatedCards[index] = value;
                  return { ...prev, cards: updatedCards };
                }}
              />
            </div>
          ))}
        </div>
      </div>
      <div className={classes.btnsWrapper}>
        <Button label="Cancel" variant="dark" onClick={() => {}} />
        <Button label="Save Changes" onClick={() => {}} />
      </div>
    </>
  );
}
