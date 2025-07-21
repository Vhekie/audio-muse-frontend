import { LoginForm } from "@/components/login-form";

export default function LoginPage() {
  return (
    <div className="flex flex-col space-y-8 md:space-y-0 md:space-x-8 w-full md:flex-row p-12 m-auto items-center justify-center ">
      <img
        src="/Intersect.png"
        className="object-cover w-full rounded-xl md:w-1/2"
      />

      <LoginForm className="max-w-[500px] w-full  md:w-1/2  " />
    </div>
  );
}
