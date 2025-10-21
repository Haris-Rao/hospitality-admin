"use client";
import { Input } from "@/components/Core/Input";
import MultiFileUpload from "@/components/Core/MultiFileUpload";
import { TextArea } from "../Core/TextArea";
import { Button } from "@/components/Core/Button";
import { IoTrash } from "react-icons/io5";
import classes from "./RoomForm.module.css";

const RoomForm = ({
  roomData,
  onRoomChange,
  onRemove,
  roomIndex,
  showRemoveButton = false,
}) => {
  const handleFieldChange = (field, value) => {
    onRoomChange(roomIndex, field, value);
  };

  const handleFilesChange = (files) => {
    // Ensure files is always an array
    const filesArray = Array.isArray(files) ? files : [];
    onRoomChange(roomIndex, "images", filesArray);
  };

  return (
    <div className={classes.roomFormContainer}>
      <div className={classes.formHeader}>
        <h3>Room #{roomIndex + 1}</h3>
        {showRemoveButton && (
          <Button
            variant="danger"
            size="sm"
            label="Remove"
            icon={<IoTrash size={14} />}
            onClick={onRemove}
          />
        )}
      </div>

      <div className={classes.roomForm}>
        {/* Upload Pictures Section */}
        <div className={classes.uploadSection}>
          <MultiFileUpload
            label="Upload Pictures"
            files={roomData?.images || []}
            setFiles={handleFilesChange}
            maxFiles={5}
            acceptTypes={{
              "image/*": [".png", ".jpg", ".jpeg"],
            }}
            text="Upload Image"
            subText="Maximum file size: 2 MB"
            uploadBoxClass={classes.uploadBox}
          />
        </div>

        {/* Details Input Fields */}
        <div className={classes.detailsSectionRow}>
          <Input
            label="Title"
            placeholder="Enter"
            value={roomData?.title || ""}
            setter={(value) => handleFieldChange("title", value)}
            variant="secondary"
          />

          <Input
            label="SIP Extension"
            placeholder="Enter"
            value={roomData?.sipExtension || ""}
            setter={(value) => handleFieldChange("sipExtension", value)}
            variant="secondary"
          />

          <Input
            label="Room Number"
            placeholder="Enter"
            value={roomData?.roomNumber || ""}
            setter={(value) => handleFieldChange("roomNumber", value)}
            variant="secondary"
          />
        </div>

        {/* Description Section */}
        <TextArea
          label="Description"
          placeholder="Enter Description"
          value={roomData?.description || ""}
          setter={(value) => handleFieldChange("description", value)}
          rows={5}
          variant="secondary"
        />
      </div>
    </div>
  );
};

export default RoomForm;
