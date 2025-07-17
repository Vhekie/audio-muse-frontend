import { Button } from "@/components/ui/button";
import { AudioUploadForm } from "./AudioUpload";
import { DashboardLayout } from "@/components/Layout";
import { Modal } from "@/components/ui/modal";
import { useState, useRef, useEffect } from "react";
import { useGetAllCreatorAudios } from "@/hooks/queries/useAudios";
import { Play, Pause, Mic, Heart, Ellipsis, Plus } from "lucide-react";
import type { Audio } from "@/types";
import WavesurferPlayer from "@wavesurfer/react";
import { BadgeCheck } from "lucide-react";
import { useUserStore } from "@/stores/useUserStore";

export function AudioPage() {
  const { data: audios } = useGetAllCreatorAudios();
  const { user } = useUserStore();
  console.log(audios);

  const [openModal, setOpenModal] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentAudio, setCurrentAudio] = useState<Audio>();
  const [wavesurfer, setWavesurfer] = useState(null);
  const [duration, setDuration] = useState<number | null>(null);
  const [durations, setDurations] = useState<Record<string, string>>({});

  //create single ref
  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlay = (audio: Audio) => {
    if (audioRef.current) {
      setIsPlaying(true);
      audioRef.current.src = audio.url;
      audioRef.current.play();
      setCurrentAudio(audio);
    }
  };

  const handlePause = (audio: Audio) => {
    if (audioRef.current && isPlaying) {
      setIsPlaying(false);
      audioRef.current.pause();
    }
  };
  const onReady = (ws) => {
    setWavesurfer(ws);
    setIsPlaying(false);
  };

  return (
    <DashboardLayout>
      <Modal
        open={openModal}
        setOpen={setOpenModal}
        heading="Audio Upload"
        headingDescription="Upload Audio"
        content={
          <AudioUploadForm
            onFinish={() => {
              setOpenModal(false);
            }}
          />
        }
        onConfirm={() => {}}
        trigger={
          <div className="flex justify-end">
            <Button className="w-fit" variant="outline">
              Upload Audio
            </Button>
          </div>
        }
        renderFooter={false}
      />
      <audio ref={audioRef} src={undefined} preload="metadata" hidden />

      <div className="flex border-2 rounded p-5 mb-12">
        <div className="p-8 leading-loose bg-[url('/Background.png')] w-full  items-center">
          <div className="flex items-center gap-2 mb-4">
            <BadgeCheck fill="green" />
            <div>Verified Artist</div>
          </div>
          <div className="text-5xl font-bold ">{user?.firstName}</div>
          <div>{120} Monthly listeners</div>
        </div>
      </div>
      {audios?.map((audio) => {
        return (
          <div
            key={audio._id}
            //className="px-8 grid grid-cols-[auto_auto_auto_auto_min-content] gap-4 items-center"
            className="grid grid-cols-5 gap-4 items-center px-8 py-4"
          >
            {/*  section 1 */}
            <div className=" flex flex-1 items-center space-x-4 w-[200px] shrink-0 py-4">
              <div>
                {isPlaying && currentAudio?._id === audio._id ? (
                  <Button
                    onClick={() => handlePause(audio)}
                    className="h-14 w-14 rounded-full bg-muted text-muted-foreground p-0 flex items-center justify-center"
                  >
                    <Pause className="h-9 w-9 " />
                  </Button>
                ) : (
                  <Button
                    onClick={() => handlePlay(audio)}
                    className="h-14 w-14 rounded-full bg-muted text-muted-foreground p-0 flex items-center justify-center"
                  >
                    <Play className="h-9 w-9" />
                  </Button>
                )}
              </div>

              <div className="flex flex-col overflow-hidden">
                <span className="truncate "> {audio.title}</span>
                <div className="text-xs truncate ">
                  {audio.userId.firstName}
                </div>
              </div>
            </div>
            {/* section 2*/}
            <div
              // className=" flex flex-1 items-center space-x-1 py-4 w-20"
              className="flex items-center space-x-2 overflow-hidden"
            >
              <span className="bg-purple-600 text-white h-5 w-5 rounded-full  p-0 flex items-center justify-center">
                <Mic className="h-3 w-3 " />
              </span>
              <WavesurferPlayer
                height={30}
                width={200}
                waveColor="white"
                url={audio.url}
                onReady={onReady}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />
            </div>
            {/* section 3 */}
            <p
              // className="py-4 w-20 space-x-1"
              className="text-sm text-center"
            >
              {durations[audio._id]}
            </p>
            <audio
              src={audio.url}
              preload="metadata"
              hidden
              onLoadedMetadata={(e) => {
                const { duration } = e.target as HTMLAudioElement;
                setDurations((prev) => {
                  return {
                    ...prev,
                    [audio._id]: `${Math.floor(duration / 60)}:${Math.floor(
                      duration % 60
                    )
                      .toString()
                      .padStart(2, "0")}`,
                  };
                });
              }}
            />
            {/* section 4 */}
            <div className="py-4 w-20">{audio.categoryId.name}</div>

            {/*  section 5 */}
            <div className="flex justify-center items-center gap-x-2 w-20">
              <Heart className="w-7 h-7" />
              <Plus className="w-7 h-7" />
              <Ellipsis className="w-7 h-7" />
            </div>
          </div>
        );
      })}
    </DashboardLayout>
  );
}
