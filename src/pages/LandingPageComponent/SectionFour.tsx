import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
export function SectionFour() {
  return (
    <div className=" bg-[url('/Starlight.png')] w-full ">
      <div className="py-20">
        <p className="  text-center md:text-lg mb-4 ">
          TRENDING - Genres, themes, moods, and sound effects
        </p>
        <h2 className=" text-xl font-bold text-center md:text-6xl mb-2">
          A sound for everything.
        </h2>
        <p className=" w-[90%] text-center md:text-lg m-auto md:w-[65%] mb-4">
          Harness the most extensive collection of music and sound effects
          available. With usage exceeding 2.5 billion daily plays and all rights
          covered, you’re free to publish with confidence anywhere in the world.
        </p>
        <div className="text-center">
          <Button className="border border-black bg-white text-black rounded-4xl  h-10 w-30 ">
            Explore
          </Button>
        </div>
      </div>
      <div className="flex flex-col space-y-2 w-full md:flex-row md:space-x-2 ">
        <div className="relative">
          <img
            className="m-auto items-center w-[80%] h-60 object-cover md:h-[294px] md:w-[259px] md:h-[355.67px]"
            src="image 30.png"
          />
          <p className="m-auto items-center w-[80%] md:block bg-green-600 md:w-[100%] text-black p-1 ">
            Travel
          </p>
          <PlayButton />
        </div>
        <div className="relative">
          <img
            className="m-auto items-center w-[80%] h-60 object-cover md:w-[259px] md:h-[355.67px]"
            src="image 31.png"
          />
          <p className="m-auto items-center w-[80%]  md:block bg-pink-400 md:w-[100%] text-black p-1">
            Sport and Action
          </p>
          <PlayButton />
        </div>
        <div className="relative">
          <img
            className="m-auto items-center w-[80%] h-60 object-cover md:w-[259px] md:h-[355.67px]"
            src="image 32.png"
          />
          <p className="m-auto items-center w-[80%]  md:block bg-yellow-500 md:w-[100%] text-black p-1">
            Gaming Music
          </p>
          <PlayButton />
        </div>
        <div className="relative">
          <img
            className="m-auto items-center w-[80%] h-60 object-cover md:w-[259px] md:h-[355.67px]"
            src="image 33.png"
          />
          <p className="m-auto items-center w-[80%]  md:block bg-orange-700 md:w-[100%] text-black p-1">
            Corporate
          </p>
          <PlayButton />
        </div>
        <div className="relative">
          <img
            className="m-auto items-center w-[80%] h-60 object-cover md:w-[259px] md:h-[355.67px]"
            src="image 34.png"
          />
          <p className="m-auto items-center w-[80%]  md:block bg-blue-500 md:w-[100%] text-black p-1">
            Nature
          </p>
          <PlayButton />
        </div>
        <div className="relative">
          <img
            className="m-auto items-center w-[80%] h-60 object-cover md:w-[259px] md:h-[355.67px]"
            src="image 40.png"
          />
          <p className="m-auto items-center w-[80%]  md:block bg-white   md:w-[100%] text-black p-1">
            Goofy Sounds
          </p>
          <PlayButton />
        </div>
      </div>
    </div>
  );
}

export const PlayButton = () => {
  return (
    <Button className="absolute  right-10 bottom-5 md:right-1 h-6 w-6 rounded-full bg-black border border-white">
      <Play className="fill-white " />
    </Button>
  );
};
