import axiosInstance from "@/lib/axios";
import type { Category, UpdateCategoryParams } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

export const useCreateCategory = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: Category) => {
      const res = await axiosInstance.post("/categories", data);
      return res.data.category;
    },
    onError: (error: any) => {
      toast.error(
        error?.response?.data?.message || "Error in create category "
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
  });
};

export const useUpdateCategory = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ id, data }: UpdateCategoryParams) => {
      const res = await axiosInstance.put(`/categories/${id}`, data);
      return res.data.category;
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || "Error in update category");
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["category"] });
    },
  });
};
export const useDeleteCategory = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      await axiosInstance.delete(`/categories/${id}`);
    },
    onError: (error: any) => {
      toast.error(error.message) || "Error in delete category";
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
  });
};
