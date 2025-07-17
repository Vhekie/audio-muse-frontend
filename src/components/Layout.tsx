import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { SidebarInput } from "@/components/ui/sidebar";
import { User, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useUserStore } from "@/stores/useUserStore";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useGetAllAudios } from "@/hooks/queries/useAudios";
import { useState } from "react";

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const { logout } = useUserStore();
  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };
  const { data: audios } = useGetAllAudios();
  const [searchAudios, setSearchAudios] = useState("");
  const filteredAudios = audios?.filter((audio) =>
    audio.title.toLowerCase().includes(searchAudios.toLowerCase())
  );

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb className="flex items-center justify-between w-full px-4">
            <BreadcrumbList className="flex gap-4 ">
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">
                  <Button
                    className="rounded-full text-white "
                    variant="outline"
                  >
                    Discover
                  </Button>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">Music</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">Sound Effect</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
            <div className="hidden md:block w-full max-w-md px-4">
              <SidebarInput
                id="search"
                className="pl-8"
                value={searchAudios}
                onChange={(e) => setSearchAudios(e.target.value)}
              />
              {searchAudios && filteredAudios && filteredAudios.length > 0 ? (
                filteredAudios.map((audio) => (
                  <div key={audio._id}>
                    <p>{audio.title}</p>
                  </div>
                ))
              ) : searchAudios ? (
                <p>No Audio Found</p>
              ) : null}
            </div>
            <div className="flex  items-center gap-4">
              <Link to={"/user-profile"}>
                <User />
              </Link>
              <Bell />
              <Button onClick={handleLogout} variant="outline">
                Logout
              </Button>
            </div>
          </Breadcrumb>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">{children} </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
