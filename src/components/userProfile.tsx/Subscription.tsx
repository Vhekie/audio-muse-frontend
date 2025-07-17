import { Separator } from "@radix-ui/react-separator";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export function SubscriptionPage() {
  return (
    <div>
      <p className="my-4 ">Subscription</p>
      <p className="mb-3 text-xs">Plan</p>
      <div className="border  p-5 bg-neutral-900 ">
        <div className="flex flex-col justify-between mb-6 md:flex-row ">
          <div className="text-2xl ">Premium</div>
          <div>
            <a className="underline" href="#">
              Upgrade Plan
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-between mb-6 md:flex-row  ">
          <div>
            <div>15 EUR/Months</div>
            <div className="text-gray-300">(VAT or Sales tax may apply )</div>
          </div>
          <div className="flex flex-col gap-6">
            <a className="underline" href="#">
              Switch to a lower plan
            </a>

            <a className="underline" href="#">
              Change to annual billing
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-between md:flex-row">
          <div className="flex flex-col justify-between w-1/2 md:flex-row ">
            <div>
              <div className="text-gray-400 ">Status</div>
              <div>Trial</div>
            </div>
            <div>
              <div className="text-gray-400 ">Trial ends</div>
              <div>May 29, 2025</div>
            </div>
            <div>
              <div className="text-gray-400 ">Next Payment</div>
              <div>Mat 30, 2025</div>
            </div>
          </div>

          <div className="pt-5">
            <a className="underline text-red-800 " href="#">
              Cancel Subscription Renewal
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-10 ">
        <Button
          variant="outline"
          type="submit"
          className="w-fit  border rounded-full p-5"
        >
          Manage Subscription
        </Button>
      </div>
      <Separator className="my-15 bg-gray-300 h-px w-full " />
      <div className="flex flex-col gap-4 p-5">
        <div className="flex flex-col justify-between md:flex-row">
          <div>Billing Information</div>
          <div>
            <a className="underline"> Billing History</a>
          </div>
        </div>
        <div className="flex flex-col gap-8  md:flex-row">
          <div className="flex flex-col gap-2 w-[50%]">
            <div>Card</div>
            <Input type="text" placeholder="1234*********" />
          </div>
          <div className="flex flex-col gap-2 w-[50%]">
            <div>Expires</div>
            <Input type="date" />
          </div>
        </div>
        <div>
          <div>Address</div>
          <Input type="text" />
        </div>
        <div className="flex justify-end mt-10 ">
          <Button
            variant="outline"
            type="submit"
            className="w-fit  border rounded-full p-5"
          >
            Edit Details
          </Button>
        </div>
      </div>
    </div>
  );
}
