"use client";
import React, { useRef } from "react";
import { MdUpload, MdModeEdit, MdClose } from "react-icons/md";
import { RiImageAddFill } from "react-icons/ri";
import { RiDeleteBinLine } from "react-icons/ri";
import classes from "./UploadImageBox.module.css";
import { Label } from "../Label";
import { imageUrl } from "@/config/apiUrl";
import { Spinner } from "react-bootstrap";

function UploadImageBox({
  state,
  setter,
  label,
  edit = true,
  onDelete,
  onClose,
  isCloseable,
  hideDeleteIcon = false,
  imgClass,
  containerClass = "",
  onEdit,
  uploading = false,
}) {
  const inputRef = useRef(null);
  return (
    <>
      {label && <Label>{label}</Label>}

      <div className={`${classes.box} ${containerClass}`}>
        <div className={classes.uploadImageBox}>
          {/* Close Icon */}
          {isCloseable && (
            <span className={classes.closeIcon} onClick={onClose}>
              <MdClose />
            </span>
          )}
          {state?.name || typeof state == "string" ? (
            <div className={classes.imageUploaded}>
              <img
                src={
                  typeof state == "object"
                    ? URL.createObjectURL(state)
                    : imageUrl(state)
                }
                className={imgClass ? imgClass : ""}
                alt="New Product"
              />
              <div className={classes.editAndDelete}>
                {edit && !uploading && (
                  <>
                    {hideDeleteIcon && (
                      <div
                        className={classes.icon}
                        onClick={() => !uploading && onDelete(state)}
                      >
                        <RiDeleteBinLine />
                      </div>
                    )}
                    <div
                      className={classes.icon}
                      onClick={() => {
                        if (uploading) return;
                        inputRef.current.click();
                        onEdit && onEdit();
                      }}
                    >
                      <MdModeEdit />
                    </div>
                  </>
                )}
              </div>
            </div>
          ) : (
            <div className={classes.uploadBox}>
              <RiImageAddFill size={50} color="var(--text-color)" />
              <div
                className={classes.uploadIcon}
                onClick={() => inputRef.current.click()}
              >
                <MdUpload />
              </div>
            </div>
          )}
          {uploading && (
            <div className={classes.loadingContainer}>
              <div className={classes.loading}>
                <Spinner size="lg" variant="light" />
              </div>
            </div>
          )}
        </div>

        <input
          hidden
          type={"file"}
          ref={inputRef}
          onChange={(e) => setter(e.target.files[0])}
        />
      </div>
    </>
  );
}

export default UploadImageBox;
