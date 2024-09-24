import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AuthProvider} from "./hooks";
import {LandingPage, LoginPage, ProtectedPageLayout} from "./pages";

export const App = () => {
  const AppRoute = () => (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/course"
        element={
          <ProtectedPageLayout>
            {" "}
            <h1>Protected</h1>{" "}
          </ProtectedPageLayout>
        }
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
