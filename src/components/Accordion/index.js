"use client";
import Accordion from "react-bootstrap/Accordion";
import classes from "./Accordion.module.css";

function AccordionComponent({ data }) {
  return (
    <Accordion defaultActiveKey="0" className={classes.accordionRoot}>
      {data &&
        data.map((item, index) => (
          <Accordion.Item eventKey={index.toString()} key={index}>
            <Accordion.Header>{item?.question}</Accordion.Header>
            <Accordion.Body>
              <div className={classes.accordionSeparator} />
              {item?.answer}
            </Accordion.Body>
          </Accordion.Item>
        ))}
    </Accordion>
  );
}

export default AccordionComponent;
