import { DashboardLayout } from "@/components/Layout";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  useUpdateCategory,
  useDeleteCategory,
} from "@/hooks/mutations/useCategories";
import { useGetOneCategory } from "@/hooks/queries/useCategories";
import type { Category } from "@/types";

const CategoryList = () => {
  const { mutateAsync: updateCategory } = useUpdateCategory();
  const { mutateAsync: deleteCategory } = useDeleteCategory();

  const [openModal, setOpenModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const { id } = useParams();
  const { data: category } = useGetOneCategory(id);
  const navigate = useNavigate();
  const categorySchema = yup
    .object()
    .shape({
      name: yup.string().required(),
      description: yup.string().required(),
    })
    .required();

  type CategoryInput = {
    name: string;
    description: string;
  };

  const methods = useForm<CategoryInput>({
    resolver: yupResolver(categorySchema),
    defaultValues: { name: category?.name, description: category?.description },
  });
  const onSubmit = async (data: Category) => {
    await updateCategory({ id, data });
    setOpenModal(false);
  };
  const { handleSubmit } = methods;

  const handleDeleteCategory = async (id: string) => {
    await deleteCategory(id);
    navigate("/admin/categories");
  };
  const DeleteCategoryInfo = () => {
    return <p>You can ONLY delete a category without an audio in it.</p>;
  };
  if (!id) return null;
  return (
    <DashboardLayout>
      <div className="flex gap-2">
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <div>
              <p>{category?.name}</p>
              <p>{category?.description}</p>
            </div>

            <Modal
              open={openModal}
              setOpen={setOpenModal}
              heading="Edit Category"
              headingDescription="Update Category details below"
              content={<EditCategoryForm />}
              actionLabel="Save Changes"
              cancelLabel="Cancel"
              onConfirm={handleSubmit(onSubmit)}
              trigger={<Button variant="outline">Update</Button>}
            />
          </form>
        </FormProvider>

        <Modal
          open={openDeleteModal}
          setOpen={setOpenDeleteModal}
          heading="Delete Category"
          headingDescription="Are you sure you want to delete this category"
          content={<DeleteCategoryInfo />}
          actionLabel="Yes"
          cancelLabel="No, go back"
          // onConfirm={handleSubmit(onSubmit)}
          onConfirm={() => handleDeleteCategory(id)}
          trigger={<Button variant="outline">Delete</Button>}
        />
      </div>
      <p className="p-6">Audios</p>
    </DashboardLayout>
  );
};

export default CategoryList;

const EditCategoryForm = () => {
  const { id } = useParams();
  const { data: category } = useGetOneCategory(id);
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="grid gap-4">
      <div className="grid gap-3">
        <Label htmlFor="name">Category Name</Label>
        <Input
          id="name"
          type="text"
          defaultValue={category?.name}
          {...register("name")}
        />
        {errors.name?.message && <p>{errors.name?.message as string}</p>}
      </div>
      <div className="grid gap-3">
        <Label htmlFor="description">Description</Label>
        <Input
          id="description"
          type="text"
          defaultValue={category?.description}
          {...register("description")}
        />
        {errors.description?.message && (
          <p>{errors.description?.message as string}</p>
        )}
      </div>
    </div>
  );
};
