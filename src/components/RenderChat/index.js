"use client";
import { isMobileViewHook } from "@/customHooks/isMobileViewHook";
import {
  apiHeader,
  formatMessageDate,
  RenderToast,
  stripAllHtmlTags,
} from "@/helper/HelperFunction";
import ImageSliderModal from "@/modals/ImageSliderModal";
import { Get, Patch, uploadMedia } from "@/axios/AxiosFunctions";
import parse from "html-react-parser";
import moment from "moment";
import { useEffect, useRef, useState } from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import { AiOutlineClose } from "react-icons/ai";
import { BsChevronLeft } from "react-icons/bs";
import { GrAttachment } from "react-icons/gr";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import classes from "./ViewChat.module.css";
import { dummyRoomsData } from "./dummyRoomsData";
import { FiSend } from "react-icons/fi";
import { Button } from "../Core/Button";
import NoData from "../Core/NoData/NoData";
import SearchInput from "../Core/SearchInput";
import Skeleton from "../Skeleton";
import MediaComponent from "../MediaComponent";
import { BaseURL, imageUrl } from "@/config/apiUrl";
import { recordsLimit } from "@/constant/constants";
import { useWebSocket } from "@/context/socket";
import AreYouSureModal from "@/modals/AreYouSureModal";
import { useSearchParams } from "next/navigation";
import { FaPlus } from "react-icons/fa6";
const maxTextAreaHeight = 80;

const fileTypesAllowed = [
  "image/jpeg",
  "image/png",
  "image/jpg",
  "application/pdf",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];
moment.updateLocale("en", {
  relativeTime: {
    future: "in %s",
    past: "%s ago",
    s: "secs",
    ss: "%d secs",
    m: "1 min",
    mm: "%d mins",
    h: "1 hr",
    hh: "%d hrs",
    d: "1 day",
    dd: "%d days",
    w: "1 wk",
    ww: "%d wks",
    M: "1 month",
    MM: "%d mths",
    y: "1 year",
    yy: "%d yrs",
  },
});

