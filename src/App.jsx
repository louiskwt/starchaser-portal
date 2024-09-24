import React from "react";
import {BrowserRouter} from "react-router-dom";
import {AuthProvider} from "./hooks";

export const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>{/* Your routes go here */}</AuthProvider>
    </BrowserRouter>
  );
};
