import { cn } from "@/lib/utils";
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
import type { UserData } from "@/types";

import { useUserStore } from "@/stores/useUserStore";

export function SignUpForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const navigate = useNavigate();
  const userSchema = yup.object().shape({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last name is required "),
    email: yup.string().required("Email is required").email("Invalid Email"),
    userName: yup.string(),
    password: yup.string().min(6).max(12).required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema),
    defaultValues: { firstName: "", lastName: "", email: "", userName: "" },
  });
  // type signupFormData = {
  //   firstName: string;
  //   lastName: string;
  //   email: string;
  //   userName?: string;
  //   password: string;
  // };

  const { signup } = useUserStore();
  const onSubmit = async (data: UserData) => {
    await signup(data);
    navigate("/dashboard");
    console.log("navigate success");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={cn("flex flex-col gap-6", className)} {...props}>
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Sign Up</CardTitle>
            <CardDescription>
              Enter your details below to get an account
            </CardDescription>
          </CardHeader>

          <CardContent>
            <div>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    type="text"
                    placeholder="Johnny"
                    {...register("firstName")}
                  />
                  {errors.firstName?.message && (
                    <p>{errors.firstName?.message}</p>
                  )}
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" type="text" {...register("lastName")} />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="text"
                    placeholder="m@example.com"
                    {...register("email")}
                  />
                  {errors.lastName?.message && (
                    <p>{errors.lastName?.message}</p>
                  )}
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="userName">User Name</Label>
                  <Input
                    id="userName"
                    type="text"
                    placeholder="jdrille25"
                    {...register("userName")}
                  />
                  {errors.userName?.message && (
                    <p>{errors.userName?.message}</p>
                  )}
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                    {/* <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a> */}
                  </div>
                  <Input
                    id="password"
                    type="password"
                    {...register("password")}
                  />
                  {errors.password?.message && (
                    <p>{errors.password?.message}</p>
                  )}
                </div>
                <Button type="submit" className="w-full">
                  Sign Up
                </Button>
                <Button variant="outline" className="w-full">
                  Sign Up with Google
                </Button>
              </div>
              <div className="mt-4 text-center text-sm">
                Already have an account?{" "}
                <Link to="/login" className="underline underline-offset-4">
                  Login
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </form>
  );
}
