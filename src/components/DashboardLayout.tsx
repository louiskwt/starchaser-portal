import { ReactElement } from "react";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useAuth } from "../context/AuthContext";

interface DashboardLayoutProps {
  children: ReactElement;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const { user } = useAuth();
  return (
    <>
      <Navbar />
      <main>
        <div className="flex flex-col md:flex-row">
          {!user ? (
            <div className="flex flex-col mt-80 mx-auto">
              <Loader />
            </div>
          ) : (
            <>
              <Sidebar />
              {children}
            </>
          )}
        </div>
      </main>
    </>
  );
};

export default DashboardLayout;
