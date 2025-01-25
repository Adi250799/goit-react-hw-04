import Modal from "react-modal";
import css from "./ModalWindow.module.css";
import { useContext } from "react";
import { imageContext } from "../../providers/ImageProvider";

Modal.setAppElement("#root");

export const ModalWindow = ({ close, open }) => {
  const { image } = useContext(imageContext);
  return (
    <Modal
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
        },
      }}
      isOpen={open}
      onRequestClose={close}
    >
      <img className={css.img} src={image} alt="Large image" />
    </Modal>
  );
};