import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export function SectionTwo() {
  const navigate = useNavigate();
  return (
    <div className="bg-[url('/Section2bground.png')] w-[100%] h-[100%] py-10">
      <div className="">
        <p className="text-2xl font-bold md:text-5xl text-center ">
          Sound for every type of content.
        </p>
        <p className="text-2xl font-bold md:text-5xl text-center ">
          Across all platforms.
        </p>
        <p className="text-sm  md:text-2xl text-center mt-4">
          Designed to make your editing easier than ever.
        </p>
      </div>

      <div className="p-8 w-full h-full relative ">
        <img className="w-full h-full object-cover" src="section2inner.png" />
        <div className="  flex flex-col absolute bottom-12 left-12 px-8 ">
          <h2 className="  text-sm font-bold mb-2 md:text-3xl   ">
            Music for advertising.
          </h2>
          <p className=" text-xs  md:text-sm md:w-[60%]">
            The ultimate catalog for royalty-free, commercial-grade music is
            here.
          </p>
          <div className=" py-8 md:py-8 flex space-x-2">
            <Button
              onClick={() => navigate("/signup")}
              className="bg-white   text-black rounded-4xl  h-10 w-30 "
            >
              Get Started
            </Button>
            <Button
              onClick={() => navigate("/login")}
              className="bg-black text-white border border-white rounded-4xl  h-10 w-30 "
            >
              Sign In
            </Button>
          </div>
        </div>
        <div className="flex flex-col space-y-6 absolute bottom-12 right-12 hidden md:block ">
          <div className="flex space-x-2  ">
            <div className="flex flex-col space-y-2">
              <img src="Streaming.png" />
              <p className="text-center text-lg">Streaming</p>
            </div>
            <div className="flex flex-col space-y-2">
              <img src="Youtube.png" />
              <p className="text-center text-lg">Youtube</p>
            </div>
            <div className="flex flex-col space-y-2">
              <img src="Advertising.png" />
              <p className="text-center text-lg">Advertising</p>
            </div>
            <div className="flex flex-col space-y-2">
              <img src="Documentary.png" />
              <p className="text-center text-lg">Documentary</p>
            </div>
          </div>
          <div className="flex justify-end">
            <img src="Dash.png" />
          </div>
        </div>
      </div>
    </div>
  );
}