const SendInput = ({ sendMsg, scrollToBottom, loader }) => {
  const [messageText, setMessageText] = useState("");
  const [fileUpload, setFileUpload] = useState([]);
  const ref = useRef(null);

  const handleSubmit = (e) => {
    if (!e.target.files) return;
    if (e.target.files.length + fileUpload.length > 5)
      return toast.warn("You can upload maximum 5 files at a time");
    for (let i = 0; i < e.target.files.length; i++) {
      if (!fileTypesAllowed.includes(e.target.files[i].type)) {
        return toast.warn(
          `Please select a valid file type for ${e.target.files[i].name}`
        );
      }
    }
    setFileUpload((prev) => [...prev, ...e.target.files]);
  };
  const textAreaRef = useRef(null);

  const autoResize = () => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto";
      textAreaRef.current.style.height = `${Math.min(
        textAreaRef.current.scrollHeight,
        maxTextAreaHeight
      )}px`;
    }
  };
  return (
    <>
      <div className={classes.chatInput_box}>
        <div className={classes.attachmentUpload}>
          <FaPlus
            size={24}
            onClick={() => ref.current.click()}
            color="var(--attachment-icon-color)"
          />
        </div>
        <div className={classes.inputIconDiv}>
          {fileUpload?.length > 0 && (
            <div className={classes.imagesContainer}>
              {fileUpload?.map((item, i) => {
                return (
                  <div
                    key={i}
                    className={classes.imageContainer}
                    onClick={() => {
                      if (
                        [
                          "application/pdf",
                          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                        ].includes(item?.type)
                      ) {
                        window.open(URL.createObjectURL(item), "_blank");
                      } else {
                        return;
                      }
                    }}
                  >
                    <img
                      src={
                        item?.type === "application/pdf"
                          ? "/images/pdf_icon.png"
                          : item?.type ===
                            "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                          ? "/images/doc_icon.png"
                          : URL.createObjectURL(item)
                      }
                      alt="..."
                      className={classes.image}
                      width={100}
                      height={100}
                    />

                    <span
                      className={classes.closeIcon}
                      onClick={(e) => {
                        e.stopPropagation();
                        const newData = [...fileUpload];
                        newData.splice(i, 1);
                        setFileUpload(newData);
                      }}
                    >
                      <AiOutlineClose />
                    </span>
                  </div>
                );
              })}
            </div>
          )}

          <textarea
            ref={textAreaRef}
            onInput={autoResize}
            onKeyDown={async (e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                const res = await sendMsg(messageText, fileUpload);
                if (res) {
                  setFileUpload([]);
                }
                setMessageText("");
                scrollToBottom();
              }
            }}
            type="text"
            placeholder="Message"
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
            className={classes.__input}
            rows={1}
            style={{
              resize: "none",
              maxHeight: `${maxTextAreaHeight}px`,
            }}
          />
        </div>
        <div className={classes.input_icon}>
          <span
            onClick={async () => {
              const res = await sendMsg(messageText, fileUpload);
              if (res) {
                setFileUpload([]);
              }
              scrollToBottom();
              setMessageText("");
            }}
            className={classes.snd_btn}
          >
            {loader ? (
              <Spinner
                animation="border"
                variant="light"
                size="md"
                color="var(--white-color)"
              />
            ) : (
              <FiSend className={classes.send_icon} size={24} />
              //   <RiSendPlaneFill
              //     size={24}
              //     color="var(--white-color)"
              //   />
            )}
          </span>
        </div>
      </div>
      <input
        type="file"
        multiple
        className="d-none"
        ref={ref}
        onChange={(e) => {
          handleSubmit(e);
        }}
      />
    </>
  );
};
const RoomBox = ({
  item,
  selectedRoom,
  setSelectedRoom,
  setChatsPage,
  setChatsData,
  setRoomsData,
}) => {
  let userData = useSelector((state) => state?.authReducer?.user);
  const unreadCount = item?.users?.find(
    (e) => e?.userId?._id == userData?._id
  )?.unreadCount;
  let upadatedUsers = JSON.parse(JSON.stringify(item?.users));
  upadatedUsers?.forEach((item) => {
    if (item?.userId?._id == userData?._id) {
      item.unreadCount = 0;
    }
  });

  return (
    <>
      <div
        className={[
          classes.roomBox,
          selectedRoom?._id == item?._id && classes.active,
        ].join(" ")}
        onClick={() => {
          if (selectedRoom?._id !== item?._id) {
            setChatsPage(1);
            setChatsData([]);
            setSelectedRoom(item);
          }
          setRoomsData((prev) => {
            const updatedRoomLastMessage = prev?.map((innerItem) => {
              if (innerItem?._id == item?._id) {
                return {
                  ...innerItem,
                  users: upadatedUsers,
                };
              }
              return innerItem;
            });

            return updatedRoomLastMessage;
          });
        }}
      >
        <div className={classes.userContent}>
          <div className={classes.imgTwoUsers}>
            {showChatUser(item?.users, userData)?.map((e) => {
              return (
                <div className={classes.img}>
                  <img
                    // src={imageUrl(e?.userId?.photo)}
                    src={e?.userId?.photo}
                    layout="fill"
                    fill
                    alt="..."
                  />
                </div>
              );
            })}
          </div>
          <div className={classes.nameDiv}>
            <p className={classes.title}>
              {showChatUser(item?.users, userData)
                ?.map((e) => e?.userId?.name)
                .join(", ")}
              {/* {item?.userId?.name} */}
            </p>

            <p className={classes.text}>
              <>
                {!item?.lastMessage?.message && item?.reference == "support" ? (
                  "Support"
                ) : (
                  <>
                    {stripAllHtmlTags(item?.lastMessage?.message)}
                    {!item?.lastMessage?.message &&
                      item?.lastMessage?.media?.length > 0 &&
                      "Attachments"}
                  </>
                )}
              </>
            </p>
          </div>
        </div>

        <div className={classes.details}>
          <p className={classes.title}>
            {formatMessageDate(item?.lastMessage?.updatedAt)}
          </p>
          {unreadCount > 0 && (
            <span className={classes.unreadCount}>{unreadCount}</span>
          )}
        </div>
      </div>
    </>
  );
};

