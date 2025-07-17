import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Copyright } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
export function SectionSeven() {
  return (
    <div className="w-full">
      {/* top */}
      <div className="bg-[url('/Section7.png')] w-full   bg-cover ">
        <div className="flex flex-col text-center items-center justify-center py-24">
          <p className="text-xl font-bold text-center md:text-6xl mb-4">
            Do more with <i>sounds</i>
          </p>
          <div className="flex space-x-2  m-auto">
            <Button className="bg-white rounded-full">Get Started</Button>
            <Button className="border-1 border-white text-white bg-transparent rounded-full px-8">
              Sign In
            </Button>
          </div>
        </div>
      </div>
      {/* bottom */}
      <div className="bg-white p-12 md:px-20  ">
        <div className="flex flex-col md:flex-row w-full py-20 ">
          {/* a */}
          <div className="flex flex-col text-black w-full md:w-1/3 mb-6 md:mb-0">
            <div>
              <img className="mb-6" src="Header Logo.png" />
            </div>
            <div>
              <p className="w-[100%] md:w-[60%] font-light text-lg mb-6">
                Sound makes your story unforgettable
              </p>
            </div>
            <Button className="text-black border border-black rounded-full h-10 w-40 py-6 px-8 bg-transparent">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <img
                    className="inline mr-4"
                    src="icons/iconoir_internet.png"
                  />
                  English
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Choose your Language </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>English</DropdownMenuItem>
                  <DropdownMenuItem>Arabic</DropdownMenuItem>
                  <DropdownMenuItem>French</DropdownMenuItem>
                  <DropdownMenuItem>Swahili</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </Button>
          </div>
          {/* b */}
          <div className="flex w-full md:w-1/3 mb-6 md:mb-0">
            <div className="flex flex-col space-y-4 text-black text-xs font-thin  w-1/2">
              <h2 className="font-normal text-lg mb-6 ">Quick links</h2>
              <p className="">Home</p>
              <p>Product</p>
              <p>Pricing</p>
              <p>Contact Us</p>
              <p>FAQ</p>
            </div>
            <div className="flex flex-col space-y-4 text-black text-xs font-thin w-1/2">
              <h2 className="font-normal text-lg mb-6 ">About</h2>
              <p>About us</p>
              <p>Press</p>
              <p>Careers</p>
              <p>Blog</p>
              <p>FAQ</p>
            </div>
          </div>
          {/* c */}
          <div className="flex flex-col w-full md:w-1/3">
            <p className="text-black mb-4">Socials</p>
            <div className="flex space-x-4 mb-10 ">
              <div>
                <img className="w-12" src="icons/Frame.png" />
              </div>
              <div>
                <img className="w-12" src="icons/Twitter.png" />
              </div>
              <div>
                <img className="w-12" src="icons/IG.png" />
              </div>
            </div>
            <div>
              <p className="text-black mb-1">Join Our Newsletter</p>
              <div className="flex w-full max-w-md">
                <input
                  type="email"
                  className="flex-grow-1 px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none text-black"
                />
                <button className="px-4 py-2 -ml-6 bg-black text-white rounded-full">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* bottom B */}
        <Separator className="bg-gray-300 mb-6 " />
        <div className="flex flex-col text-black md:flex-row justify-between items-center pb-20">
          <p className="">
            Copyright <Copyright className="inline w-4" /> AudioMuse
          </p>
          <div className="flex space-x-4 ">
            <p className=" text-xs md:text-base">Legals</p>
            <p className=" text-xs md:text-base">Privacy</p>
            <p className=" text-xs md:text-base">Cookie</p>
          </div>
        </div>
      </div>
    </div>
  );
}
