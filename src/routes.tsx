import { createBrowserRouter, Outlet } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import CategoryPage from "./pages/Admin/Categories.tsx/CategoryPage";
import CategoryList from "./pages/Admin/Categories.tsx/CategoryList";
import { AudioPage } from "./pages/Creator/AudioPage";
import {
  AuthGuard,
  LoginAuthGuard,
  AdminAuthGuard,
} from "./components/AuthGuard";
import { UserProfilePage } from "./pages/UserProfilePage";
import { UserAudioPage } from "./pages/UserAudioPage";
import { LandingPage } from "./pages/LandingPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "signup",
    element: (
      <LoginAuthGuard>
        <SignUpPage />
      </LoginAuthGuard>
    ),
  },
  {
    path: "login",
    element: (
      <LoginAuthGuard>
        <LoginPage />
      </LoginAuthGuard>
    ),
  },

  {
    path: "dashboard",
    element: (
      <AuthGuard>
        <Dashboard />
      </AuthGuard>
    ),
  },
  {
    path: "/audio-page",
    element: (
      <AuthGuard>
        <UserAudioPage />
      </AuthGuard>
    ),
  },
  {
    path: "logout",
    element: (
      <AuthGuard>
        <Dashboard />
      </AuthGuard>
    ),
  },
  {
    path: "user-profile",
    element: (
      <AuthGuard>
        <UserProfilePage />
      </AuthGuard>
    ),
  },
  {
    path: "/admin/categories",
    element: (
      <AdminAuthGuard>
        <Outlet />
      </AdminAuthGuard>
    ),
    children: [
      {
        path: "",
        element: <CategoryPage />,
      },
      {
        path: ":id",
        element: <CategoryList />,
      },
    ],
  },
  {
    path: "/dashboard/creator/audio-page",
    element: (
      <AuthGuard>
        <AudioPage />
      </AuthGuard>
    ),
  },
]);
