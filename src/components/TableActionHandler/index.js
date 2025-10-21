import { BiEdit } from "react-icons/bi";
import { IoBanOutline, IoCheckmarkOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { IoEyeOutline } from "react-icons/io5";
import classes from "./TableActionHandler.module.css";
import { LuArrowRightToLine, LuPrinter } from "react-icons/lu";
import { FaEye, FaStar } from "react-icons/fa6";
import { GoCircleSlash } from "react-icons/go";
import { LiaFileDownloadSolid } from "react-icons/lia";

import { AiOutlineDelete } from "react-icons/ai";
import { TbCancel } from "react-icons/tb";

function TableActionHandler(props) {
  return (
    <div className={classes.tableActions}>
      {Object.entries(props).map(([key, handler]) => {
        const Icon = icons[key];
        return (
          Icon && (
            <div
              key={key}
              onClick={handler}
              className={classes?.iconDiv}
              datatype={squareShapes.includes(key) ? key : "basic"}
            >
              {Icon}
            </div>
          )
        );
      })}
    </div>
  );
}

export default TableActionHandler;

const icons = {
  onView: <FaEye />,
  onEdit: <BiEdit />,
  onDelete: <AiOutlineDelete />,
  onApprove: <GoCircleSlash />,
  onReject: <RxCross2 />,
  onAssign: <LuArrowRightToLine />,
  onPrint: <LuPrinter />,
  onCancel: <TbCancel />,
  onExport: <LiaFileDownloadSolid />,
  onReview: <FaStar />,
};
const squareShapes = [
  "onView",
  "onDelete",
  "onAssign",
  "onEdit",
  "onExport",
  "onReview",
];
