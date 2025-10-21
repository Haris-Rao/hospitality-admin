"use client";
import { Button } from "@/components/Core/Button";
import { imageUrl } from "@/config/apiUrl";
import { useRef } from "react";
import { Spinner } from "react-bootstrap";
import { AiFillEye } from "react-icons/ai";
import { BiVideo } from "react-icons/bi";
import { FaFileCsv, FaFileWord } from "react-icons/fa";
import { FiUpload } from "react-icons/fi";
import { MdModeEdit, MdPictureAsPdf } from "react-icons/md";
import { RiDeleteBinLine, RiFileExcel2Fill } from "react-icons/ri";
import { toast } from "react-toastify";
import classes from "./AttachmentUpload.module.css";

let docType =
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document";

function AttachmentUpload({
  state,
  setter,
  edit = true,
  onEdit,
  placeholder = "Upload File",
  subPlaceholder = "Maximum file size: 2MB",
  onDelete,
  acceptedTypes = "*",
  background = "var(--main-color)",
  loading = false,
  error,
  errorText,
}) {
  const inputRef = useRef(null);
  const HandleUploadFile = (e) => {
    let fileType = e.target.files[0].type;
    if (fileType?.split("/")[0] == "image") {
      fileType = "image/*";
    }
    const allowedFileTypes = InputUploadType(acceptedTypes);
    if (
      acceptedTypes === "*" ||
      allowedFileTypes?.split(",")?.includes(fileType)
    ) {
      setter(e.target.files[0]);
    } else {
      toast.warn("Invalid file type");
    }
  };
  return (
    <div className={classes.box}>
      {loading && (
        <div className={classes.loading}>
          <Spinner variant="light" size="sm" />
        </div>
      )}
      {state?.name || typeof state == "string" ? (
        <div
          className={classes.csvBox}
          style={{ borderColor: error ? "red" : "var(--main-color)" }}
        >
          <RenderComp state={state} />
          {/* On Hover */}
          <div className={classes.viewBtnBox}>
            <Button
              className={classes.icon}
              onClick={() =>
                window?.open(
                  typeof state == "object"
                    ? URL.createObjectURL(state)
                    : `${imageUrl(state)}`
                )
              }
            >
              <AiFillEye />
            </Button>
          </div>
          {/* On Hover */}

          {edit && (
            <div className={classes.editAndDelete}>
              <Button
                className={classes.icon}
                onClick={() => {
                  onDelete();
                }}
              >
                <RiDeleteBinLine />
              </Button>

              <Button
                className={classes.icon}
                onClick={() => {
                  inputRef.current.click();
                  if (onEdit) {
                    onEdit();
                  }
                }}
              >
                <MdModeEdit />
              </Button>
            </div>
          )}
        </div>
      ) : (
        <div
          className={classes.csvBox}
          onClick={() => {
            edit && inputRef.current.click();
          }}
          style={{ borderColor: error ? "red" : "var(--main-color)" }}
        >
          {edit ? (
            <>
              <FiUpload color={"var(--icon-color)"} size={30} />
              <span className={classes?.uploadText}> {placeholder}</span>
              <span className={classes?.subText}> {subPlaceholder}</span>
            </>
          ) : (
            <FaFileCsv color={"var(--icon-color)"} size={50} />
          )}
        </div>
      )}
      {error && <p className={classes.errorText}>{errorText}</p>}
      <input
        hidden
        type={"file"}
        ref={inputRef}
        onChange={(e) => HandleUploadFile(e)}
        accept={InputUploadType(acceptedTypes)}
      />
    </div>
  );
}

export default AttachmentUpload;

function RenderComp({ state }) {
  return (
    <>
      {((typeof state == "object"
        ? ["png", "jpeg", "jpg", "svg"].includes(state?.name?.split(".")[1])
        : ["png", "jpeg", "svg+xml", "jpg"].includes(state?.split(".")[1])) && (
        <img
          className={classes.img}
          src={
            typeof state == "object"
              ? URL.createObjectURL(state)
              : `${imageUrl(state)}`
          }
        />
      )) ||
        ((typeof state == "object"
          ? ["doc", "docx"].includes(state?.name?.split(".")[1])
          : state?.split(".")[1] == "docx") && (
          <FaFileWord className={classes.typeIcon} size={35} />
        )) ||
        ((typeof state == "object"
          ? ["xlsx"]?.includes(state?.name?.split(".")[1])
          : state?.split(".")[1] == "xlsx") && (
          <RiFileExcel2Fill className={classes.typeIcon} size={35} />
        )) ||
        ((typeof state == "object"
          ? ["pdf"]?.includes(state?.name?.split(".")[1])
          : state?.split(".")[1] == "pdf") && (
          <MdPictureAsPdf className={classes.typeIcon} size={35} />
        )) ||
        ((typeof state == "object"
          ? ["csv"]?.includes(state?.name?.split(".")[1])
          : state?.split(".")[1] == "csv") && (
          <FaFileCsv className={classes.typeIcon} size={35} />
        )) ||
        ((typeof state == "object"
          ? ["mp4"]?.includes(state?.name?.split(".")[1])
          : state?.split(".")[1] == "mp4") && (
          <BiVideo className={classes.typeIcon} size={35} />
        ))}
    </>
  );
}

const InputUploadType = (types) => {
  let modifiedTypes = types.split(",");
  let finalTypes = [];
  for (let key in modifiedTypes) {
    switch (modifiedTypes[key]) {
      case "image":
        finalTypes?.push("image/*");
        break;
      case "video":
        finalTypes?.push("video/*");
        break;
      case "pdf":
        finalTypes?.push("application/pdf");
        break;
      case "docx":
        finalTypes?.push(docType);
        break;
      default:
        finalTypes?.push("*");
        break;
    }
  }
  return finalTypes.join(",");
};
