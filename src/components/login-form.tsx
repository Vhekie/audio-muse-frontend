import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useUserStore } from "@/stores/useUserStore";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@radix-ui/react-separator";
import type { LoginData } from "@/types";
import { ArrowUpRight } from "lucide-react";

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"form">) {
  const navigate = useNavigate();

  const loginSchema = yup
    .object()
    .shape({
      email: yup.string().required(),
      password: yup.string().required(),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: { email: "" },
  });

  const { login } = useUserStore();

  const onSubmit = async (data: LoginData) => {
    console.log(data, "any");
    const { user } = await login(data);

    if (user?.role === "creator") {
      navigate("/dashboard/creator/audio-page");
    }
    if (user?.role === "user") {
      navigate("/dashboard");
    }
    if (user?.role === "admin") {
      navigate("/dashboard");
    }

    console.log("navigate success");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={className} {...props}>
      <div className="flex flex-col space-x-6 justify-center ">
        <Card>
          <CardHeader>
            <img src="audiomuselogo.png" className="w-[143px] h-[34px] mb-8" />
            <CardTitle className="text-2xl md:text-4xl">
              Welcome Back, Login
            </CardTitle>
            <CardDescription className="flex flex-col md:flex-row gap-2 mb-4 font-light text-white">
              <p> Don't have an AudioMuse Account?</p>
              <div className="flex font-bold">
                <Link to="/signup" className="underline underline-offset-4">
                  Create an account
                </Link>
                <ArrowUpRight className="h-4 w-4 mt-1" />
              </div>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2  ">
                  <Label htmlFor="email">Email or Username</Label>
                  <Input
                    className="rounded-full"
                    id="email"
                    type="text"
                    placeholder="me@example.com"
                    {...register("email")}
                  />
                  {errors.email?.message && <p>{errors.email?.message}</p>}
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                  </div>
                  <Input
                    className="rounded-full"
                    id="password"
                    type="password"
                    {...register("password")}
                  />
                  {errors.password?.message && (
                    <p>{errors.password?.message}</p>
                  )}
                  <div className="flex md:items-center justify-between gap-2 md:gap-0 mb-6">
                    <div className="flex items-center gap-3">
                      <Checkbox id="rememberMe" />
                      <Label htmlFor="rememberMe">Remember Me</Label>
                    </div>
                    <Link
                      to="/signup"
                      className=" text-xs font-light underline-offset-4 underline"
                    >
                      Forgot your password?
                    </Link>
                  </div>
                </div>
                <Button type="submit" className="w-full rounded-full">
                  Login
                </Button>
                <div className="flex items-center gap-2">
                  <Separator className=" bg-gray-300 h-px w-1/2 " />
                  <span className="items-center text-xs">or</span>
                  <Separator className=" bg-gray-300 h-px w-1/2 " />
                </div>
                <div className="flex flex-col space-y-6 ">
                  <Button className="w-full rounded-full bg-white text-black">
                    Continue with Google
                  </Button>
                  <Button className="w-full rounded-full bg-white text-black ">
                    Continue with Apple
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </form>
  );
}
