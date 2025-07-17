import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
export function SectionThree() {
  const navigate = useNavigate();
  return (
    <div className="bg-white w-full overflow-x-hidden relative w-full ">
      <div>
        <img className="w-full" src="Pattern Top.png" />
      </div>
      <p className=" text-2xl text-black font-bold text-center md:text-6xl ">
        Discover what sound can do.
      </p>

      <div className="flex flex-col  md:flex-row md:space-x-12 p-8 md:p-12 w-full">
        {/* 1 */}
        <div className="md:w-1/2">
          <div className="mb-12 md:w-full">
            <img
              className=" w-full md:w-full md:h-[550px] object-cover rounded-md "
              src="soundwave.png"
            />
          </div>

          <div className="my-6">
            <h4 className="text-sm  text-black font-bold mb-2 md:text-2xl  ">
              Use music to find music.
            </h4>
            <p className=" text-xs text-black md:text-sm md:w-[60%]">
              Look for songs that vibe like your favorite riff, hook, drop, or
              bridge.
            </p>
          </div>
          <div className="w-full">
            <img
              className="md:w-full md:h-[1104px] object-cover  rounded-md "
              src="frame.png"
            />
          </div>

          <div className="pt-8 pb-24">
            <h4 className=" text-sm text-black font-bold md:text-2xl  md:w-[30%] mb-2 ">
              Discover song versions.
            </h4>
            <p className="text-xs text-black md:text-sm md:w-[55%]">
              Explore exclusive music for all your projects, immediately ready
              to license in every version available—instrumentals, vocals, you
              name it.
            </p>
          </div>
        </div>

        {/* 2 */}
        <div className="md:w-1/2">
          <div>
            <div className="md:pt-32">
              <div>
                <h4 className="text-sm text-black font-bold mb-2 md:w-[45%] md:text-2xl  ">
                  Discover our royalty-free music for videos
                </h4>
                <p className=" text-xs text-black md:text-sm md:w-[45%] ">
                  Check out more than 100,000 tracks in our awesome catalog to
                  find the perfect tunes for any occasion!
                </p>
              </div>

              <div className=" py-8 md:py-16 flex space-x-2">
                <Button
                  onClick={() => navigate("/signup")}
                  className="bg-black text-white border-2 rounded-4xl  h-10 w-30 "
                >
                  Get Started
                </Button>
                <Button
                  onClick={() => navigate("/login")}
                  className="border border-black bg-white text-black rounded-4xl  h-10 w-30 "
                >
                  Sign In
                </Button>
              </div>
            </div>
          </div>
          <div className="md:pt-20 md:w-full">
            <img
              className=" md:h-[550px] rounded-md  object-cover md:w-full"
              src="image 37.png"
            />
          </div>
          <div className="my-6 ">
            <h4 className="text-sm text-black md:text-2xl font-bold md:w-[40%] mb-2 ">
              Human voiceovers, enhanced by AI
            </h4>
            <p className=" text-xs text-black md:text-sm md:w-[55%] ">
              From ads to long-form content, craft the perfect narration for any
              project. Access a wide range of human voices, or even use your
              own, then customize with AI in your workflow.
            </p>
          </div>
          <div className="m-0 p-0 md:w-full">
            <img
              className="md:w-full md:h-[550px] object-cover  rounded-md "
              src="frame3.png"
            />
          </div>
          <div className="pt-8 pb-24">
            <h4 className=" text-sm text-black md:text-2xl font-bold md:w-[30%] mb-2 ">
              Perfect sound Effects for you
            </h4>
            <p className="text-xs text-black md:text-sm md:w-[50%] ">
              Explore our collection of 200,000+ unique sound effects, including
              whoosh, cartoon, water, and ghost sounds across 700+ royalty-free
              categories.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
