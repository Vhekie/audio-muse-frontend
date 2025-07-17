import ChangeUserPassword from "@/components/userProfile.tsx/ChangeUserPassword";
import { DashboardLayout } from "@/components/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SubscriptionPage } from "@/components/userProfile.tsx/Subscription";
import { Preferences } from "@/components/userProfile.tsx/Preferences";

export function UserProfilePage() {
  return (
    <DashboardLayout>
      <div className="flex h-[200px] md:h-[288px] md:w-[1012px] px-5 ">
        <div className="bg-purple-900 w-[236px] ">
          <img className=" rounded-full  " src="/avatar.png"></img>
        </div>
        <div className="p-8 leading-loose bg-neutral-900 w-[776px] overflow-hidden items-center">
          <p className="tracking-wide">User</p>
          <p className=" text-2xl font-bold  md:text-6xl ">Account</p>
        </div>
      </div>
      {/* <div className="flex gap-4">
        <Button
          onClick={() => setActiveTab("profile")}
          className={
            activeTab === "profile"
              ? "bg-white text-black "
              : "bg-black text-white border"
          }
        >
          Profile
        </Button>
        <Button
          onClick={() => setActiveTab("subscription")}
          className={
            activeTab === "subscription"
              ? "bg-white text-black"
              : "bg-black text-white border"
          }
        >
          Subscription
        </Button>
        <Button
          onClick={() => setActiveTab("preferences")}
          className={
            activeTab === "preferences"
              ? "bg-white text-black"
              : "bg-black text-white border"
          }
        >
          Preferences
        </Button>
      </div> 
    {activeTab === "profile" && <ChangeUserPassword />}
      {activeTab === "subscription" && <SubscriptionPage />}  */}
      <Tabs defaultValue="profile" className="px-5">
        <TabsList>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="subscription">Subscription</TabsTrigger>
          <TabsTrigger value="preferences">Preferences</TabsTrigger>
        </TabsList>
        <TabsContent value="profile">
          <ChangeUserPassword />
        </TabsContent>
        <TabsContent value="subscription">
          <SubscriptionPage />
        </TabsContent>
        <TabsContent value="preferences">
          <Preferences />
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
}
