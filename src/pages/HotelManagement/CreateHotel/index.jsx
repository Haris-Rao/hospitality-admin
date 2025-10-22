"use client";

import React, { useState } from "react";
import classes from "./CreateHotel.module.css";
import SideBarSkeleton from "@/components/Core/SideBarSkeleton";
import PageHeader from "@/components/PageHeader";
import UploadImageBox from "@/components/Core/UploadImageBox";
import { Input } from "@/components/Core/Input";
import { Button } from "@/components/Core/Button";
import AttachmentUpload from "@/components/Core/AttachmentUpload";

function CreateHotel() {
  const [formData, setFormData] = useState({
    image: null,
    Hotel_ID: "",
    hotel_name: "",
    location: "",
    email: "",
    phone: "",
    website: "",
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <SideBarSkeleton>
      <div className={classes.mainContainer}>
        <PageHeader
          title="Create Hotel"
          breadcrumbs={[
            { label: "Hotel Management", value: "/hotel-management" },
            { label: "Create Hotel", value: "/hotel-management/create" },
          ]}
        />

        <div className={classes.formSection}>
          <AttachmentUpload
            state={formData.image}
            setter={(value) => handleInputChange("image", value)}
            placeholder="Upload Image"
            subPlaceholder="Maximum file size: 2 MB"
            acceptedTypes="image"
            background="var(--secondary-color)"
            variant="secondary"
            onDelete={() => handleInputChange("image", null)}
          />
          <Input
            label="Hotel ID"
            value={formData.Hotel_ID}
            setter={(value) => handleInputChange("Hotel_ID", value)}
          />
          <Input
            label="Hotel Name"
            value={formData.hotel_name}
            setter={(value) => handleInputChange("hotel_name", value)}
          />
          <Input
            label="Location"
            value={formData.location}
            setter={(value) => handleInputChange("location", value)}
          />
          <Input
            label="Email"
            value={formData.email}
            setter={(value) => handleInputChange("email", value)}
          />
          <Input
            label="Phone"
            value={formData.phone}
            setter={(value) => handleInputChange("phone", value)}
          />
          <Input
            label="Website"
            value={formData.website}
            setter={(value) => handleInputChange("website", value)}
          />
        </div>
        <div className={classes.buttonSection}>
          <Button variant="dark" label="Cancel" />
          <Button variant="primary" label="Create Hotel" />
        </div>
      </div>
    </SideBarSkeleton>
  );
}

export default CreateHotel;
