import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Toast} from "./components";
import {AuthProvider, ToastProvider} from "./hooks";
import {CoursePage, ErrorPage, ForgotPasswordPage, LandingPage, LoginPage, RegisterPage} from "./pages";

export const App = () => {
  const AppRoute = () => (
    <Routes>
      <Route path="/" element={<LandingPage />} errorElement={<ErrorPage />} />
      <Route path="/login" element={<LoginPage />} errorElement={<ErrorPage />} />
      <Route path="/register" element={<RegisterPage />} errorElement={<ErrorPage />} />
      <Route path="/forgotpassword" element={<ForgotPasswordPage />} errorElement={<ErrorPage />} />
      <Route path="/course" element={<CoursePage />} errorElement={<ErrorPage />} />
    </Routes>
  );

  return (
    <BrowserRouter>
      <AuthProvider>
        <ToastProvider>
          <AppRoute />
          <Toast />
        </ToastProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};
