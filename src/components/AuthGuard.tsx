import { useUserStore } from "@/stores/useUserStore";
import React from "react";
import { Navigate } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

export const AuthGuard = ({ children }: Props) => {
  const { checkingAuth, user } = useUserStore();
  if (checkingAuth) {
    return <div>Loading</div>;
  }
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
};
export const LoginAuthGuard = ({ children }: Props) => {
  const { checkingAuth, user } = useUserStore();
  if (checkingAuth) {
    return <div>Loading</div>;
  }
  if (user) {
    return <Navigate to="/dashboard" />;
  }
  return children;
};

export const AdminAuthGuard = ({ children }: Props) => {
  const { checkingAuth, user } = useUserStore();
  if (checkingAuth) {
    return <div>Loading</div>;
  }
  if (user?.role === "admin") {
    return children;
  }
  return <Navigate to="/dashboard" />;
};