const RenderRoom = ({
  roomsData,
  roomsLoading,
  selectedRoom,
  setSelectedRoom,
  roomsPage,
  roomsTotalCount,
  setRoomsPage,
  search,
  setSearch,
  setChatsPage,
  setChatsData,
  setRoomsData,
  getAllRooms,
  setRoomsTotalCount,
}) => {
  return (
    <div className={classes.room_container}>
      <div className={classes.roomWrapper}>
        <div className={classes.roomHeaderBox}>
          <h2>Chats</h2>
          <SearchInput
            value={search}
            setter={setSearch}
            backgroundColor=""
            placeholder={"Search"}
            iconColor={"var(--white-color)"}
            customStyle={{
              width: "100%",
              boxShadow: "none",
              borderRadius: "var(--global-border-radius)",
              borderColor: "var(--border-color)",
            }}
            inputStyle={{
              padding: "10px",
              marginTop: "10px",
              color: "var(--primary-text-color)",
            }}
          />
        </div>

        {/* chats Rooms */}
        <div className={classes.__list}>
          {roomsLoading == "mainLoading" ? (
            [...Array(7)].map(() => {
              return <RoomsLoader />;
            })
          ) : roomsData?.length > 0 ? (
            roomsData?.map((item, i) => {
              return (
                <RoomBox
                  item={item}
                  selectedRoom={selectedRoom}
                  setSelectedRoom={setSelectedRoom}
                  setChatsPage={setChatsPage}
                  setChatsData={setChatsData}
                  setRoomsData={setRoomsData}
                  setRoomsTotalCount={setRoomsTotalCount}
                  key={i}
                />
              );
            })
          ) : (
            <NoData text="No Rooms Found" />
          )}
        </div>
        {/* <div className={classes.pagination}>
          {roomsPage < Math.ceil(roomsTotalCount / recordsLimit) && (
            <Button
              label={roomsLoading == "showMore" ? "Loading..." : "View More"}
              onClick={() => {
                setRoomsPage((prev) => prev + 1);
                getAllRooms(roomsPage + 1, "showMore", roomsData);
              }}
              disabled={roomsLoading}
            />
          )}
        </div> */}
      </div>
    </div>
  );
};

