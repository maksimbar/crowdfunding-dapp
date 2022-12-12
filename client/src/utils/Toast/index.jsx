import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles.css";

const notify = (message) => {
  toast(message, {
    position: toast.POSITION.BOTTOM_RIGHT,
    className: "toast-message",
    autoClose: 1500,
  });
};

export default notify;
