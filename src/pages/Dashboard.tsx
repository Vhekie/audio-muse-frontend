import { DashboardLayout } from "@/components/Layout";

import { Audios } from "@/components/Audios";

export default function Page() {
  return (
    <DashboardLayout>
      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="grid auto-rows-min gap-4 md:grid-cols-4">
          <div className="col-span-2">
            <img
              src="/firstframe.png"
              className="w-full h-full object-cover bg-black"
            />
            <p>Nightmare</p>
          </div>

          <div>
            <img
              src="/secondframe.png"
              className="w-full h-full object-cover"
            />
            <p>What's New</p>
          </div>

          <div>
            <img src="/thirdframe.png" className="w-full h-full object-cover" />
            <p>Popular Artist</p>
          </div>
        </div>
        <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 mt-8 md:min-h-min">
          <Audios />
        </div>
      </div>
    </DashboardLayout>
  );
}
