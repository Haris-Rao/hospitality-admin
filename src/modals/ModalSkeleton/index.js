"use client";

import { Modal } from "react-bootstrap";
import classes from "./modalSkeleton.module.css";
import { AiOutlineClose } from "react-icons/ai";
import DetailSection from "@/components/DetailSection";

export default function ModalSkeleton({
  show,
  setShow,
  header,
  actions = [],
  children,
  hideHeaderBorder,
  footerStyles,
  showCloseIcon,
  width,
  borderLine = true,
  modalDetailsClass,
  noPadding,
  footerContainer,
}) {
  function handleClose() {
    setShow(false);
  }

  // Prepare rightActions for DetailSection
  const rightActions = showCloseIcon
    ? {
        close: (
          <div className={classes.iconBox} onClick={handleClose} key="close">
            <AiOutlineClose size={16} />
          </div>
        ),
      }
    : {};

  return (
    <>
      <style>{`
       
        .modal-dialog-centered {
          height: 100% !important;
        }
        .modal-header {
          border-bottom: none !important;
        }
        .modal-header {
          border-bottom: ${
            hideHeaderBorder ? "none" : `1px solid var(--main-color-yellow)`
          };
        }
        .modal-footer {
          margin: 0px;
          display: unset;
          justify-content: unset;
          align-items: unset;
          padding: ${!borderLine ? "15px 30px" : "0px"};
        }
        .${classes.header} button {
          color: var(--black-color) !important;
        }
        .modal-content {
          margin: ${true ? `0 auto 0 auto` : `0 0 0 auto`};
          padding: ${noPadding ? 0 : `25px`};
          backdrop-filter: blur(10px);
          border-radius: 10px;
          // border: 1px solid var(--border-color);
        }
        .modal-body{
          height:auto !important;
        }
        .modal .modal-dialog {
          max-width: ${width};
          width: 100%;
          margin: ${true ? `0 auto 0 auto` : `0 0 0 auto`};
        }
       
        @media screen and (max-width: 992px) {
          .modal .modal-dialog {
            max-width: 70%;
          }
        }
        @media screen and (max-width: 768px) {
          .modal .modal-dialog {
            max-width: 80%;
          }
        }
        @media screen and (max-width: 575px) {
          .modal .modal-dialog {
            max-width: 90%;
          }
        }
      `}</style>

      <Modal
        show={show}
        onHide={handleClose}
        centered
        className={`  ${[classes.modal].join(" ")} `}
      >
        <DetailSection
          title={header}
          rightActions={rightActions}
          modalDetailsClass={modalDetailsClass}
        >
          {children}
        </DetailSection>
        {actions && <div className={classes.actions}>{actions}</div>}
        {footerContainer && (
          <div className={classes.footerContainer}>{footerContainer}</div>
        )}
      </Modal>
    </>
  );
}
