"use client"
import { cn } from "@/helper/HelperFunction";
import classes from "./StepperHeader.module.css"
import { BiChevronRight } from "react-icons/bi";

export default function StepperHeader({ currentStep, tabs = [], stepperHeaderClass }) {
  return (
    <div className={cn(classes.container, stepperHeaderClass)}>
      <div className={classes.wrapper}>
        <nav className={classes.navigation}>
          {tabs?.map((tab, index) => (
            <div key={index} className={classes.stepItem}>
              <span className={cn(classes.stepText, index <= currentStep ? classes.active : classes.inactive)}>
                {tab}
              </span>
              {index < tabs.length - 1 && (
                <BiChevronRight
                  className={cn(classes.chevron, index < currentStep ? classes.chevronActive : classes.chevronInactive)}
                  size={25}
                />
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  )
}
