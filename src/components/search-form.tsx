import { Search } from "lucide-react";
import { Funnel } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarInput,
} from "@/components/ui/sidebar";

export function SearchForm({ ...props }: React.ComponentProps<"form">) {
  return (
    <form {...props}>
      <SidebarGroup className="py-0">
        <SidebarGroupContent className="relative">
          <Label htmlFor="search" className="sr-only">
            Search
          </Label>
          <div className="flex items-center gap-2">
            <SidebarInput id="search" className="pl-8" />
            <Funnel />
          </div>

          <Search className="pointer-events-none absolute left-2 top-1/2 size-4 -translate-y-1/2 select-none opacity-50" />
        </SidebarGroupContent>
      </SidebarGroup>
      <Button className="mt-4 ml-3" variant="outline">
        Playlist
      </Button>
    </form>
  );
}
