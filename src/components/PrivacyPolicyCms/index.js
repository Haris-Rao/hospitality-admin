import React, { useEffect, useState } from "react";
import classes from "./PrivacyPolicyCms.module.css";
import { BaseURL } from "@/config/apiUrl";
import { Get, Patch } from "@/axios/AxiosFunctions";
import {
  apiHeader,
  quillValidateHandler,
  RenderToast,
  validateNestedParams,
} from "@/helper/HelperFunction";
import { useSelector } from "react-redux";
import { Button } from "@/components/Core/Button";
import CmsLoader from "@/components/CmsLoader";
import { TextArea } from "@/components/Core/TextArea";
import QuillInput from "../Core/QuillInput";
export default function PrivacyPolicyCms() {
  const { access_token } = useSelector((state) => state?.authReducer);
  const [loading, setLoading] = useState(false);
  const [heroTitle, setHeroTitle] = useState("");
  const [heroDescription, setHeroDescription] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async () => {
    const params = {
      heroTitle,
      heroDescription,
      content,
    };

    if (!validateNestedParams(params)) return;
    if (
      !quillValidateHandler(
        {
          heroTitle,
          heroDescription,
          content,
        },
        "Please fill all the fields"
      )
    ) {
      return;
    }
    setLoading("update");

    const url = BaseURL("cms/privacy_policy");
    const response = await Patch(url, params, apiHeader(access_token));
    if (response !== undefined) {
      RenderToast({
        type: "success",
        message: "Privacy Policy CMS updated successfully",
      });
    }
    setLoading(false);
  };

  const getData = async () => {
    setLoading("get-data");
    const url = BaseURL("cms/privacy_policy");
    const response = await Get(url, access_token);
    if (response !== undefined) {
      const res = response?.data?.data?.privacy_policy;
      setHeroTitle(res?.heroTitle);
      setHeroDescription(res?.heroDescription);
      setContent(res?.content);
    }
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className={classes.mainWrapper}>
      {loading === "get-data" ? (
        <CmsLoader loaders={["textarea", "textarea", "textarea", "button"]} />
      ) : (
        <>
          <QuillInput
            label="Hero Title"
            placeholder="Enter Title"
            value={heroTitle}
            setter={setHeroTitle}
          />
          <TextArea
            label="Hero Description"
            placeholder="Enter Description"
            value={heroDescription}
            setter={setHeroDescription}
          />
          <QuillInput label="Content" value={content} setter={setContent} />
          <Button
            label={loading === "update" ? "Updating..." : "Update"}
            onClick={handleSubmit}
            disabled={loading === "update"}
            customStyle={{ width: "fit-content", marginTop: "15px" }}
            type="square"
          />
        </>
      )}
    </div>
  );
}
