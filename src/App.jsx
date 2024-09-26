import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Toast} from "./components";
import {AuthProvider, NotesProvider, ToastProvider} from "./hooks";
import {ErrorPage, ForgotPasswordPage, LandingPage, LoginPage, ProfilePage, RegisterPage} from "./pages";

export const App = () => {
  const AppRoute = () => (
    <Routes>
      <Route path="/" element={<LandingPage />} errorElement={<ErrorPage />} />
      <Route path="/login" element={<LoginPage />} errorElement={<ErrorPage />} />
      <Route path="/register" element={<RegisterPage />} errorElement={<ErrorPage />} />
      <Route path="/forgotpassword" element={<ForgotPasswordPage />} errorElement={<ErrorPage />} />
      <Route path="/profile" element={<ProfilePage />} errorElement={<ErrorPage />} />
    </Routes>
  );

  return (
    <BrowserRouter>
      <AuthProvider>
        <NotesProvider>
          <ToastProvider>
            <AppRoute />
            <Toast />
          </ToastProvider>
        </NotesProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};
