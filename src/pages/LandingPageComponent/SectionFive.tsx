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
      <div className="flex space-x-2 mb-16">
        <div className="flex-col space-y-2">
          <img src="Taylor.png" />
          <p className="text-left ">Taylor Swift</p>
        </div>
        <div className="flex-col space-y-2">
          <img src="Wizkid.png" />
          <p className="text-center">Wizkid</p>
        </div>
        <div className="flex-col space-y-2">
          <img src="Beyonce.png" />
          <p className="text-center">Beyoncé</p>
        </div>
        <div className="flex-col space-y-2">
          <img src="Ruth.png" />
          <p className="text-center">Ruth B</p>
        </div>
        <div className="flex-col space-y-2">
          <img src="Drake.png" />
          <p className="text-right">Drake</p>
        </div>
      </div>
    </div>
  );
}
