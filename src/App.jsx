import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AuthProvider} from "./hooks";
import {ErrorPage, LandingPage, LoginPage, ProtectedPageLayout} from "./pages";

export const App = () => {
  const AppRoute = () => (
    <Routes>
      <Route path="/" element={<LandingPage />} errorElement={<ErrorPage />} />
      <Route path="/login" element={<LoginPage />} errorElement={<ErrorPage />} />
      <Route
        path="/course"
        element={
          <ProtectedPageLayout>
            {" "}
            <h1>Protected</h1>{" "}
          </ProtectedPageLayout>
        }
        errorElement={<ErrorPage />}
      />
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
