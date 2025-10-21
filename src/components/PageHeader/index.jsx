"use client";

import { LuListFilter } from "react-icons/lu";
import BreadCrumbComponent from "../BreadCrumbComponent";
import { Button } from "../Core/Button";
import PopperComponent from "../Core/PopperComponent";
import SearchInput from "../Core/SearchInput";
import classes from "./PageHeader.module.css";
import { useMediaQuery } from "@/customHooks/useMediaQuery";
export default function PageHeader({
  title,
  breadcrumbs = [],
  buttonLabel = "",
  buttonIcon = null,
  search = "",
  setSearch = () => {},
  showSearch = false,
  variant = "primary",
  leftIcon = null,
  onClick = () => {},
  showFilter = false,
  children,
}) {
  const isMobile = useMediaQuery("(max-width: 767px)");

  return (
    <div className={classes.pageHeader}>
      <div className={classes.pageHeaderLeft}>
        <h2>{title}</h2>
        {breadcrumbs.length > 0 && <BreadCrumbComponent data={breadcrumbs} />}
      </div>
      <div className={classes.pageHeaderRight}>
        {showSearch && (
          <SearchInput variant="secondary" value={search} setter={setSearch} />
        )}
        {buttonLabel && (
          <Button
            variant={variant}
            size="md"
            label={buttonLabel}
            rightIcon={buttonIcon}
            leftIcon={leftIcon}
            onClick={onClick}
          />
        )}
        {showFilter && (
          <PopperComponent
            popperInsideElement={children}
            align={isMobile ? "start" : "end"}
            children={
              <div className={classes.filterButton}>
                <Button
                  label="Filters"
                  variant="white-bordered"
                  leftIcon={<LuListFilter />}
                />
              </div>
            }
          />
        )}
      </div>
    </div>
  );
}
