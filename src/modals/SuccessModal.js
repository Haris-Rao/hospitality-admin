import ModalSkeleton from "modals/ModalSkeleton";
import { Button } from "@/components/Core/Button";
import { RxCross2 } from "react-icons/rx";

const SuccessModal = ({
  show,
  setShow,
  title = "Success!",
  message = "Your action was successful.",
  onOk,
  actions,
}) => {
  return (
    <ModalSkeleton
      show={show}
      setShow={setShow}
      header={title}
      showCloseIcon={true}
      actions={
        actions || [
          <Button
            onClick={onOk || (() => setShow(false))}
            variant={"bordered"}
            rightIcon={<RxCross2 size={18} />}
          >
            Close
          </Button>,
        ]
      }
      width={"700px"}
    >
      <div style={{ padding: "1rem 0" }}>
        <p>{message}</p>
      </div>
    </ModalSkeleton>
  );
};

export default SuccessModal;
