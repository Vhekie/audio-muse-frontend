import { useGetAllAudios } from "@/hooks/queries/useAudios";
import { useDownloadAudio } from "@/hooks/mutations/useDownloads";
import { Ellipsis, Heart, Mic, Pause, Play, Plus } from "lucide-react";
import { useRef, useState } from "react";
import type { Audio, DownloadsData } from "@/types";
import { Button } from "@/components/ui/button";
import WavesurferPlayer from "@wavesurfer/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
export function Audios() {
  const { mutateAsync: downloadAudio } = useDownloadAudio();
  const { data: audios } = useGetAllAudios();
  console.log(audios);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentAudio, setCurrentAudio] = useState<Audio>();
  const [wavesurfer, setWavesurfer] = useState(null);
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
  const handleDownload = async (audio: Audio) => {
    await downloadAudio(audio._id);
    window.open(audio.url);
  };
  const handleAudioLike = () => {
    //when the button is clicked, the icon changes to filled with red and vice versa
    //the audio is added to the like tracks
  };
  return (
    <div>
      <audio ref={audioRef} src={undefined} preload="metadata" hidden />
      {audios?.map((audio) => {
        return (
          <div
            key={audio._id}
            //className="px-8 grid grid-cols-[auto_auto_auto_auto_min-content] gap-4 items-center"
            className="grid grid-cols-5 gap-4 items-center px-8 py-1"
          >
            {/*  section 1 */}
            <div className=" flex flex-1 items-center space-x-4 w-[200px] shrink-0 py-1">
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
                    <Play className="h-9 w-9 fill-white" />
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
            <div className="flex items-center justify-between gap-3 w-30">
              <Heart onClick={() => handleAudioLike} className="w-7 h-7 mr-4" />
              <Plus className="w-7 h-7 mr-4" />
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Ellipsis className="w-7 h-7" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => handleDownload(audio)}>
                    Download
                  </DropdownMenuItem>
                  <DropdownMenuItem>Share</DropdownMenuItem>
                  <DropdownMenuItem>Save</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        );
      })}
    </div>
  );
}
// mutation to downloads, send the currentid of the audio that wanys to be  downloaded,
// check if user has not downloaded the id before,
// if no create the download, add the no of points the download cost
