import { DashboardLayout } from "@/components/Layout";

import { Audios } from "@/components/Audios";

export function UserAudioPage() {
  return (
    <DashboardLayout>
      <div className="px-7">
        <p>Find the Perfect Song</p>
        <div className="flex border-1 rounded p-5 mb-12">
          <div>
            <img className="object-cover" src="/secondframe.png" />
          </div>
          <div className="p-8 leading-loose w-full bg-neutral-800 flex flex-col justify-center gap-2">
            <div className="text-lg 	font-light">New releases playlist</div>
            <div className="text-7xl font-bold tracking-wide ">What's New</div>
            <div className="text-lg tracking-wider font-light ">
              Weekly updates of new release from your fav artists
            </div>
          </div>
        </div>
      </div>
      <Audios />
    </DashboardLayout>
  );
}
