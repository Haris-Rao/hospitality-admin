import { Button } from "@/components/Core/Button";
import DateInput from "@/components/Core/DateInput";
import { Input } from "@/components/Core/Input";
import { Radio } from "@/components/Core/Radio";
import ModalSkeleton from "@/modals/ModalSkeleton";
import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import classes from "./SubscriptionDetailsModal.module.css";

const SubscriptionDetailsModal = ({
  show,
  setShow,
  data,
  onDelete,
  onClick,
}) => {
  const [formData, setFormData] = useState({
    subscriptionId: "",
    subscriptionTitle: "",
    subscriptionAvailability: "",
    email: "",
    monthlyCost: "",
    yearlyCost: "",
    noOfTrialDays: "",
    recurringType: "",
    startDate: "",
    endDate: "",
  });

  useEffect(() => {
    if (data) {
      setFormData({
        subscriptionId: data?.subscriptionId || "",
        subscriptionTitle: data?.title || "",
        subscriptionAvailability: data?.subscriptionAvailability || "",
        email: data?.email || "",
        noOfTrialDays: data?.noOfTrialDays || "",
        recurringType: data?.recurringType || "",
        startDate: data?.startDate || "",
        endDate: data?.endDate || "",
        monthlyCost: data?.monthlyCost || "",
        yearlyCost: data?.yearlyCost || "",
      });
    }
  }, [data]);

  console.log("nesss02", formData);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const footer = [
    <div className={classes.footerActions}>
      {data && (
        <Button
          key="delete"
          onClick={onDelete}
          variant="light-danger"
          leftIcon={<FaTrash />}
          label="Delete"
          size="md"
        />
      )}
      <div className={classes.rightActions}>
        <Button
          key="cancel"
          onClick={() => setShow(false)}
          label="Cancel"
          variant="white-bordered"
          size="md"
        />
        <Button
          onClick={onClick}
          label={data ? "Edit" : "Create"}
          variant="primary"
          size="md"
        />
      </div>
    </div>,
  ];

  return (
    <ModalSkeleton
      show={show}
      setShow={setShow}
      header={data ? "Edit Subscription" : "Create Subscription"}
      footer={footer}
      width="800px"
      showCloseIcon={true}
      modalClass={classes.modal}
    >
      <div className={classes.formContainer}>
        <div className={classes.formColumn}>
          <Input
            type="text"
            label="Subscription ID"
            labelClass={classes.inputLabel}
            value={formData?.subscriptionId}
            setter={(value) => handleInputChange("subscriptionId", value)}
          />
          <Input
            type="text"
            label="Subscription Title"
            labelClass={classes.inputLabel}
            value={formData?.subscriptionTitle}
            setter={(value) => handleInputChange("subscriptionTitle", value)}
          />
          <Input
            type="text"
            label="Subscription Availability"
            labelClass={classes.inputLabel}
            value={formData?.subscriptionAvailability}
            setter={(value) =>
              handleInputChange("subscriptionAvailability", value)
            }
          />

          <Input
            type="text"
            label="No of Trial Days"
            labelClass={classes.inputLabel}
            value={formData?.noOfTrialDays}
            setter={(value) => handleInputChange("noOfTrialDays", value)}
          />

          <Input
            type="email"
            label="Email"
            labelClass={classes.inputLabel}
            value={formData?.email}
            setter={(value) => handleInputChange("email", value)}
          />
          <div className={classes.formGroup}>
            <label className={classes.inputLabel}>Recurring Type</label>
            <div className={classes.radioGroup}>
              <Radio
                label="Monthly"
                labelClass={classes.inputLabel}
                value={formData?.recurringType}
                setValue={(value) => handleInputChange("recurringType", value)}
                variant="secondary"
              />
              <Radio
                label="Yearly"
                value={formData?.recurringType}
                labelClass={classes.inputLabel}
                setValue={(value) => handleInputChange("recurringType", value)}
                variant="secondary"
              />
              <Radio
                label="Both"
                value={formData?.recurringType}
                labelClass={classes.inputLabel}
                setValue={(value) => handleInputChange("recurringType", value)}
                variant="secondary"
              />
            </div>
          </div>

          <Input
            type="text"
            label="Monthly Cost"
            labelClass={classes.inputLabel}
            value={formData?.monthlyCost}
            setter={(value) => handleInputChange("monthlyCost", value)}
          />
          <Input
            type="text"
            label="Yearly Cost"
            labelClass={classes.inputLabel}
            value={formData?.yearlyCost}
            setter={(value) => handleInputChange("yearlyCost", value)}
          />

          <DateInput
            label="Start Date"
            labelClass={classes.inputLabel}
            value={formData?.startDate}
            setValue={(value) => handleInputChange("startDate", value)}
          />
          <DateInput
            label="End Date"
            labelClass={classes.inputLabel}
            value={formData?.endDate}
            setValue={(value) => handleInputChange("endDate", value)}
          />
        </div>
      </div>
    </ModalSkeleton>
  );
};

export default SubscriptionDetailsModal;
