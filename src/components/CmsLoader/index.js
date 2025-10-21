import React from "react";
import classes from "./CmsLoader.module.css";
import Skeleton from "../Skeleton";

export default function CmsLoader({ loaders = [] }) {
  const renderSkeletonItem = (type, index) => {
    switch (type) {
      case "separator":
        return <Skeleton height={30} />;
      case "imageBox":
        return (
          <div key={`loader-${index}`} className={classes.fields}>
            <Skeleton height={24} width="130px" />
            <Skeleton height={200} />
          </div>
        );
      case "input":
        return (
          <div key={`loader-${index}`} className={classes.fields}>
            <Skeleton height={24} width="130px" />
            <Skeleton height={46} />
          </div>
        );
      case "textarea":
        return (
          <div key={`loader-${index}`} className={classes.fields}>
            <Skeleton height={24} width="130px" />
            <Skeleton height={160} />
          </div>
        );
      case "button":
        return <Skeleton key={`loader-${index}`} height={44} width="130px" />;
      default:
        return null;
    }
  };

  return (
    <>
      {loaders.map((type, index) => {
        if (Array.isArray(type)) {
          return (
            <div key={`grid-${index}`} className={classes.gridFields}>
              {type.map((nestedType, nestedIndex) =>
                renderSkeletonItem(nestedType, `${index}-${nestedIndex}`)
              )}
            </div>
          );
        } else {
          return renderSkeletonItem(type, index);
        }
      })}
    </>
  );
}
