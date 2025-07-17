import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import type { ChangePasswordData } from "@/types";
import { useUserStore } from "@/stores/useUserStore";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

const ChangeUserPassword = () => {
  const navigate = useNavigate();
  const passwordSchema = yup
    .object()
    .shape({
      currentPassword: yup.string().required("Current Password is Required"),
      newPassword: yup
        .string()
        .required("Fill in new Password")
        .min(6, "New password must be at least 6 characters long"),
      confirmNewPassword: yup
        .string()
        .required()
        .oneOf([yup.ref("newPassword")], "Passwords must match"),
    })
    .required();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(passwordSchema),
  });
  const { changePassword } = useUserStore();
  const onSubmit = async (data: ChangePasswordData) => {
    await changePassword(data);
    console.log("Password changed successfully");
    navigate("/dashboard");
  };
  return (
    <div>
      <p className="mb-5">Change Email Address</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-6">
          <div className="grid gap-2">
            <Label htmlFor="password">Current Password</Label>
            <Input
              id="password"
              type="password"
              {...register("currentPassword")}
            />
            {errors.currentPassword?.message && (
              <p>{errors.currentPassword?.message}</p>
            )}
          </div>

          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="newEmail">New Password</Label>
            </div>
            <Input id="newEmail" type="password" {...register("newPassword")} />
            {errors.newPassword?.message && (
              <p>{errors.newPassword?.message}</p>
            )}
          </div>

          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="confirmNewPassword">Confirm New Password</Label>
            </div>
            <Input
              id="confirmNewPassword"
              type="password"
              {...register("confirmNewPassword")}
            />
            {errors.confirmNewPassword?.message && (
              <p>{errors.confirmNewPassword?.message}</p>
            )}
          </div>

          <div className="flex justify-end ">
            <Button
              variant="outline"
              type="submit"
              className="w-fit  border rounded-full p-5"
            >
              Change Password
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default ChangeUserPassword;
