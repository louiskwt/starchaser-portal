import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AuthProvider} from "./hooks";
import {CoursePage, ErrorPage, LandingPage, LoginPage} from "./pages";

export const App = () => {
  const AppRoute = () => (
    <Routes>
      <Route path="/" element={<LandingPage />} errorElement={<ErrorPage />} />
      <Route path="/login" element={<LoginPage />} errorElement={<ErrorPage />} />
      <Route path="/course" element={<CoursePage />} errorElement={<ErrorPage />} />
    </Routes>
  );

  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoute />
      </AuthProvider>
    </BrowserRouter>
  );
};
