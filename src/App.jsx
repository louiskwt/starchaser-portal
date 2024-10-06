import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ErrorBoundary, ProtectedRoute, Toast} from "./components";
import {AuthProvider, NotesProvider, ToastProvider} from "./hooks";
import {ErrorPage, ForgotPasswordPage, LandingPage, LoginPage, NotePage, NotesIndexPage, ProfilePage, RegisterPage} from "./pages";

export const App = () => {
  const AppRoute = () => (
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<LandingPage />} errorElement={<ErrorPage />} />
        <Route path="/login" element={<LoginPage />} errorElement={<ErrorPage />} />
        <Route path="/register" element={<RegisterPage />} errorElement={<ErrorPage />} />
        <Route path="/forgotpassword" element={<ForgotPasswordPage />} errorElement={<ErrorPage />} />
        <Route path="/profile" element={<ProtectedRoute element={<ProfilePage />} />} errorElement={<ErrorPage />} />
        <Route path="/notes" element={<ProtectedRoute element={<NotesIndexPage />} errorElement={<ErrorPage />} />}>
          <Route path=":noteId" element={<ProtectedRoute element={<NotePage />} />} errorElement={<ErrorPage />} />
        </Route>
      </Routes>
    </ErrorBoundary>
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
