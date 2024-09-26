import {useToast} from "../../hooks";

export const Toast = () => {
  const {toast, clearToast} = useToast();
  const {shown, type, message} = toast;

  const getToastClass = () => {
    switch (type) {
      case "success":
        return "alert alert-success"; // DaisyUI success alert
      case "error":
        return "alert alert-error"; // DaisyUI error alert
      case "info":
        return "alert alert-info text-md"; // DaisyUI info alert
      default:
        return "alert"; // Default alert
    }
  };

  const toastClass = getToastClass();

  return (
    shown && (
      <div className={`toast toast-top toast-end`}>
        <div className={`${toastClass} text-lg`}>
          <span>{message}</span>
          <button
            className="btn btn-lg btn-ghost ml-2"
            onClick={() => clearToast()} // Close the toast
          >
            ×
          </button>
        </div>
      </div>
    )
  );
};
