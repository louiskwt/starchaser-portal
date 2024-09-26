import {createContext, useContext, useState} from "react";

const ToastContext = createContext();

export const ToastProvider = ({children}) => {
  const initialToastState = {
    shown: false,
    type: null,
    message: null,
  };
  const [toast, setToast] = useState(initialToastState);

  const showToast = (toastProperties) => {
    const {type, message} = toastProperties;
    setToast({type, message, shown: true});
  };

  const clearToast = () => {
    setToast(initialToastState);
  };

  return <ToastContext.Provider value={{toast, showToast, clearToast}}>{children}</ToastContext.Provider>;
};

export const useToast = () => {
  return useContext(ToastContext);
};
