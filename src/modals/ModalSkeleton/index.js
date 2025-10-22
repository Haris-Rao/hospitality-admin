// "use client";

// import { Modal } from "react-bootstrap";
// import classes from "./modalSkeleton.module.css";
// import { AiOutlineClose } from "react-icons/ai";

// export default function ModalSkeleton({
//   show,
//   setShow,
//   header,
//   actions = [],
//   children,
//   hideHeaderBorder,
//   footerStyles,
//   showCloseIcon,
//   width,
//   borderLine = true,
//   modalDetailsClass,
//   noPadding,
//   footerContainer,
// }) {
//   function handleClose() {
//     setShow(false);
//   }

//   // Prepare rightActions for DetailSection
//   const rightActions = showCloseIcon
//     ? {
//         close: (
//           <div className={classes.iconBox} onClick={handleClose} key="close">
//             <AiOutlineClose size={16} />
//           </div>
//         ),
//       }
//     : {};

//   return (
//     <>
//       <style>{`

//         .modal-dialog-centered {
//           height: 100% !important;
//         }
//         .modal-header {
//           border-bottom: none !important;
//         }
//         .modal-header {
//           border-bottom: ${
//             hideHeaderBorder ? "none" : `1px solid var(--main-color-yellow)`
//           };
//         }
//         .modal-footer {
//           margin: 0px;
//           display: unset;
//           justify-content: unset;
//           align-items: unset;
//           padding: ${!borderLine ? "15px 30px" : "0px"};
//         }
//         .${classes.header} button {
//           color: var(--black-color) !important;
//         }
//         .modal-content {
//           margin: ${true ? `0 auto 0 auto` : `0 0 0 auto`};
//           padding: ${noPadding ? 0 : `25px`};
//           backdrop-filter: blur(10px);
//           border-radius: 10px;
//           // border: 1px solid var(--border-color);
//         }
//         .modal-body{
//           height:auto !important;
//         }
//         .modal .modal-dialog {
//           max-width: ${width};
//           width: 100%;
//           margin: ${true ? `0 auto 0 auto` : `0 0 0 auto`};
//         }

//         @media screen and (max-width: 992px) {
//           .modal .modal-dialog {
//             max-width: 70%;
//           }
//         }
//         @media screen and (max-width: 768px) {
//           .modal .modal-dialog {
//             max-width: 80%;
//           }
//         }
//         @media screen and (max-width: 575px) {
//           .modal .modal-dialog {
//             max-width: 90%;
//           }
//         }
//       `}</style>

//       <Modal
//         show={show}
//         onHide={handleClose}
//         centered
//         className={`  ${[classes.modal].join(" ")} `}
//       >
//         <DetailSection
//           title={header}
//           rightActions={rightActions}
//           modalDetailsClass={modalDetailsClass}
//         >
//           {children}
//         </DetailSection>
//         {actions && <div className={classes.actions}>{actions}</div>}
//         {footerContainer && (
//           <div className={classes.footerContainer}>{footerContainer}</div>
//         )}
//       </Modal>
//     </>
//   );
// }

"use client";

import { Modal } from "react-bootstrap";
import classes from "./modalSkeleton.module.css";
import { AiOutlineClose } from "react-icons/ai";

export default function ModalSkeleton({
  show,
  setShow,
  header,
  footer,
  children,
  modalClass,
  hideHeaderBorder = false,
  headerStyles,
  footerStyles,
  showCloseIcon,
  width,
  borderLine = true,
  headerClass,
  hideModalBg = false,
  variant = "primary",
  footerClass,
  height = true,
}) {
  function handleClose() {
    setShow(false);
  }
  return (
    <>
      <style>{`
        .modal-dialog-centered {
          height: 100% !important;
        }
        .modal-header {
          padding: ${variant === "secondary" && "14px 22px"};
        }

        .${classes.header} button {
          color: var(--black-color) !important;
        }
        .modal-content {
          margin: ${true ? `0 auto 0 auto` : `0 0 0 auto`};
          background-color: ${hideModalBg ? "transparent" : ""};
          border: ${hideModalBg ? "none" : ""};
          }
        .modal-body{
          max-height: 80vh !important;

        }
        .modal .modal-dialog {
          max-width: ${width};
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
        className={classes.modal}
        contentClassName={classes.modalContent}
      >
        {header && (
          <Modal.Header
            // closeButton
            className={`${[
              classes.header,
              variant === "secondary" && classes.secondaryHeader,
              headerClass && headerClass,
            ].join(" ")}`}
            style={{ ...headerStyles }}
          >
            <h4>{header}</h4>
          </Modal.Header>
        )}
        {showCloseIcon && (
          <div className={classes.iconBox} onClick={handleClose}>
            <AiOutlineClose size={20} color="var(--text-color)" />
          </div>
        )}
        <Modal.Body
          className={`${[classes.body, modalClass && modalClass].join(" ")}`}
        >
          {children}
        </Modal.Body>
        {footer && (
          <Modal.Footer
            className={`${[classes.footer, footerClass && footerClass].join(
              " "
            )}`}
            style={{
              //   borderTop: `1px solid ${Colors.neutralShadesOfGainsboro}`,
              ...footerStyles,
            }}
          >
            {footer}
          </Modal.Footer>
        )}
      </Modal>
    </>
  );
}
