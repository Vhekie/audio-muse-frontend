import * as React from "react";
import { useNavigate } from "react-router-dom";
import { SearchForm } from "@/components/search-form";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { useUserStore } from "@/stores/useUserStore";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { user } = useUserStore();
  const navigate = useNavigate();

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <img
          src="/audiomuselogo.png"
          alt="Logo"
          onClick={() => navigate("/dashboard")}
        />
        <p className="text-sm pt-6">Your Library</p>
        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
        <div className="flex items-center gap-2 border border-#2d2d2d px-4 py-6 ml-4 mr-4">
          <img src="/icons/plus.png" />
          <p>New playlist or project</p>
        </div>
        <div className="flex items-center gap-2 border border-#2d2d2d px-4 py-6 ml-4 mr-4">
          <img src="/icons/heart.png" />
          <p>Liked Tracks</p>
        </div>
        <div className="flex items-center gap-2 border border-#2d2d2d px-4 py-6 ml-4 mr-4">
          <img src="/icons/N.png" />
          <p>
            Night Beauty <br /> 1 track
          </p>
        </div>
        {user?.role === "admin" ? (
          <div className="flex items-center gap-2 border border-#2d2d2d px-4 py-6 ml-4 mr-4">
            <img
              src="/icons/plus.png"
              alt="add category"
              className="cursor-pointer"
              onClick={() => navigate("/admin/categories")}
            />
            <p>Create Category</p>
          </div>
        ) : null}
        {user?.role === "user" ? (
          <div className="flex items-center gap-2 border border-#2d2d2d px-4 py-6 ml-4 mr-4">
            <img
              src="/icons/plus.png"
              alt="add category"
              className="cursor-pointer"
              onClick={() => navigate("/audio-page")}
            />
            <p>My Audio</p>
          </div>
        ) : null}
        {user?.role === "creator" ? (
          <div className="flex items-center gap-2 border border-#2d2d2d px-4 py-6 ml-4 mr-4">
            <img
              src="/icons/plus.png"
              alt="add category"
              className="cursor-pointer"
              onClick={() => navigate("/creator/audio-page")}
            />
            <p>My Audio</p>
          </div>
        ) : null}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
