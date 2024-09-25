import React from "react";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../hooks";
import {ProtectedPageLayout} from "./protectedPageLayout";

export const CoursePage = () => {
  const {user} = useAuth();
  const navigate = useNavigate();
  if (!user) {
    return navigate("/login");
  }
  return (
    <ProtectedPageLayout>
      <h1>Welcome to course</h1>
    </ProtectedPageLayout>
  );
};
