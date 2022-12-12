import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles.css";

const notify = (message) => {
  toast(message, {
    // bodyClassName={() => "text-sm font-white font-med block p-3"}
    className: "toast-message",
    autoClose: 1500,
  });
};

export default notify;
