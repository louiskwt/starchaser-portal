import {Dashboard} from "../components";
import {ProtectedPageLayout} from "./protectedPageLayout";

export const ProfilePage = () => {
  return (
    <ProtectedPageLayout>
      <Dashboard />
    </ProtectedPageLayout>
  );
};
