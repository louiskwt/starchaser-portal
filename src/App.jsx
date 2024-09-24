import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AuthProvider} from "./hooks";
import {LandingPage, LoginPage} from "./pages";

export const App = () => {
  const AppRoute = () => (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
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
