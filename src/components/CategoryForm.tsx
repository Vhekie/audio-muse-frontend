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
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useCreateCategory } from "@/hooks/mutations/useCategories";
import type { Category } from "@/types";

type Prop = {
  onFinish: VoidFunction;
};

export function CategoryForm({ onFinish }: Prop) {
  const categoryFormSchema = yup
    .object()
    .shape({
      name: yup.string().required(),
      description: yup.string().required(),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(categoryFormSchema),
    defaultValues: { name: "", description: "" },
  });

  // const { createCategory } = useCategoryStore();
  const { mutateAsync: createCategory } = useCreateCategory();

  const onSubmit = async (data: Category) => {
    await createCategory(data);
    onFinish();
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={cn("flex flex-col gap-6")}>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Create New Category</CardTitle>
              <CardDescription>
                Enter the details of a new Category
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div>
                <div className="flex flex-col gap-6">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Category Name</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Afrobeats"
                      {...register("name")}
                    />
                    {errors.name?.message && <p>{errors.name?.message}</p>}
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center">
                      <Label htmlFor="description">Description</Label>
                    </div>
                    <Input
                      id="description"
                      type="text"
                      {...register("description")}
                    />
                    {errors.description?.message && (
                      <p>{errors.description?.message}</p>
                    )}
                  </div>
                  <Button type="submit" className="w-full">
                    Submit
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </form>
    </>
  );
}
