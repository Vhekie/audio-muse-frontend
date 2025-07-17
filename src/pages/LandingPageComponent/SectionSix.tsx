import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
export function SectionSix() {
  return (
    <div className="bg-white px-16 pt-24 pb-14">
      {/* 1 */}
      <div className="text-black mb-12">
        <p className="tracking-wide mb-4">
          Fresh playlists, news, and product updates
        </p>
        <div className="flex justify-between ">
          <h3 className="text-xl font-bold md:text-5xl  md:tracking-tight">
            Latest from Audiomuse Sound.
          </h3>
          <Button className="bg-black text-white text-sm p-6 rounded-full">
            Explore Blogs
          </Button>
        </div>
      </div>
      {/* 2 */}
      <div className="flex flex-col md:flex-row space-x-3 w-full ">
        {/* aa */}
        <div className="md:w-1/2 md:relative">
          <div>
            <img className="" src="MusicCover.png" />
          </div>

          <div className="flex-col  text-black space-y-2 ml-3 mb-2 md:absolute bottom-4 left-2">
            <p className="text-xs ">Music</p>
            <h3 className="text-lg font-bold w-[100%]  md:text-2xl md:text-white  md:w-[60%] leading-none">
              Audiomuse Challenge 2025: This Year’s Winners
            </h3>
            <p className=" text-xs w-[100%] md:text-white md:w-[65%] ">
              Every year, Audiomuse Challenge surprises us—and this one set a
              new bar. Check out this year’s winners for Best Spec…
            </p>
            <a className="text-sm md:text-white" href="#">
              Read Article <ArrowUpRight className="inline  w-4" />
            </a>
          </div>
        </div>
        {/* bb */}
        <div className="flex flex-col space-y-4 md:w-1/2 md:h-[490px]  ">
          <div className="border-1 border-neutral-300  rounded-sm flex flex-col md:h-1/2 md:flex-row pl-4 pr-12 pt-10 pb-4 ">
            <div className="text-black">
              <p className=" text-xs mb-2 ">Music</p>
              <h3 className="font-bold leading-none md:text-2xl md:w-[80%] mb-2">
                The Evolution of Sound: From Vinyl to Streaming
              </h3>
              <p className=" text-xs md:w-[80%]">
                A nostalgic yet informative dive into how sound distribution has
                changed, positioning your platform as part of the latest wave.
              </p>
              <a className=" text-xs " href="#">
                Read Article <ArrowUpRight className="inline  w-4" />
              </a>
            </div>
            <div className="items-center m-auto">
              <img className="" src="Vinyl.png" />
            </div>
          </div>
          <div className="border-1 border-neutral-300 rounded-sm flex flex-col md:flex-row md:h-1/2  pl-4 pt-10 pr-12 pb-4">
            <div className="text-black">
              <p className=" text-xs mb-2 ">Music</p>
              <h3 className=" font-bold leading-none md:text-2xl md:w-[80%] mb-2">
                Top 10 Emerging Genres You Should Be Listening To
              </h3>
              <p className=" text-xs md:w-[80%] mb-2">
                A trend-driven piece highlighting niche genres gaining traction
                on your platform, encouraging exploration and deeper engagement.
              </p>
              <a className=" text-xs " href="#">
                Read Article <ArrowUpRight className="inline  w-4" />
              </a>
            </div>
            <div className="items-center m-auto">
              <img src="Show.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
