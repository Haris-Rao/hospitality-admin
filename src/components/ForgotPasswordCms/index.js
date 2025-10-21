import { Get, Patch, uploadMedia } from "@/axios/AxiosFunctions";
import CmsLoader from "@/components/CmsLoader";
import CmsSeparator from "@/components/CmsSeparator";
import { Button } from "@/components/Core/Button";
import { Input } from "@/components/Core/Input";
import { TextArea } from "@/components/Core/TextArea";
import UploadImageBox from "@/components/Core/UploadImageBox";
import { BaseURL } from "@/config/apiUrl";
import {
  apiHeader,
  RenderToast,
  validateNestedParams,
} from "@/helper/HelperFunction";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import classes from "./ForgotPasswordCms.module.css";
export default function ForgotPasswordCms() {
  const { access_token } = useSelector((state) => state.authReducer);
  const [heading, setHeading] = useState("");
  const [description, setDescription] = useState("");
  const [imageDark, setImageDark] = useState("");
  const [imageLight, setImageLight] = useState("");
  const [loading, setLoading] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);

  const handleSubmit = async () => {
    const params = {
      imageDark,
      imageLight,
      heading,
      description,
    };
    if (!validateNestedParams(params)) return;
    setLoading("update");

    const url = BaseURL("cms/forgot_password");
    const response = await Patch(url, params, apiHeader(access_token));
    if (response !== undefined) {
      RenderToast({
        type: "success",
        message: "Forgot Password CMS updated successfully",
      });
    }
    setLoading(false);
  };

  const handleUploadImage = async (e, loader) => {
    setImageLoading(loader);
    const res = await uploadMedia([e], access_token);
    if (Array.isArray(res)) {
      setImageLoading(false);
      return res[0];
    }
    setImageLoading(false);
  };

  const getData = async () => {
    setLoading("get-data");
    const url = BaseURL("cms/forgot_password");
    const response = await Get(url, access_token);
    if (response !== undefined) {
      const res = response?.data?.data?.forgot_password;
      setHeading(res?.heading);
      setDescription(res?.description);
      setImageDark(res?.imageDark);
      setImageLight(res?.imageLight);
    }
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className={classes.mainWrapper}>
      {loading === "get-data" ? (
        <CmsLoader
          loaders={[
            "separator",
            ["imageBox", "imageBox"],
            "input",
            "textarea",
            "button",
          ]}
        />
      ) : (
        <>
          <CmsSeparator>Forgot Password</CmsSeparator>
          <div className={classes.gridWrapper}>
            <div>
              <UploadImageBox
                label={"Image Dark"}
                state={imageDark}
                setter={async (value) => {
                  if (!value) return;
                  const res = await handleUploadImage(value, "imageDark");
                  if (res) {
                    setImageDark(res);
                  }
                }}
                uploading={imageLoading === "imageDark"}
              />
            </div>
            <div>
              <UploadImageBox
                label={`Image Light`}
                state={imageLight}
                setter={async (value) => {
                  const res = await handleUploadImage(value, `imageLight`);
                  if (res) {
                    setImageLight(res);
                  }
                }}
                uploading={imageLoading === `imageLight`}
              />
            </div>
          </div>
          <Input
            label={"Heading"}
            placeholder="Enter Heading"
            value={heading}
            setter={setHeading}
          />
          <TextArea
            label={"Description"}
            placeholder="Enter Description"
            value={description}
            setter={setDescription}
          />

          <div>
            <Button
              label={loading === "update" ? "Updating..." : "Update"}
              onClick={handleSubmit}
              disabled={loading}
            />
          </div>
        </>
      )}
    </div>
  );
}