const RenderChats = ({
  selectedRoom,
  chatsData,
  chatsLoading,
  chatsPage,
  chatsTotalCount,
  setChatsPage,
  isMobile,
  scrollToBottom,
  sendMsg,
  msgEndRef,
  getAllChats,
  setSelectedRoom,
  mediaLoading,
  setRoomsData,
}) => {
  const { user: userData, access_token } = useSelector(
    (state) => state?.authReducer
  );
  const [modal, setModal] = useState({
    show: false,
    loader: false,
  });

  const handleClose = async () => {
    const apiUrl = BaseURL(`support/close/${selectedRoom?.support?._id}`);
    const body = {};

    setModal((prev) => ({ ...prev, loader: "closeSupport" }));
    const response = await Patch(apiUrl, body, apiHeader(access_token));
    if (response) {
      setModal((prev) => ({ ...prev, show: false }));
      RenderToast({
        type: "success",
        message: "Support closed successfully",
      });
      setSelectedRoom((prev) => ({
        ...prev,
        support: {
          ...prev?.support,
          status: "closed",
        },
      }));
      setRoomsData((prev) => {
        return prev?.map((item) => {
          if (item?._id == selectedRoom?._id) {
            return {
              ...item,
              support: {
                ...item?.support,
                status: "closed",
              },
            };
          } else {
            return item;
          }
        });
      });
      setChatsPage(1);
      getAllChats(1, false);
    }
    setModal((prev) => ({ ...prev, loader: false }));
  };

  return (
    <div className={classes.chatWrapper}>
      <div className={classes.chatHeader}>
        <div className={classes.userDetails}>
          <div className={classes._left}>
            {isMobile && (
              <BsChevronLeft
                onClick={() => setSelectedRoom(null)}
                size={20}
                color={"var(--main-color)"}
              />
            )}
            <div className={classes.imgTwoUsers}>
              {showChatUser(selectedRoom?.users, userData)?.map((e) => {
                return (
                  <div className={classes.img}>
                    <img
                      // src={imageUrl(e?.userId?.photo)}
                      src={e?.userId?.photo}
                      layout="fill"
                      fill
                      alt="..."
                    />
                  </div>
                );
              })}
            </div>
            <div className={classes.nameDiv}>
              <p className={[classes.title, classes.chatUserName].join(" ")}>
                {showChatUser(selectedRoom?.users, userData)
                  ?.map((e) => e?.userId?.name)
                  .join(", ")}
              </p>
            </div>
          </div>
          {/* {selectedRoom?.reference && (
            <div className={classes._right}>
              {selectedRoom?.support?.status == "open" ? (
                <Button
                  label={isMobile ? <RxCross2 size={20} /> : "Close Support"}
                  variant="bordered"
                  disabled={modal?.loader}
                  onClick={() => {
                    setModal((prev) => ({ ...prev, show: "closeSupport" }));
                  }}
                  loader={modal?.loader}
                />
              ) : (
                <Statuses status={"closed"} />
              )}
            </div>
          )} */}
        </div>
      </div>
      <div className={classes.chatinput_wrapper}>
        <div
          className={[
            classes.chatBody,
            selectedRoom?.job?.dispute?.status != "in-progress" &&
              classes.chatBodyDispute,
          ].join(" ")}
        >
          {/* {chatsTotalCount > 1 && chatsTotalCount > chatsPage && (
            <div className={classes.loadMoreBtnDiv}>
              <Button
                label={chatsLoading == "showMore" ? "Loading..." : "Load More"}
                disabled={chatsLoading}
                className={classes.loadMoreBtn}
                onClick={() => {
                  const incPage = ++chatsPage;
                  getAllChats(incPage, "showMore");
                  setChatsPage(incPage);
                }}
              />
            </div>
          )} */}

          {chatsLoading == "main-loading" ? (
            <ChatLoader />
          ) : chatsData?.length > 0 ? (
            chatsData?.map((item, i) => {
              return (
                <RenderChat
                  item={item}
                  userData={userData}
                  key={i}
                  selectedRoom={selectedRoom}
                />
              );
            })
          ) : (
            <NoData text={"No Messages"} />
          )}
        </div>

        <div className={classes.chatFooter}>
          {selectedRoom?.support?.status == "open" && (
            <SendInput
              sendMsg={sendMsg}
              scrollToBottom={scrollToBottom}
              loader={mediaLoading}
              selectedRoom={selectedRoom}
            />
          )}
        </div>
        <div ref={msgEndRef} />
      </div>
      {modal?.show === "closeSupport" && (
        <AreYouSureModal
          show={modal?.show === "closeSupport"}
          setShow={setModal}
          isApiCall={modal?.loader === "closeSupport"}
          onClick={handleClose}
          title="Close Support"
          subTitle="Are you sure you want to close this support?"
          btnText="Close Support"
        />
      )}
    </div>
  );
};

