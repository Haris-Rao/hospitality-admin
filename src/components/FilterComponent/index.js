"use client";

import { roomOptions } from "@/constant/DummyData";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { Button } from "../Core/Button";
import DateInput from "../Core/DateInput";
import TimeInput from "../Core/TimeInput";
import DropdownSelection from "../DropdownSelection";
import classes from "./FilterComponent.module.css";

export default function FilterComponent({
  onApplyFilters,
  onResetFilters,
  showCloseButton = false,
}) {
  const [filters, setFilters] = useState({
    dateFrom: new Date(),
    dateTo: new Date(),
    timeFrom: new Date(),
    timeTo: new Date(),
    roomNumber: "",
    selectedRoom: null,
  });

  const handleResetFilters = () => {
    setFilters({
      dateFrom: new Date(),
      dateTo: new Date(),
      timeFrom: new Date(),
      timeTo: new Date(),
      roomNumber: "",
      selectedRoom: null,
    });
    if (onResetFilters) {
      onResetFilters();
    }
  };

  const handleApplyFilters = () => {
    if (onApplyFilters) {
      onApplyFilters(filters);
    }
  };

  return (
    <div className={classes.filterContainer}>
      <div className={classes.filterHeader}>
        <h3>Filters</h3>
        {showCloseButton && (
          <IoMdClose
            size={20}
            className={classes.closeButton}
            color={"var(--text-color)"}
          />
        )}
      </div>

      <div className={classes.filterContent}>
        <div className={classes.filterRow}>
          <DateInput
            label="Date From"
            value={filters?.dateFrom}
            setValue={(date) =>
              setFilters((prev) => ({ ...prev, dateFrom: date }))
            }
          />
          <DateInput
            label="Date To"
            value={filters?.dateTo}
            setValue={(date) =>
              setFilters((prev) => ({ ...prev, dateTo: date }))
            }
          />
        </div>
        <div className={classes.filterRow}>
          <TimeInput
            label="Time From"
            value={filters?.timeFrom}
            setValue={(time) =>
              setFilters((prev) => ({ ...prev, timeFrom: time }))
            }
          />
          <TimeInput
            label="Time To"
            value={filters?.timeTo}
            setValue={(time) =>
              setFilters((prev) => ({ ...prev, timeTo: time }))
            }
          />
        </div>

        <DropdownSelection
          label="Select Room"
          options={roomOptions}
          value={filters?.selectedRoom}
          onChange={(selectedRoom) =>
            setFilters((prev) => ({
              ...prev,
              selectedRoom: selectedRoom,
            }))
          }
          placeholder="Search rooms..."
        />
      </div>

      {/* Action Buttons */}
      <div className={classes.filterActions}>
        <Button
          variant="white-bordered"
          label="Reset"
          onClick={handleResetFilters}
          className={classes.resetButton}
        />
        <Button
          variant="primary"
          label="Apply Filters"
          onClick={handleApplyFilters}
          className={classes.applyButton}
        />
      </div>
    </div>
  );
}
