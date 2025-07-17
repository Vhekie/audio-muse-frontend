import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import type { AudioData } from "@/types";

import { useCreateAudio } from "@/hooks/mutations/useAudios";
import { useGetAllCategories } from "@/hooks/queries/useCategories";

import axiosInstance from "@/lib/axios";
import axios from "axios";

type Prop = {
  onFinish: VoidFunction;
};

export function AudioUploadForm({ onFinish }: Prop) {
  const { mutateAsync: createAudio } = useCreateAudio();
  const [file, setFile] = React.useState<File>();
  const [isLoading, setIsLoading] = React.useState(false);

  const audioUploadSchema = yup
    .object()
    .shape({
      title: yup.string().required(),
      point: yup.number().typeError("point must be a number").required(),
      categoryId: yup.string().required(),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(audioUploadSchema),
    defaultValues: { title: "" },
  });

  const onSubmit = async (data: AudioData) => {
    console.log(data);
    if (!file) {
      return;
    }
    setIsLoading(true);
    try {
      // Create  presigned url
      const res = await axiosInstance.post("/uploads", { fileName: file.name });

      // Upload the data
      await axios.put(res.data.presignedURL, file);
      await createAudio({ ...data, url: res.data.publicURL });
      setIsLoading(false);
      onFinish();
    } catch (error) {
      setIsLoading(false);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={cn("flex flex-col gap-6")}>
        <div>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="title">Audio Title</Label>
              <Input
                id="title"
                type="text"
                placeholder="Joy "
                {...register("title")}
              />
              {errors.title?.message && <p>{errors.title?.message}</p>}
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="point">Point</Label>
              </div>
              <Input id="point" type="number" {...register("point")} />
              {errors.point?.message && <p>{errors.point?.message}</p>}
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="category">Categories</Label>
              </div>
              {
                <SelectCategory
                  onChange={(value: string) => {
                    setValue("categoryId", value);
                  }}
                />
              }
              {errors.categoryId?.message && (
                <p>{errors.categoryId?.message}</p>
              )}
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="url">File</Label>
              </div>
              <Input
                id="url"
                type="file"
                accept="audio/*"
                onChange={(e) => {
                  setFile(e.target.files?.[0]);
                }}
              />
            </div>

            <Button type="submit" className="w-full" disabled={isLoading}>
              Upload Audio
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}

type SelectCategoryProps = {
  onChange: (value: string) => void;
};

const SelectCategory = ({ onChange }: SelectCategoryProps) => {
  const { data: categories } = useGetAllCategories();
  return (
    <Select onValueChange={(value) => onChange(value)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a Category" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Categories</SelectLabel>
          {categories?.map((category) => {
            return (
              <SelectItem key={category._id} value={category._id!}>
                {category.name}
              </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