const RenderChat = ({ item, selectedRoom }) => {
  const { user } = useSelector((state) => state?.authReducer);
  const isPayload =
    item?.payload?.activity == "dispute" ? item?.payload?.data : null;
  const decideChatUser = item?.from?._id === "me";
  const [imagesModal, setImagesModal] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <>
      {isPayload ? (
        <>
          <div className={classes.chatBoxDispute}></div>
        </>
      ) : decideChatUser ? (
        <>
          <div className={[classes.chatBoxMe].join(" ")}>
            <div className={classes.chatStyling}>
              <p>{parse(item?.message || "")}</p>
              <div className={classes.chatMedia}>
                {item?.media?.length > 0 && (
                  <div className={classes.media}>
                    <MediaComponent
                      media={
                        item?.media?.map((image) => ({
                          key: image,
                          name: image,
                        })) || []
                      }
                      onShowMore={(index) => {
                        setImagesModal(true);
                        setImageIndex(index);
                      }}
                    />
                  </div>
                )}
                {imagesModal && (
                  <ImageSliderModal
                    show={imagesModal}
                    setShow={setImagesModal}
                    gallery={item?.media?.map((image) => ({
                      key: image,
                      name: image,
                    }))}
                    title={"Photos"}
                    imageIndex={imageIndex}
                    setImageIndex={setImageIndex}
                  />
                )}
              </div>
            </div>
            <p className={classes.dateTime}>
              <p>Receptionist</p>
              <span>{formatMessageDate(item?.createdAt)}</span>
            </p>
            {/*
            <div className={classes.imgBox}>
              <img src={imageUrl(item?.from?.photo)} alt="..." />
            </div>
            */}
          </div>
        </>
      ) : (
        <>
          <div className={[classes.chatBox].join(" ")}>
            <div className={classes.imgBox}>
              {/* <img src={imageUrl(item?.from?.photo)} alt="..." /> */}
              <img src={item?.from?.photo} alt="..." />
            </div>
            <div>
              <p className={classes.roleName}>
                <span>{item?.from?.name}</span>
                <p className={classes.dateTime}>
                  <span>{formatMessageDate(item?.createdAt)}</span>
                </p>
                {/* <span>{item?.from?.name}</span> */}
              </p>
              <div className={classes.chatStyling}>
                <p>{parse(item?.message || "")}</p>
                <div className={classes.chatMedia}>
                  {item?.media?.length > 0 && (
                    <div className={classes.media}>
                      <MediaComponent
                        media={
                          item?.media?.map((image) => ({
                            key: image,
                            name: image,
                          })) || []
                        }
                        onShowMore={(index) => {
                          setImagesModal(true);
                          setImageIndex(index);
                        }}
                      />
                    </div>
                  )}
                  {imagesModal && (
                    <ImageSliderModal
                      show={imagesModal}
                      setShow={setImagesModal}
                      gallery={item?.media?.map((image) => ({
                        key: image,
                        name: image,
                      }))}
                      title={"Photos"}
                      imageIndex={imageIndex}
                      setImageIndex={setImageIndex}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default function Chats() {
  // Access specific query parameters

  const { access_token, user } = useSelector((state) => state?.authReducer);
  const [searchParams] = useSearchParams();
  let id = searchParams?.get("id");
  const socket = useWebSocket(null);
  const msgEndRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  // room and chat data state
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [roomsData, setRoomsData] = useState(dummyRoomsData);
  const [roomsLoading, setRoomsLoading] = useState(false);
  const [chatsData, setChatsData] = useState([]);
  const [chatsLoading, setChatsLoading] = useState(false);
  // pagination state
  const [roomsPage, setRoomsPage] = useState(1);
  const [roomsTotalCount, setRoomsTotalCount] = useState(1);
  const [chatsPage, setChatsPage] = useState(1);
  const [chatsTotalCount, setChatsTotalCount] = useState(1);
  // search for room
  const [search, setSearch] = useState("");

  const [uploadMediaLoading, setUploadMediaLoading] = useState(null);

  function scrollToBottom() {
    msgEndRef.current?.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }
  const getAllRooms = async (
    page = roomsPage,
    loader = "mainLoading",
    prev = []
  ) => {
    const apiUrl = BaseURL(
      `chats/all-rooms/?page=${page}&limit=${recordsLimit}&search=${search}`
    );
    setRoomsLoading(loader);
    const response = await Get(apiUrl, access_token);
    if (response !== undefined) {
      const { rooms } = response?.data?.data;
      setRoomsData([...prev, ...rooms]);
      setRoomsTotalCount(response?.data?.data?.totalCount);
    }

    setRoomsLoading(false);
  };
  const getAllChats = async (page = chatsPage, loader = "main-loading") => {
    const apiUrl = BaseURL(
      `chats/messages?roomId=${selectedRoom?._id}&page=${page}&limit=${recordsLimit}`
    );
    setChatsLoading(loader);
    const response = await Get(apiUrl, access_token);
    if (response !== undefined) {
      setChatsData([...chatsData, ...response?.data?.data?.chats]);
      setChatsTotalCount(
        Math.ceil(response?.data?.data?.totalCount / recordsLimit)
      );
    }
    setChatsLoading(false);
    page == 1 && scrollToBottom();
  };

  const sendMsg = async (e, images) => {
    const strippedContent = e?.replace(/<[^>]*>/g, "").trim();
    if (strippedContent === "" && images?.length === 0) {
      return;
    }

    let response = [];

    if (images?.length) {
      setUploadMediaLoading(true);
      response = await uploadMedia(images);
      if (!response) {
        setUploadMediaLoading(false);
        return toast.error("Failed to upload media");
      }

      setUploadMediaLoading(false);
    }
    setUploadMediaLoading(false);
    const msg = {
      roomId: selectedRoom?._id,
      message: strippedContent,
      media: [...response],
      type: "message",
    };
    const tempMessage = {
      ...msg,
      from: {
        ...user,
      },
    };
    const newData = [...chatsData];
    newData.unshift(tempMessage);
    setChatsData(newData);
    setRoomsData((prev) => {
      const roomIndex = prev?.findIndex(
        (innerItem) => innerItem?._id === msg?.roomId
      );
      if (roomIndex == -1) {
        return [...prev];
      } else {
        const temp = [...prev];
        temp[roomIndex] = {
          ...temp[roomIndex],
          lastMessage: {
            ...temp[roomIndex]?.lastMessage,
            message: msg.message,
          },
          createdAt: msg.createdAt,
        };
        return temp;
      }
    });
    socket.current?.emit("chat-message", msg);

    setRoomsData((prev) => {
      const roomIndex = prev?.findIndex(
        (innerItem) => innerItem?._id === msg?.chat?.room
      );
      if (roomIndex !== -1) {
        const updatedRoom = {
          ...prev[roomIndex],

          lastMessage: {
            ...prev[roomIndex]?.lastMessage,
            message: msg?.chat?.message,
          },
          createdAt: msg?.chat?.createdAt,
        };
        const updatedRoomsData = [
          updatedRoom,
          ...prev.slice(0, roomIndex),
          ...prev.slice(roomIndex + 1),
        ];
        return updatedRoomsData;
      }
      return prev;
    });
    return true;
  };
  useEffect(() => {
    isMobileViewHook(setIsMobile, 1200);
  }, []);

  // Load messages from dummy data when a room is selected
  useEffect(() => {
    if (selectedRoom && selectedRoom.messages) {
      setChatsData(selectedRoom.messages);
      setChatsTotalCount(selectedRoom.messages.length);
      scrollToBottom();
    } else {
      setChatsData([]);
      setChatsTotalCount(0);
    }
  }, [selectedRoom]);
  //   useEffect(() => {
  //     getAllRooms(1);
  //   }, [debounceSearchTerm]);
  //   useEffect(() => {
  //     if (selectedRoom) {
  //       getAllChats();
  //       socket.current?.emit("join-room", {
  //         roomId: selectedRoom?._id,
  //       });
  //       socket.current?.on("chat-message", (msg) => {
  //         if (selectedRoom?._id === msg?.chat?.room) {
  //           setChatsData((prev) => [{ ...msg?.chat }, ...prev]);
  //         }
  //         scrollToBottom();
  //         setRoomsData((prev) => {
  //           const roomIndex = prev?.findIndex(
  //             (innerItem) => innerItem?._id === msg?.chat?.room
  //           );
  //           if (roomIndex !== -1) {
  //             const isSameRoom = msg?.chat?.room == selectedRoom?._id;
  //             const newUsers = prev[roomIndex]?.users?.map((u) => {
  //               if (u?.userId?._id == user?._id) {
  //                 return {
  //                   ...u,
  //                   unreadCount: u?.unreadCount ? u?.unreadCount + 1 : 1,
  //                 };
  //               }
  //               return u;
  //             });
  //             const updatedRoom = {
  //               ...prev[roomIndex],
  //               lastMessage: {
  //                 ...prev[roomIndex]?.lastMessage,
  //                 message: msg?.chat?.message,
  //               },
  //               ...(!isSameRoom && {
  //                 users: newUsers,
  //               }),
  //               createdAt: msg?.chat?.createdAt,
  //             };
  //             const updatedRoomsData = [
  //               updatedRoom,
  //               ...prev.slice(0, roomIndex),
  //               ...prev.slice(roomIndex + 1),
  //             ];
  //             return updatedRoomsData;
  //           }
  //         });
  //       });
  //     }

  //     return () => {
  //       socket.current?.off("chat-message");
  //     };
  //   }, [selectedRoom]);
  //   useEffect(() => {
  //     if (socket?.current) {
  //       socket.current?.on("new-room", (newRoom) => {
  //         const { room } = newRoom;
  //         setRoomsData((prev) => {
  //           const roomExistIndex = prev?.findIndex((ele) => {
  //             return ele?._id == room?._id;
  //           });
  //           if (roomExistIndex !== -1) {
  //             const updatedRooms = [...prev];
  //             updatedRooms[roomExistIndex] = {
  //               ...prev[roomExistIndex],
  //               users: [...room?.users],
  //               lastMessage: {
  //                 ...prev[roomExistIndex]?.lastMessage,
  //                 message: room?.lastMessage?.message,
  //               },
  //               createdAt: room?.createdAt,
  //             };
  //             return updatedRooms;
  //           } else {
  //             return [room, ...prev];
  //           }
  //         });
  //       });
  //       socket.current?.on("update-room", (msg) => {
  //         const { updatedRoom: room } = msg;
  //         setRoomsData((prev) => {
  //           const roomExistIndex = prev?.findIndex((ele) => {
  //             return ele?._id == room?._id;
  //           });
  //           if (roomExistIndex !== -1) {
  //             const updatedRooms = [...prev];
  //             const roomUsers = prev[roomExistIndex]?.users?.map((u) => {
  //               if (u?.userId?._id == user?._id) {
  //                 return {
  //                   ...u,
  //                   unreadCount: u?.unreadCount ? u?.unreadCount + 1 : 1,
  //                 };
  //               }
  //               return u;
  //             });

  //             updatedRooms[roomExistIndex] = {
  //               ...prev[roomExistIndex],
  //               users: room?.users,
  //               lastMessage: {
  //                 ...prev[roomExistIndex]?.lastMessage,
  //                 message: room?.lastMessage?.message,
  //               },
  //               createdAt: room?.createdAt,
  //               ...(selectedRoom?._id != room?._id && {
  //                 users: roomUsers,
  //               }),
  //             };
  //             return updatedRooms;
  //           }
  //           return prev;
  //         });
  //       });
  //     }
  //     return () => {
  //       socket.current?.off("new-room");
  //     };
  //   }, []);
  return (
    <>
      <main className={classes.main}>
        <div className={classes.content}>
          <Row>
            {isMobile ? (
              selectedRoom == null ? (
                <Col>
                  <RenderRoom
                    roomsData={roomsData}
                    roomsLoading={roomsLoading}
                    setSelectedRoom={setSelectedRoom}
                    selectedRoom={selectedRoom}
                    roomsPage={roomsPage}
                    roomsTotalCount={roomsTotalCount}
                    setRoomsPage={setRoomsPage}
                    setSearch={setSearch}
                    search={search}
                    setChatsPage={setChatsPage}
                    setChatsData={setChatsData}
                    setRoomsData={setRoomsData}
                    getAllRooms={getAllRooms}
                    setRoomsTotalCount={setRoomsTotalCount}
                  />
                </Col>
              ) : (
                <Col>
                  <RenderChats
                    selectedRoom={selectedRoom}
                    chatsData={chatsData}
                    chatsLoading={chatsLoading}
                    chatsPage={chatsPage}
                    setChatsData={setChatsData}
                    chatsTotalCount={chatsTotalCount}
                    setChatsPage={setChatsPage}
                    isMobile={isMobile}
                    sendMsg={sendMsg}
                    scrollToBottom={scrollToBottom}
                    msgEndRef={msgEndRef}
                    getAllChats={getAllChats}
                    setSelectedRoom={setSelectedRoom}
                    setRoomsData={setRoomsData}
                    setRoomsTotalCount={setRoomsTotalCount}
                    mediaLoading={uploadMediaLoading}
                  />
                </Col>
              )
            ) : (
              <>
                <Col lg={4}>
                  <RenderRoom
                    roomsData={roomsData}
                    setRoomsData={setRoomsData}
                    roomsLoading={roomsLoading}
                    selectedRoom={selectedRoom}
                    setSelectedRoom={setSelectedRoom}
                    roomsPage={roomsPage}
                    setRoomsPage={setRoomsPage}
                    search={search}
                    setSearch={setSearch}
                    setChatsPage={setChatsPage}
                    setChatsData={setChatsData}
                    getAllRooms={getAllRooms}
                    roomsTotalCount={roomsTotalCount}
                    setRoomsTotalCount={setRoomsTotalCount}
                  />
                </Col>
                <Col lg={8}>
                  {selectedRoom ? (
                    <RenderChats
                      selectedRoom={selectedRoom}
                      setSelectedRoom={setSelectedRoom}
                      setRoomsData={setRoomsData}
                      chatsData={chatsData}
                      chatsLoading={chatsLoading}
                      chatsPage={chatsPage}
                      setChatsPage={setChatsPage}
                      chatsTotalCount={chatsTotalCount}
                      isMobile={isMobile}
                      sendMsg={sendMsg}
                      scrollToBottom={scrollToBottom}
                      msgEndRef={msgEndRef}
                      getAllChats={getAllChats}
                      setRoomsTotalCount={setRoomsTotalCount}
                      mediaLoading={uploadMediaLoading}
                    />
                  ) : (
                    <div className={classes.chat_main}>
                      <NoData text="No Room Selected" />
                    </div>
                  )}
                </Col>
              </>
            )}
          </Row>
        </div>
      </main>
    </>
  );
}

const RoomsLoader = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        marginBottom: "20px",
        backgroundColor: "var(--secondary-color)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          width: "100%",
          justifyContent: "center",
          padding: "10px",
          height: "70px",
        }}
      >
        <Skeleton animation="wave" variant="text" height={"20px"} width="20%" />
        <Skeleton
          animation="wave"
          variant="text"
          level="body-sm"
          sx={{ width: "90%", height: "20px" }}
          height={"20px"}
          width="90%"
        />
      </div>
    </div>
  );
};
export const ChatLoader = () => {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      marginBottom: "20px",
    },
    chatBox: {
      display: "flex",
      gap: "5px",
      width: "100%",
    },
    avatarContainer: {
      flexShrink: 0,
    },
    textContainer: {
      display: "flex",
      flexDirection: "column",
      gap: "5px",
      width: "100%",
    },
    chatBoxMe: {
      display: "flex",
      gap: "5px",
      width: "100%",
      justifyContent: "flex-end",
    },
    textContainerMe: {
      display: "flex",
      flexDirection: "column",
      gap: "5px",
      justifyContent: "flex-end",
      alignItems: "flex-end",
      width: "100%",
    },
  };

  return (
    <div style={styles.container}>
      {Array(5)
        .fill(0)
        .map((_) => (
          <>
            <div className={classes.chatBox} style={styles.chatBox}>
              <div style={styles.avatarContainer}>
                <Skeleton
                  animation="wave"
                  variant="circular"
                  width={"58px"}
                  height={"58px"}
                />
              </div>
              <div style={styles.textContainer}>
                <Skeleton
                  animation="wave"
                  variant="text"
                  sx={{ width: "20%" }}
                  width="20%"
                  height={"20px"}
                />
                <Skeleton
                  animation="wave"
                  variant="text"
                  level="body-sm"
                  sx={{ width: "90%", height: "40px" }}
                  height={"40px"}
                  width="90%"
                />
              </div>
            </div>
            <div className={classes.chatBoxMe} style={styles.chatBoxMe}>
              <div style={styles.textContainerMe}>
                <Skeleton
                  animation="wave"
                  variant="text"
                  sx={{ width: "20%" }}
                  width="20%"
                  height={"20px"}
                />
                <Skeleton
                  animation="wave"
                  variant="text"
                  level="body-sm"
                  sx={{ width: "90%", height: "40px" }}
                  height={"40px"}
                  width="90%"
                />
              </div>
              <div style={styles.avatarContainer}>
                <Skeleton
                  animation="wave"
                  variant="circular"
                  width={"58px"}
                  height={"58px"}
                />
              </div>
            </div>
          </>
        ))}
    </div>
  );
};
export const showChatUser = (arr, user) => {
  return arr;
  let newArr = arr?.filter((ele) => ele?.userId?._id != user?._id);
  let newMain = [];
  for (let index = 0; index < newArr.length; index++) {
    const element = newArr[index];

    newMain?.push({
      ...element,
    });
  }
  return newMain?.filter((ele) => ele?.userId?._id != user?._id);
};
