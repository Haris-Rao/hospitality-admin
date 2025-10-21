import React, { useEffect, useState } from "react";
import classes from "./HomeCms.module.css";
import {
  apiHeader,
  quillValidateHandler,
  RenderToast,
  validateNestedParams,
} from "@/helper/HelperFunction";
import { BaseURL } from "@/config/apiUrl";
import { Get, Patch, uploadMedia } from "@/axios/AxiosFunctions";
import { useSelector } from "react-redux";
import { TextArea } from "@/components/Core/TextArea";
import UploadImageBox from "@/components/Core/UploadImageBox";
import CmsLoader from "@/components/CmsLoader";
import { Button } from "@/components/Core/Button";
import CmsSeparator from "@/components/CmsSeparator";
import { Input } from "@/components/Core/Input";
import QuillInput from "../Core/QuillInput";
export default function HomeCms() {
  const { access_token } = useSelector((state) => state.authReducer);
  const [heroHeading, setHeroHeading] = useState("");
  const [heroDescription, setHeroDescription] = useState("");
  const [heroImageDark, setHeroImageDark] = useState(null);
  const [heroImageLight, setHeroImageLight] = useState(null);
  const [sectionOneHeading, setSectionOneHeading] = useState("");
  const [sectionOneDescription, setSectionOneDescription] = useState("");
  const [sectionOneCards, setSectionOneCards] = useState([
    {
      imageDark: null,
      imageLight: null,
      title: "Save Time",
      description: "No more guessing when to post or what to edit.",
    },
    {
      imageDark: null,
      imageLight: null,
      title: "Save Time",
      description: "No more guessing when to post or what to edit.",
    },
    {
      imageDark: null,
      imageLight: null,
      title: "Save Time",
      description: "No more guessing when to post or what to edit.",
    },
    {
      imageDark: null,
      imageLight: null,
      title: "Save Time",
      description: "No more guessing when to post or what to edit.",
    },
  ]);
  const [sectionTwoHeading, setSectionTwoHeading] = useState("");
  const [sectionTwoDescription, setSectionTwoDescription] = useState("");
  const [sectionTwoImageDark, setSectionTwoImageDark] = useState(null);
  const [sectionTwoImageLight, setSectionTwoImageLight] = useState(null);
  const [sectionThreeHeading, setSectionThreeHeading] = useState("");
  const [sectionThreeDescription, setSectionThreeDescription] = useState("");
  const [imageLoading, setImageLoading] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    const params = {
      heroImageDark,
      heroImageLight,
      heroHeading,
      heroDescription,
      sectionOneHeading,
      sectionOneDescription,
      sectionOneCards,
      sectionTwoImageDark,
      sectionTwoImageLight,
      sectionTwoHeading,
      sectionTwoDescription,
      sectionThreeHeading,
      sectionThreeDescription,
    };
    if (!validateNestedParams(params)) return;
    if (
      !quillValidateHandler(
        {
          heroHeading,
        },
        "Please fill all the fields"
      )
    ) {
      return;
    }
    setLoading("update");

    const url = BaseURL("cms/home");
    // return;
    const response = await Patch(url, params, apiHeader(access_token));
    if (response !== undefined) {
      RenderToast({
        type: "success",
        message: "Home CMS updated successfully",
      });
    }
    setLoading(false);
  };

  const handleUploadImage = async (e, loader) => {
    // return;
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
    const url = BaseURL("cms/home");
    const response = await Get(url, access_token);
    if (response !== undefined) {
      const res = response?.data?.data?.home;
      setHeroHeading(res?.heroHeading);
      setHeroDescription(res?.heroDescription);
      setHeroImageDark(res?.heroImageDark);
      setHeroImageLight(res?.heroImageLight);
      setSectionOneHeading(res?.sectionOneHeading);
      setSectionOneDescription(res?.sectionOneDescription);
      setSectionOneCards(res?.sectionOneCards);
      setSectionTwoHeading(res?.sectionTwoHeading);
      setSectionTwoDescription(res?.sectionTwoDescription);
      setSectionTwoImageDark(res?.sectionTwoImageDark);
      setSectionTwoImageLight(res?.sectionTwoImageLight);
      setSectionThreeHeading(res?.sectionThreeHeading);
      setSectionThreeDescription(res?.sectionThreeDescription);
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
            "separator",
            "input",
            "button",
          ]}
        />
      ) : (
        <>
          <CmsSeparator>Hero Section</CmsSeparator>
          <div className={classes.gridWrapper}>
            <div>
              <UploadImageBox
                label={"Hero Image Dark"}
                state={heroImageDark}
                setter={async (value) => {
                  if (!value) return;
                  const res = await handleUploadImage(value, "heroImageDark");
                  if (res) {
                    setHeroImageDark(res);
                  }
                }}
                uploading={imageLoading === "heroImageDark"}
              />
            </div>
            <div>
              <UploadImageBox
                label={"Hero Image Light"}
                state={heroImageLight}
                setter={async (value) => {
                  if (!value) return;
                  const res = await handleUploadImage(value, "heroImageLight");
                  if (res) {
                    setHeroImageLight(res);
                  }
                }}
                uploading={imageLoading === "heroImageLight"}
              />
            </div>
          </div>
          <div>
            <QuillInput
              label={"Hero Heading"}
              placeholder="Enter Hero Heading"
              value={heroHeading}
              setter={setHeroHeading}
            />
          </div>
          <TextArea
            label={"Hero Description"}
            placeholder="Enter Hero Description"
            value={heroDescription}
            setter={setHeroDescription}
          />
          <CmsSeparator>Section One</CmsSeparator>
          <Input
            label={"Section One Heading"}
            placeholder="Enter Section One Heading"
            value={sectionOneHeading}
            setter={setSectionOneHeading}
          />
          <TextArea
            label={"Section One Description"}
            placeholder="Enter Section One Description"
            value={sectionOneDescription}
            setter={setSectionOneDescription}
          />
          <div className={classes.gridWrapper}>
            {sectionOneCards.map((item, index) => (
              <div className={classes.cardWrapper} key={index}>
                <div className={classes.gridWrapper}>
                  <div>
                    <UploadImageBox
                      label={`Section One Card ${index + 1} Image Dark`}
                      state={item?.imageDark}
                      setter={async (value) => {
                        const res = await handleUploadImage(
                          value,
                          `sectionOneCardImageDark${index}`
                        );
                        if (res) {
                          const newItems = [...sectionOneCards];
                          newItems[index].imageDark = res;
                          setSectionOneCards(newItems);
                        }
                      }}
                      uploading={
                        imageLoading === `sectionOneCardImageDark${index}`
                      }
                    />
                  </div>
                  <div>
                    <UploadImageBox
                      label={`Section One Card ${index + 1} Image Light`}
                      state={item?.imageLight}
                      setter={async (value) => {
                        const res = await handleUploadImage(
                          value,
                          `sectionOneCardImageLight${index}`
                        );
                        if (res) {
                          const newItems = [...sectionOneCards];
                          newItems[index].imageLight = res;
                          setSectionOneCards(newItems);
                        }
                      }}
                      uploading={
                        imageLoading === `sectionOneCardImageLight${index}`
                      }
                    />
                  </div>
                </div>
                <Input
                  label={`Section One Card ${index + 1} Heading`}
                  placeholder={`Enter Section One Card ${index + 1} Heading`}
                  value={item?.title}
                  setter={(value) => {
                    const newItems = [...sectionOneCards];
                    newItems[index].title = value;
                    setSectionOneCards(newItems);
                  }}
                />
                <TextArea
                  label={`Section One Card ${index + 1} Description`}
                  placeholder={`Enter Section One Card ${
                    index + 1
                  } Description`}
                  value={item?.description}
                  setter={(value) => {
                    const newItems = [...sectionOneCards];
                    newItems[index].description = value;
                    setSectionOneCards(newItems);
                  }}
                />
              </div>
            ))}
          </div>
          <CmsSeparator>Section Two</CmsSeparator>
          <div className={classes.gridWrapper}>
            <div>
              <UploadImageBox
                label={`Section Two Image Dark`}
                state={sectionTwoImageDark}
                setter={async (value) => {
                  const res = await handleUploadImage(
                    value,
                    `sectionTwoImageDark`
                  );
                  if (res) {
                    setSectionTwoImageDark(res);
                  }
                }}
                uploading={imageLoading === `sectionTwoImageDark`}
              />
            </div>
            <div>
              <UploadImageBox
                label={`Section Two Image Light`}
                state={sectionTwoImageLight}
                setter={async (value) => {
                  const res = await handleUploadImage(
                    value,
                    `sectionTwoImageLight`
                  );
                  if (res) {
                    setSectionTwoImageLight(res);
                  }
                }}
                uploading={imageLoading === `sectionTwoImageLight`}
              />
            </div>
          </div>
          <Input
            label={`Section Two Heading`}
            placeholder={`Enter Section Two Heading`}
            value={sectionTwoHeading}
            setter={(value) => {
              setSectionTwoHeading(value);
            }}
          />
          <TextArea
            label={`Section Two Description`}
            placeholder={`Enter Section Two Description`}
            value={sectionTwoDescription}
            setter={(value) => {
              setSectionTwoDescription(value);
            }}
          />
          <CmsSeparator>Section Three</CmsSeparator>
          <Input
            label={"Section Three Heading"}
            placeholder="Enter Section Three Heading"
            value={sectionThreeHeading}
            setter={setSectionThreeHeading}
          />
          <TextArea
            label={"Section Three Description"}
            placeholder="Enter Section Three Description"
            value={sectionThreeDescription}
            setter={setSectionThreeDescription}
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
