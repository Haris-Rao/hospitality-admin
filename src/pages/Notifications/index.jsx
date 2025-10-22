"use client";
import React, { useEffect, useState } from "react";
import classes from "./Notifications.module.css";
import { useDispatch, useSelector } from "react-redux";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { recordsLimit } from "@/constant/constants";
import { BaseURL } from "@/config/apiUrl";
import { Get, Patch } from "@/axios/AxiosFunctions";
import { setUnReadNotificationCount } from "@/store/common/commonSlice";
import { apiHeader, formatDate } from "@/helper/HelperFunction";
import { Button } from "@/components/Core/Button";
import PaginationComponent from "@/components/Core/PaginationComponent";
import NotificationComponent from "@/components/NotificationComponent";
import SideBarSkeleton from "@/components/Core/SideBarSkeleton";
import { airport } from "@/constant/imagePath";
import PageHeader from "@/components/PageHeader";

function Notifications() {
  const dispatch = useDispatch();
  const [data, setData] = useState(notifications_dummy);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalRecords, setTotalRecords] = useState(20);
  const { access_token } = useSelector((state) => state?.authReducer);
  const { unReadNotificationCount } = useSelector(
    (state) => state?.commonReducer
  );

  const getData = async (pageNo = page) => {
    setLoading("get-data");
    const url = BaseURL(`notifications?page=${pageNo}&limit=${recordsLimit}`);
    const response = await Get(url, access_token);
    if (response !== undefined) {
      setData(response?.data?.data?.notifications);
      setTotalRecords(response?.data?.data?.totalCount);
      dispatch(setUnReadNotificationCount(response?.data?.data?.counts));
    }
    setLoading(false);
  };

  const updateNotificationAsSeen = async (id) => {
    setLoading(id ? "as-read" : "all-as-read");
    const url = BaseURL(`notifications/seen`);
    let response = await Patch(
      url,
      id ? { notificationId: id } : {},
      apiHeader(access_token)
    );
    if (response !== undefined) {
      if (!id) {
        dispatch(setUnReadNotificationCount(0));
        setData((prev) => {
          const temp = prev.map((ele) => {
            ele.seen = true;
            return ele;
          });
          return temp;
        });
      } else {
        dispatch(
          setUnReadNotificationCount(
            unReadNotificationCount - 1 < 0 ? 0 : unReadNotificationCount - 1
          )
        );
        setData((prev) => {
          const index = prev?.findIndex((ele) => ele._id === id);
          prev[index].seen = true;
          return [...prev];
        });
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    // getData();
  }, [page]);
  return (
    <SideBarSkeleton>
      <div className={classes.container}>
        <PageHeader title="Notifications" />
        <div className={classes.main}>
          <div className={classes.mainHeader}>
            <h2>Notifications</h2>
            <Button
              label={"Mark all as read"}
              leftIcon={
                <IoMdCheckmarkCircleOutline color="var(--main-color)" />
              }
              className={classes.markAllAsReadButton}
              variant="bordered-none"
            />
          </div>
          <div className={classes.notificationList}>
            <NotificationComponent data={data} />
          </div>
          <div className={classes.Pagination}>
            <PaginationComponent
              currentPage={Number(page)}
              setCurrentPage={setPage}
              totalPages={Math.ceil(totalRecords / recordsLimit)}
              totalRecord={totalRecords}
            />
          </div>
        </div>
      </div>
    </SideBarSkeleton>
  );
}

export default Notifications;

const notifications_dummy = Array(11)
  .fill("")
  .map((_, index) => ({
    image: airport,
    title: "Liam Hawthorne",
    message:
      "As twilight descends, the skyline glows with a soft light, inviting new stories to unfold in the vibrant city.",
    notificationDate: formatDate(new Date()),
    createdAt: formatDate(new Date()),
    seen: index % 2 === 0 ? true : false,
    _id: index + 1,
  }));
