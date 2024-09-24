import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import "./index.css";
import {ErrorPage, LandingPage, LoginPage} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  // {
  //   path: "/course",
  //   element: (
  //     <AuthProvider>
  //       <ProtectedPageLayout />
  //     </AuthProvider>
  //   ),

  //   errorElement: <ErrorPage />,
  // },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
