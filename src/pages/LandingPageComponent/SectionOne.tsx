import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
export function SectionOne() {
  const navigate = useNavigate();

  return (
    <div className="bg-white w-full overflow-x-hidden relative ">
      {/* 1 */}
      <div className=" flex  items-center  md:flex-row justify-between ">
        <div>
          <img className="p-4" src="/Header Logo.png" />
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Menu className="text-black md:hidden" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Product</DropdownMenuItem>
            <DropdownMenuItem>Pricing</DropdownMenuItem>
            <DropdownMenuItem>How it works</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <div className="hidden md:flex  text-black gap-4 ">
          <p>Product</p>
          <a href="#pricingPage">Pricing</a>
          <p>How it works</p>
        </div>
        <div className="flex justify-center gap-1 pr-4">
          <Button
            onClick={() => navigate("/login")}
            className="border border-black bg-white text-black rounded-4xl h-10 w-30 hidden md:inline "
          >
            Sign In
          </Button>
          <Button
            onClick={() => navigate("/signup")}
            className="bg-black text-white border-2  rounded-4xl  h-10 w-30 hidden md:inline"
          >
            Get Started
          </Button>
        </div>
      </div>
      {/* 2 */}
      <div>
        <img className="h-24 w-full" src="/Pattern Top.png" />
      </div>
      {/* 3 */}
      <div className="text-black flex flex-col gap-4 mb-10 md:mb-20">
        <p className="text-2xl font-bold md:text-6xl text-center">
          Sound makes your story unforgettable.
        </p>
        <p className=" w-[90%] md:text-center tracking-wide md:w-[48%] mx-auto">
          Harness the most extensive collection of music and sound effects
          available. With usage exceeding 1.5 billion daily plays and all rights
          covered, you’re free to publish with confidence anywhere in the world.
        </p>
        <div className="flex justify-center gap-1">
          <Button
            onClick={() => navigate("/signup")}
            className="bg-black text-white border-2 rounded-4xl  h-10 w-30 "
          >
            Get started
          </Button>
          <Button
            onClick={() => navigate("/login")}
            className="border border-black bg-white text-black rounded-4xl  h-10 w-30 "
          >
            Sign In
          </Button>
        </div>
      </div>
      {/* 4 */}
      <div className=" w-full md:flex items-center  ">
        <img src="image 10.png" className="-mr-12 hidden md:inline " />
        <img src="image 11.png" className="-mr-14 " />
        <img src="image 9.png" className="hidden md:inline " />
      </div>
    </div>
  );
}
