import { initializeApp } from "firebase/app";
import { Route, Routes } from "react-router-dom";
import { config } from "./config/config";
import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/LoginPage";

initializeApp(config.firebaseConfig);

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
