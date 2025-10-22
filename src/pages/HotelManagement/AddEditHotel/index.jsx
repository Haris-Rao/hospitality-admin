"use client";

import AttachmentUpload from "@/components/Core/AttachmentUpload";
import { Button } from "@/components/Core/Button";
import { Input } from "@/components/Core/Input";
import SideBarSkeleton from "@/components/Core/SideBarSkeleton";
import PageHeader from "@/components/PageHeader";
import { useState } from "react";
import classes from "./AddEditHotel.module.css";
import MultiFileUpload from "@/components/Core/MultiFileUpload";
import { useParams } from "react-router-dom";

function AddEditHotel() {
  const { id } = useParams();
  const isEdit = id;
  const [formData, setFormData] = useState({
    image: [],
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
          title={isEdit ? "Edit Hotel" : "Create Hotel"}
          breadcrumbs={[
            { label: "Hotel Management", value: "/hotel-management" },
            isEdit
              ? { label: "Edit Hotel", value: `/hotel-management/edit/${id}` }
              : { label: "Create Hotel", value: "/hotel-management/create" },
          ]}
        />

        <div className={classes.formSection}>
          <MultiFileUpload
            label="Upload Pictures"
            files={formData.image}
            setFiles={(value) => handleInputChange("image", value)}
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
          <Button variant="primary" label={isEdit ? "Update" : "Create"} />
        </div>
      </div>
    </SideBarSkeleton>
  );
}

export default AddEditHotel;
