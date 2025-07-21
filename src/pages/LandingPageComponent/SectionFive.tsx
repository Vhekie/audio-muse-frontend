import {} from "lucide-react";
export function SectionFive() {
  return (
    <div className="pt-18">
      <div className="flex px-12 py-16">
        <div>
          <p>Exclusive tracks</p>
          <h2 className="text-sm  font-bold mb-2 md:text-4xl md:w-[70%]  ">
            Tunes from artists all over the world, producers, and composers
          </h2>
        </div>
        <div></div>
      </div>
      <div className="grid grid-cols-3 gap-4 mb-16 w-full">
        {/* <div className="flex flex-col space-y-2 w-full">
          <img src="Taylor.png" className="w-full object-cover" />
          <p className="text-left ">Taylor Swift</p>
        </div> */}
        <div className="flex flex-col space-y-2 w-full">
          <img src="Wizkid.png" className="w-full object-cover" />
          <p className="text-center">Wizkid</p>
        </div>
        <div className="flex flex-col space-y-2 w-full">
          <img src="Beyonce.png" className="w-full object-cover" />
          <p className="text-center">Beyoncé</p>
        </div>
        <div className="flex flex-col space-y-2 w-full">
          <img src="Ruth.png" className="w-full object-cover" />
          <p className="text-center">Ruth B</p>
        </div>
        {/* <div className="flex flex-col space-y-2 w-full ">
          <img
            src="Drake.png"
            className="w-[587.2px] h-[485.42px] object-cover"
          />
          <p className="text-right">Drake</p>
        </div> */}
      </div>
    </div>
  );
}
