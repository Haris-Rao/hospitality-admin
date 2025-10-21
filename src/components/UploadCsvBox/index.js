import React, { useRef } from "react";
import { MdModeEdit } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { FiEye } from "react-icons/fi";
import classes from "./UploadCsvBox.module.css";
import { FaFileUpload, FaFileCsv, FaUpload } from "react-icons/fa";
import csvDownload from "json-to-csv-export";

function UploadCsvBox({
  state,
  setter,
  edit = true,
  onDelete,
  className = "",
  i,
  isJson = false,
}) {
  const inputRef = useRef(null);
  const HandleUploadFile = (e) => {
    setter(e.target.files[0]);
  };
  const dataToConvert = {
    data: state,
    filename: `example`,
    delimiter: ",",
  };
  return (
    <div className={`${classes.box} ${className}`}>
      {state?.name || isJson ? (
        <div className={classes.csvBox}>
          <FaFileCsv color={"#1D6F42"} size={60} />
          <div className={classes.editAndDelete}>
            {(edit || isJson) && (
              <>
                <div
                  className={`${classes.icon} ${classes.viewIcon}`}
                  onClick={() => {
                    !state?.name
                      ? csvDownload(dataToConvert)
                      : window.open(URL.createObjectURL(state), "_blank");
                  }}
                >
                  <FiEye />
                </div>
                <div className={classes.editAndDeleteBtns}>
                  <div
                    className={[classes.icon, classes.delete_btn].join(" ")}
                    onClick={onDelete}
                  >
                    <RiDeleteBinLine />
                  </div>
                  <div
                    className={[classes.icon, classes.edit_btn].join(" ")}
                    onClick={() => inputRef.current.click()}
                  >
                    <MdModeEdit />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      ) : (
        <div
          className={classes.csvBox}
          onClick={() => {
            edit && inputRef.current.click();
          }}
        >
          {edit ? (
            <div className={classes.section}>
              <div className={classes.fileUploadOptions}>
                <FaUpload size={30} color={"#000000b5"} />
                <p>Click to select file</p>
              </div>
              <button
              // onClick={() => {
              //   edit && inputRef.current.click();
              // }}
              >
                {"Upload Files"}
              </button>
            </div>
          ) : (
            <FaFileCsv color={"var(--icon-color)"} size={50} />
          )}
        </div>
      )}
      {/* Input For Image Upload */}
      <input
        hidden
        type={"file"}
        ref={inputRef}
        onChange={(e) => HandleUploadFile(e)}
      />
    </div>
  );
}

export default UploadCsvBox;
