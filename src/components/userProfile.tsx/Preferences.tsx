import { Button } from "../ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function Preferences() {
  return (
    <div>
      <h2 className="mt-10">Language Preferences</h2>
      <div className="mt-4 p-4 bg-neutral-900 flex justify-between">
        <div>
          <p className="">Language</p>
          <p className="text-xs">
            Choose Language - Changes will be applied after you restart the
            platform
          </p>
        </div>
        <Button className="text-xs text-white bg-neutral-800">English</Button>
      </div>
      <h2 className="mt-8 mb-3 ">Audio Preferences</h2>

      <RadioGroup defaultValue="Compressed MP3 file - 320kbps 48kHz(.mp3)">
        <div className="flex items-center gap-3">
          <RadioGroupItem
            value="Compressed MP3 file - 320kbps 48kHz(.mp3)"
            id="r1"
          />
          <div>
            <Label htmlFor="r1">
              Compressed MP3 file - 320kbps 48kHz(.mp3)
            </Label>
            <p className="text-xs">
              Compressed audio file, some original recording quality lost
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <RadioGroupItem value="Wave file - 24 bit 48kHz (.wav)" id="r2" />
          <div>
            <Label htmlFor="r2">Wave file - 24 bit 48kHz (.wav)</Label>
            <p className="text-xs">
              Large lossless audio file, original recording quality
            </p>
          </div>
        </div>
      </RadioGroup>

      <div className="flex justify-end mt-10 ">
        <Button
          variant="outline"
          type="submit"
          className="w-fit  border rounded-full p-5"
        >
          Update
        </Button>
      </div>
    </div>
  );
}
