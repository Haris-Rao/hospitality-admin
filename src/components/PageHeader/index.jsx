"use client";

import { useMediaQuery } from "@/customHooks/useMediaQuery";
import { LuListFilter } from "react-icons/lu";
import { Button } from "../Core/Button";
import PopperComponent from "../Core/PopperComponent";
import SearchInput from "../Core/SearchInput";
import classes from "./PageHeader.module.css";
import BreadCrumbComponent from "../BreadCrumbComponent";
import { cn } from "@/helper/HelperFunction";
export default function PageHeader({
  title,
  breadcrumbs = [],
  buttonLabel = "",
  buttonIcon = null,
  search = "",
  setSearch = () => {},
  showSearch = false,
  className = "",
  variant = "primary",
  leftIcon = null,
  onClick = () => {},
  showFilter = false,
  children,
}) {
  const isMobile = useMediaQuery("(max-width: 767px)");

  return (
    <div className={cn(classes.pageHeader, className)}>
      <div className={classes.pageHeaderLeft}>
        <h2>{title}</h2>
        {breadcrumbs.length > 0 && <BreadCrumbComponent data={breadcrumbs} />}
      </div>
      <div className={classes.pageHeaderRight}>
        {showSearch && (
          <SearchInput variant="secondary" value={search} setter={setSearch} />
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
      </div>
    </div>
  );
}
