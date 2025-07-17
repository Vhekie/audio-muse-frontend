import { LoginForm } from "@/components/login-form";

export default function LoginPage() {
  return (
    <div className="flex flex-col w-full gap-8 md:flex-row">
      <img src="/Intersect.png" className=" w-full  md:w-[50%]" />
      <LoginForm className="w-full  md:w-[50%]" />
    </div>
  );
}
