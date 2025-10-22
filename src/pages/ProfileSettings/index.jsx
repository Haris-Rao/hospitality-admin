"use client";

import PhoneNumberInput from "@/components/Core/CustomPhoneInput";
import { Input } from "@/components/Core/Input";
import { ProfileWithEditButton } from "@/components/Core/ProfileWithEditButton";
import TabsComponent from "@/components/Core/TabsComponent";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/Core/Button";
import { profileSettingTabs } from "@/data/data";
import {
  RenderToast,
  validateEmail,
  validateNestedParams,
} from "@/helper/HelperFunction";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { isMobilePhone } from "validator";
import classes from "./ProfileSettings.module.css";
import SideBarSkeleton from "@/components/Core/SideBarSkeleton";

export default function ProfileSettings() {
  const [selectedTab, setSelectedTab] = useState(profileSettingTabs[0]);
  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };
  const [profileImage, setProfileImage] = useState(null);

  // Account form state
  const [accountForm, setAccountForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });

  // Password form state
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleAccountInputChange = (field, value) => {
    setAccountForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };
  const handlePasswordInputChange = (field, value) => {
    setPasswordForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Submit account form
  const handleAccountSubmit = (e) => {
    e.preventDefault();

    const params = {
      ...accountForm,
    };

    if (profileImage !== null) {
      params.profileImage = profileImage;
    }

    if (!validateNestedParams(params)) return;

    if (!validateEmail(params.email)) {
      return RenderToast({
        type: "error",
        message: "Please enter a valid email!",
      });
    }

    if (!isMobilePhone(params.phoneNumber)) {
      return RenderToast({
        type: "error",
        message: "Please enter a valid phone number!",
      });
    }

    console.log("Account Form Data:", {
      profileImage,
      ...accountForm,
    });
  };

  // Submit password form
  const handlePasswordSubmit = (e) => {
    e.preventDefault();

    const params = {
      ...passwordForm,
    };

    if (!validateNestedParams(params)) return;

    console.log("Password Form Data:", passwordForm);
  };
  return (
    <SideBarSkeleton>
      <div className={classes.profileSettingPage}>
        <Container fluid>
          <div className={classes.content}>
            <PageHeader title="Settings" />
            <div className={classes.settingsContainer}>
              <div className={classes.settingsTabs}>
                <TabsComponent
                  data={profileSettingTabs}
                  value={selectedTab}
                  onClick={handleTabClick}
                  variant="secondary"
                />
              </div>
              <div className={classes.settingsContent}>
                <form>
                  <div className={classes.accountContent}>
                    <div className={classes.accountInfo}>
                      <h3>
                        {selectedTab.value === "account"
                          ? "Account Information"
                          : "Change Password"}
                      </h3>
                      <Button
                        label="Save Changes"
                        variant="transparent"
                        size="sm"
                        onClick={
                          selectedTab.value === "account"
                            ? handleAccountSubmit
                            : handlePasswordSubmit
                        }
                      />
                    </div>
                    {selectedTab.value === "account" ? (
                      <div className={classes.accountForm}>
                        <ProfileWithEditButton
                          updateImage={profileImage}
                          setUpdateImage={setProfileImage}
                          isEdit={true}
                        />
                        <div className={classes.accountFormRow}>
                          <Input
                            type="text"
                            label="First Name"
                            variant="secondary"
                            value={accountForm.firstName}
                            setter={(value) =>
                              handleAccountInputChange("firstName", value)
                            }
                          />
                          <Input
                            type="text"
                            label="Last Name"
                            variant="secondary"
                            value={accountForm.lastName}
                            setter={(value) =>
                              handleAccountInputChange("lastName", value)
                            }
                          />
                          <Input
                            type="email"
                            label="Email"
                            variant="secondary"
                            value={accountForm.email}
                            setter={(value) =>
                              handleAccountInputChange("email", value)
                            }
                          />
                          <PhoneNumberInput
                            label="Phone Number"
                            defaultCountry="US"
                            variant="secondary"
                            value={accountForm.phoneNumber}
                            setter={(value) =>
                              handleAccountInputChange("phoneNumber", value)
                            }
                          />
                        </div>
                      </div>
                    ) : (
                      <div className={classes.passwordForm}>
                        <Input
                          type="password"
                          label="Current Password"
                          placeholder="Enter Current Password"
                          variant="secondary"
                          value={passwordForm.currentPassword}
                          setter={(value) =>
                            handlePasswordInputChange("currentPassword", value)
                          }
                        />
                        <Input
                          type="password"
                          label="New Password"
                          placeholder="Enter New Password"
                          variant="secondary"
                          value={passwordForm.newPassword}
                          setter={(value) =>
                            handlePasswordInputChange("newPassword", value)
                          }
                        />
                        <Input
                          type="password"
                          label="Confirm New Password"
                          placeholder="Enter Confirm New Password"
                          variant="secondary"
                          value={passwordForm.confirmPassword}
                          setter={(value) =>
                            handlePasswordInputChange("confirmPassword", value)
                          }
                        />
                        <p>
                          8 characters or longer. Combine upper and lowercase
                          letters and numbers.
                        </p>
                      </div>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </SideBarSkeleton>
  );
}
