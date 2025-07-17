import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
export function SectionEight() {
  const navigate = useNavigate();
  return (
    <div className="bg-white m-full  ">
      <div className=" hidden flex  items-center  md:flex-row justify-between ">
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
          <p>Pricing</p>
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
      <div className="relative mb-8">
        <img className="w-full" src="Section 8.png" />
        <div className="text-black text-center  absolute top-6 md:top-1/2 left-1/2 -translate-x-1/2 md:-translate-y-1/2 w-full ">
          <p className=" text-xs  md:text-lg font-light  md:mb-2 ">
            Tailored to Your Needs
          </p>
          <h2 className="text-xl  md:text-5xl font-bold mb-4 ">
            Our payment plan
          </h2>
          <p className="text-xs font-light md:text-base md:leading-loose  md:w-[50%] m-auto   ">
            We make sure music flows freely and fairly between artists and
            creators. We work with the best to produce the best from happy,
            hopeful pop to dreamy electronic.
          </p>
        </div>
      </div>
      <div
        id="pricingPage"
        className=" flex flex-col space-y-6  w-full md:flex-row md:space-x-6 md:space-y-0  px-12 pb-24 text-black"
      >
        {/* a */}
        <div className="border border-gray-300 rounded-lg px-6 pt-12 w-full md:w-1/3">
          {/* a.1 */}
          <div className="w-full  ">
            <div className="mb-2">
              <h2 className="font-bold text-xl ">Starter</h2>
              <p className="font-bold text-3xl">$300.00</p>
              <p className="font-light text-sm ">Per Month</p>
              <p className="font-light text-sm">Billed Yearly for $900.00</p>
            </div>
            <div className="font-light w-full text-sm my-8">
              Perfect for freelance filmmakers, wedding filmmakers, creators,
              and podcasters.
            </div>{" "}
            <Button className="text-white bg-black rounded-full mb-12 w-full  ">
              Get Started
            </Button>
          </div>

          {/* a.2 */}
          <div className="w-full">
            <h2 className="mb-4">Available Coverage</h2>
            <ul className="list-disc pl-8 font-light text-sm">
              <li>Web</li>
              <li className=" md:w-[70%]">
                Social accounts up to 1M followers
              </li>
              <li>Podcast</li>
              <li className="mb-2">Monetization</li>
            </ul>
          </div>
        </div>
        {/* b */}
        <div className="border border-gray-300 rounded-lg px-6 pt-12 w-full md:w-1/3">
          {/* a.1 */}
          <div className="w-full  ">
            <div className="mb-2">
              <h2 className="font-bold text-xl ">Starter</h2>
              <p className="font-bold text-3xl">$300.00</p>
              <p className="font-light text-sm ">Per Month</p>
              <p className="font-light text-sm">Billed Yearly for $900.00</p>
            </div>
            <div className="font-light w-full text-sm my-8">
              Perfect for freelance filmmakers, wedding filmmakers, creators,
              and podcasters.
            </div>
            <Button className="text-white bg-black rounded-full mb-12 w-full  ">
              Get Started
            </Button>
          </div>

          {/* a.2 */}
          <div className="w-full">
            <h2 className="mb-4">Available Coverage</h2>
            <ul className="list-disc pl-8 font-light text-sm">
              <li>Web</li>
              <li className=" md:w-[70%]">
                Social accounts up to 1M followers
              </li>
              <li>Podcast</li>
              <li className="mb-2">Monetization</li>
            </ul>
          </div>
        </div>
        {/* c*/}
        <div className="border border-gray-300 rounded-lg px-6 pt-12 w-full md:w-1/3">
          {/* a.1 */}
          <div className="w-full  ">
            <div className="mb-2">
              <h2 className="font-bold text-xl ">Starter</h2>
              <p className="font-bold text-3xl">$300.00</p>
              <p className="font-light text-sm ">Per Month</p>
              <p className="font-light text-sm">Billed Yearly for $900.00</p>
            </div>
            <div className="font-light w-full text-sm my-8">
              Perfect for freelance filmmakers, wedding filmmakers, creators,
              and podcasters.
            </div>
            <Button className="text-white bg-black rounded-full mb-12  w-full ">
              Get Started
            </Button>
          </div>

          {/* a.2 */}
          <div className="w-full">
            <h2 className="mb-4">Available Coverage</h2>
            <ul className="list-disc pl-8 font-light text-sm">
              <li>Web</li>
              <li className=" md:w-[70%]">
                Social accounts up to 1M followers
              </li>
              <li>Podcast</li>
              <li className="mb-2">Monetization</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
// bg-gray-300
